import coffee from './data';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import * as states from 'us-state-codes';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminOptipng from 'imagemin-optipng';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
  await fs.writeFile(
    './data/coffee.json',
    JSON.stringify(
      await Promise.all(
        coffee.map(async shop => {
          const mapData = await fetch(
            encodeURI(
              `https://nominatim.openstreetmap.org/search?q=${
                shop.location
              }&format=json&addressdetails=1&`,
            ),
          );
          const location = await mapData.json();

          const imageName = (a => a[a.length - 1])(shop.image.href.split('/'));
          await fs.mkdirp('./data/tempImages');
          const stream = fs.createWriteStream(`./data/tempImages/${imageName}`);
          await fetch(shop.image.href).then(async img => img.body.pipe(stream));

          await new Promise((res, rej) => {
            stream.on('finish', () => res());
            stream.on('error', () => rej());
          });

          await fs.mkdirp('./dist/images');
          await imagemin([`./data/tempImages/${imageName}`], './dist/images', {
            plugins: [
              imageminJpegtran(),
              imageminPngquant({
                quality: [0.6, 0.8],
              }),
            ],
          });
          // await fs.writeFile('blah.jpg', buffer);
          return {
            ...shop,
            image: `./images/${imageName}`,
            location: `${
              location[0].address.city === 'Nashville-Davidson'
                ? 'Nashville'
                : location[0].address.city
            }, ${states.getStateCodeByStateName(location[0].address.state)}`,
          };
        }),
      ),
    ),
  );
})();
