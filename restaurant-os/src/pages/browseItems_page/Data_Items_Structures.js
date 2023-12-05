// Data_Items_Structures.js

const itemData = {
    appetizers: [
      {
        itemName: 'Gyoza',
        briefDescri: '5 servings',
        imageSrc: '/Appetizers/DumplingsGyoza.png',
        price: 7.99,
        longDescri: 'Savory Vegetable Gyozas',
        ingredients: [
          "Filling",
        ],
      },
      {
        itemName: 'Spring Rolls',
        briefDescri: 'Pork - (3 pieces)',
        imageSrc: '/Appetizers/SpringRolls.jpg',
        price: 6.99,
        longDescri: 'Savory Pork Spring Rolls',
        ingredients: [
        ],
      },
      {
        itemName: 'Edamame',
        briefDescri: '200 grams',
        imageSrc: '/Appetizers/Edamame.jpg',
        price: 3.99,
        longDescri: 'Fresh Edamame served with Sea salt',
        ingredients: [
        ],
      },
      {
        itemName: "Hiyayakko",
        briefDescri: "Contains Silken tofu",
        imageSrc: "/Appetizers/Hiyayakko.jpg",
        price: 5.99,
        longDescri: "Hiyayakko is a delightful and refreshing Japanese dish that effortlessly combines simplicity with incredible flavors. This cold tofu salad is not just a meal; it's a culinary experience that will tantalize your taste buds and leave you craving for more.",
        ingredients: [
        ],
      },
      {
        itemName: "Salad Rolls",
        briefDescri: "Salad Rolls serving",
        imageSrc: "/Appetizers/SaladRolls.webp",
        price: 8.99,
        longDescri: "Delicate rice paper wrappers enveloping succulent shrimp, complemented by tender rice vermicelli and a garden of aromatic herbs like mint, cilantro, and Thai basil. ",
        ingredients: [
        ],
      },
      {
        itemName:"Okonomiyaki",
        briefDescri:"Japanese Pancake",
        imageSrc:"/Appetizers/Okonomiyaki.jpg",
        price:10.99,
        longDescri:"A batter made with flour, grated yam, and shredded cabbage. Tender slices of pork belly, fresh green onions, and a generous sprinkle of tenkasu (tempura crumbs). The pièce de résistance? Our signature okonomiyaki sauce — a sweet and savory drizzle.",
        ingredients: [
        ],
      },
    ],


    sushi: [
      {
        itemName:"California Roll",
        briefDescri:"4 pieces",
        imageSrc: "/Sushi/californiaRoll.jpg",
        price: 8.99,
        longDescri: "Avocado, Crab and Cucumber",
        ingredients: [
        ],
      },
      {
        itemName: "Philadelphia Roll",
        briefDescri: "8 pieces",
        imageSrc: "/Sushi/philadelphiaroll.jpg",
        price: 17.99,
        longDescri: "Cream Cheese, Salmon, Avocado, Cucumber, Sesame Seeds",
        ingredients: [
        ],
      },
      {
        itemName: "Dynamite Roll",
        briefDescri: "8 pieces",
        imageSrc: "/Sushi/dynamiteroll.jpg",
        price: 16.99,
        longDescri: "Shrimp tempura, avocado, cucumber",
        ingredients: [
        ],
      }
        
    ],


    sashimi: [
      {
        itemName:"Salmon Sashimi",
        briefDescri:"6 pieces",
        imageSrc: "/Sashimi/SalmonSashimi.webp",
        price: 18.99,
        longDescri: "Fresh Salmon",
        ingredients: [
          "Extra Wasabi",
        ],
      },
      {
        itemName:"Tuna Sashimi",
        briefDescri:"4 pieces",
        imageSrc: "/Sashimi/tunaSashimi.jpg",
        price: 13.99,
        longDescri: "Fresh Tuna",
        ingredients: [
          "Extra Wasabi",
        ],
      },
      {
        itemName:"Surf Clam Sashimi",
        briefDescri:"8 pieces",
        imageSrc: "/Sashimi/surfClamSashimi.webp",
        price: 23.99,
        longDescri: "Fresh Tuna",
        ingredients: [
          "Extra Wasabi",
        ],
      }

    ],



    ramen: [
      {
        itemName:"Chicken Ramen",
        briefDescri:"1 Bowl",
        imageSrc: "/Ramen/chickenRamen.jpg",
        price: 14.99,
        longDescri: "Flavourful broth, roasted chicken, fresh scallions, noodles, soft cooked egg",
        ingredients: [
          "Mushrooms",
          "Chicken",
          "Scallions",
          "Ramen noodles",
          "Soft cooked egg",
        ],
      },
      {
        itemName:"Hokkaido Ramen",
        briefDescri:"1 Bowl",
        imageSrc: "/Ramen/hokkaidoRamen.jpg",
        price: 15.99,
        longDescri: "Miso broth, noodles, pork, butter, corn, egg, scallions",
        ingredients: [
          "Pork",
          "Noodles",
          "Corn",
          "Scallion",
          "Mushroom",
          "Soft boiled egg",
        ],
      },
      {
        itemName:"Shoyu Ramen",
        briefDescri:"1 Bowl",
        imageSrc: "/Ramen/shoyuRamen.jpg",
        price: 16.49,
        longDescri: "Soy sauce based broth, noodles, bamboo shots, pork, scallions",
        ingredients: [
          "Seaweed",
          "Green Scallion",
          "Noodles",
          "Bamboo Shoots",
        ],
      }

    ],




    desserts: [
      {
        itemName:"Matcha Cheesecake",
        briefDescri:"Two Pieces",
        imageSrc: "/Desserts/matchaCake.png",
        price: 15.99,
        longDescri: "Light and fluffly with the traditional matcha flavour",
        ingredients: [
        ],
      },
      {
        itemName:"Mochi Ice Cream",
        briefDescri:"5 Pieces",
        imageSrc: "/Desserts/mochiIceCream.webp",
        price: 19.99,
        longDescri: "Soft chewy out layer of glutinous rice, filled with ice cream",
        ingredients: [
        ],
      },
      {
        itemName:"Dorayaki",
        briefDescri:"3 Pieces",
        imageSrc: "/Desserts/Dorayaki.jpg",
        price: 18.00,
        longDescri: " Sweet adzuki bean paste sandwiched between soft honey pancakes",
        ingredients: [
        ],
      }
    ],

    beverages: [
      {
        itemName:"Sapporo Beer",
        briefDescri:"1 Bottle",
        imageSrc: "/Beverages/sapporoBeerBottle.webp",
        price: 3.49,
        longDescri: "Taste of Malt, cereal, herbs, hops, honey, apple",
        ingredients: [
        ],
      },
      {
        itemName:"Coca-Cola",
        briefDescri:"1 Bottle",
        imageSrc: "/Beverages/cocaColaBottle.jpg",
        price: 2.99,
        longDescri: "Original Coca-Cola",
        ingredients: [
        ],
      },
      {
        itemName:"Green Tea",
        briefDescri:"1 Tea Pot",
        imageSrc: "/Beverages/GreenTeaPot.webp",
        price: 11.99,
        longDescri: "64 oz serving",
        ingredients: [
        ],
      }

    ],

    tempura: [
      {
        itemName: "Shrimp Tempura",
        briefDescri: "6 pieces",
        imageSrc: "/Tempura/ShrimpTempura.png",
        price: 12.99,
        longDescri: "Battered and deep fried",
        ingredients: [
        ],
      },
      {
        itemName: "Eggplant Tempura",
        briefDescri: "8 pieces",
        imageSrc: "/Tempura/eggplant_Tempura.webp",
        price: 16.00,
        longDescri: "Battered and deep fried",
        ingredients: [
        ],
      },
      {
        itemName: "Sweet Potato Tempura",
        briefDescri: "6 pieces",
        imageSrc: "/Tempura/sweetPotato_Tempura.jpg",
        price: 10.00,
        longDescri: "Battered and deep fried",
        ingredients: [
        ],
      },
    ],


    famousDishes: [
      {
        itemName:"Hiyayakko",
        briefDescri:"1 Serving",
        imageSrc: "/FamousDishes/tofuV1.webp",
        price: 8.99,
        longDescri: "Soy milk coagulated",
        ingredients: [
        ],
      }
    ],

  };
  
  export default itemData;