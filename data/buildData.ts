import coffee from './data';
import fs from 'fs-extra';
import fetch from 'node-fetch';
import * as states from 'us-state-codes';

(async () => {
  await fs.writeFile(
    './data/coffee.json',
    JSON.stringify(
      await Promise.all(
        coffee.map(async shop => {
          const data = await fetch(
            encodeURI(
              `https://nominatim.openstreetmap.org/search?q=${
                shop.location
              }&format=json&addressdetails=1&`,
            ),
          );
          const location = await data.json();

          return {
            ...shop,
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
