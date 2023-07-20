export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Snacks',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 3,
        name: 'Fruits',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 4,
        name: 'Drinks',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 5,
        name: 'Burger',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 6,
        name: 'Cakes',
        image: require('../assets/images/pizzaIcon.png'),
    },

]


export const featured = {
    id: 1,
    title: 'Local dishes',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Chicken Republic',
            //image: require('../assets/images/pizza.png'),
            image:'https://media.istockphoto.com/id/514631555/photo/curry-pork.jpg?s=1024x1024&w=is&k=20&c=3QUOUHk3DSKldV0YTfAHQkjBMEOVn1LD1XuuHjZpvls=',
            description: 'Delicious Meals At Afforable Prices',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Fried Rice and Chicken',
                   description: 'Delcious and Tasty Fried Rice',
                   price: 10,
                   //image:  require('../assets/images/pizzaDish.png')
                   image:'https://media.istockphoto.com/id/1397065010/photo/chicken-fried-rice.jpg?s=2048x2048&w=is&k=20&c=ACrx9oCRSXhuIMSrl8BVPEvVtRGaS2SUC9vNromqvGo=',
                },
                {
                   id: 2,
                   name: 'Jollof Rice',
                   description: 'Spicy and Declious Jellof Rice',
                   price: 20,
                   //image:  require('../assets/images/pizzaDish.png')
                   image:'https://media.istockphoto.com/id/644430324/photo/jollof-rice-with-chicken-and-fried-plantain-west-african-cuisine.jpg?s=2048x2048&w=is&k=20&c=au1EMk-gOeMyBuCFxIlbcUpwM1ExwAxPuE_vbOI2B1M=',
                },
                {
                   id: 3,
                   name: 'Pizza',
                   description: 'cheezy garlic pizza',
                   price: 40,
                   //image:  require('../assets/images/pizzaDish.png')
                   image:'https://media.istockphoto.com/id/1317731278/photo/pepperoni-pizza-in-close-up.jpg?s=2048x2048&w=is&k=20&c=WFOS40bUf9wucpoHjbHKNraUwLmPAlwZ45Zj8M-rY1U=',
                },
            ]
    
        },
        {
            id: 2,
            name: 'Cheries',
            image:'https://media.istockphoto.com/id/1256476993/photo/food.webp?b=1&s=170667a&w=0&k=20&c=bAGUURKZCD74a5UI6AH5QoncX8fQUM_pMo5P-cNuxE0=',
           //image: require('../assets/images/pizza.png'),
            description: 'Delicious Meals',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 5,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Porridge',
                   description: 'Delicious Porridge',
                   price: 10,
                   //image:  require('../assets/images/pizzaDish.png')
                   image:'https://media.istockphoto.com/id/1393757490/photo/fish-soup-with-prawns-and-tomatoes-on-wooden-table.jpg?s=2048x2048&w=is&k=20&c=alhPJ1F1qm8leaPn6YDwWPlMn0C3zZ76-3Nbv-noyVY=',
                },
                {
                   id: 2,
                   name: 'Afange Soup',
                   description: 'cheezy garlic pizza',
                   price: 10,
                  // image:  require('../assets/images/pizzaDish.png')
                  image:'https://media.istockphoto.com/id/1327486551/photo/afang-soup.jpg?s=2048x2048&w=is&k=20&c=RV5mLrRNauW8bEgQ-pAP0RBsqW_Th9_y2sWNJRc5dpI=',
                },
                {
                   id: 3,
                   name: 'Egusi Soup',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   //image:  require('../assets/images/pizzaDish.png')
                   image:'https://media.istockphoto.com/id/1386522276/photo/pounded-yam-and-garri-eba-served-with-egusi-soup-ready-to-eat.jpg?s=2048x2048&w=is&k=20&c=zQM1_BXWa_6X4XqKdnAD2Dafi42qO4fAHcewQk7Psrs=',
                },
            ]
    
        },
        {
            id: 3,
            name: 'Crunchies',
           // image: require('../assets/images/pizza.png'),
           image:'https://images.unsplash.com/photo-1649240346404-c82d4f7963a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
            description: 'Taste of Quality',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Beef Shawarma',
                   description: 'Tasty Beef Shawarma',
                   price: 50,
                   image: 'https://media.istockphoto.com/id/180698997/photo/beef-souvlaki-wrap.jpg?s=2048x2048&w=is&k=20&c=k6MKhwP6GZ5QpzxfMsxh8V_PyrbCQ38HxaQzrsOZijI=',
                },
                {
                   id: 2,
                   name: 'Rice and Stew',
                   description: 'Delicious Rice and Stew',
                   price: 10,
                   image:'https://media.istockphoto.com/id/1286497334/photo/creole-shrimp-and-sausage.jpg?s=2048x2048&w=is&k=20&c=b_13N7UdMPZzDE3Nak3sOHeEPfaVPzuSHcz-5qtToLM='
                },
                {
                   id: 3,
                   name: 'Grilled Chicken',
                   description: 'Delicious and Spiced Grilled Chicken',
                   price: 30,
                   image:'https://media.istockphoto.com/id/1505487017/photo/a-photographic-close-up-of-various-japanese-traditional-grills-on-earthenware-plates.jpg?s=2048x2048&w=is&k=20&c=723aVhJ9mxkicWJ35ka_4o3Eyc7uu3FiR1I4EL9ThfU=',
                },
            ]
    
        }
    ]
}