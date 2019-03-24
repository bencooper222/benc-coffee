interface VectorizedProperty {
  score: number;
  description: string;
}
interface Shop {
  description: string;
  image: URL;
  location: string;
  name: string;
  vectorizedAttrs: {
    coffee: VectorizedProperty;
    seating: VectorizedProperty;
    wifi: VectorizedProperty;
    vibe: VectorizedProperty;
  };
  emoji: string;
}

const coffee: Shop[] = [
  {
    emoji: '😋',
    description:
      'A really nice coffee shop in an awkward location. Within a scooter ride of Vanderbilt.',
    image: new URL(
      'https://shared.benc.io/screencaps/2019/03/ea194cc6-9b22-4384-b15d-fe47eebd0399.png',
    ),
    location: '3431 Murphy Rd, Nashville, TN 37203',
    name: 'Dose Coffee',
    vectorizedAttrs: {
      coffee: {
        description:
          "Their standout drink is the Shakerato, a latte-like drink that's chilled with ice, \
           has the ice drained out and then shaken for extra foam. \
           It results in latte-like taste without ice diluting it.",
        score: 4.2,
      },
      seating: {
        description:
          'Desks are generally not big enough except for a few tables. Also lacks couches and such.\
         However, chairs are comfy.',
        score: 3,
      },
      vibe: {
        description:
          'Great music that combines throwback hits with lo-fi beats. Decor is calming; \
          a great place to work',
        score: 3.7,
      },
      wifi: {
        description:
          'Speeds are decent but they kick you every hour, sometimes more than that.',
        score: 2,
      },
    },
  },
  {
    emoji: '🏕',
    description:
      'A good spot to do low-intensity work with great coffee. Loud but good music.',
    image: new URL(
      'https://shared.benc.io/screencaps/2019/03/289bcc22-81e6-4f35-9377-e164d4de2270.jpg',
    ),
    location: '2813 West End Ave, Nashville, TN 37203',
    name: 'Three Brothers Coffee',
    vectorizedAttrs: {
      coffee: {
        score: 3.9,
        description:
          'Definitely good but unexceptional coffee (average of the best is how I think about it).\
          Their Americola is worth trying - an espresso shot in Coke with actual sugar. ',
      },
      seating: {
        score: 3.5,
        description:
          "Their chairs/stools are [bleh](https://www.vox.com/the-goods/2019/1/31/18204407/metal-chair-cafe-restaurant-tolix-marais)\
           and their tables are bumpy. Usually a decent amount available and there's usually space to spread out your stuff. ",
      },
      wifi: {
        score: 3.6,
        description: "Good Wifi that goes to hell when it's crowded. ",
      },
      vibe: {
        score: 4,
        description:
          'I love the hiking store integrationa and the art is super cool. ',
      },
    },
  },
];

export default coffee;
