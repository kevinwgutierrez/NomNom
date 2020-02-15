const path = require('path');

const RestaurantDB = require('./index');
const UserDB = require('./index');
// const driverDB = require('./index');
const OrderDB = require('./index');

// Data for Restaurant

const restaurant1 = new RestaurantDB({
  id: 1,
  name: 'The Bird',
  active: true,
  contact: {email: 'TheBird@tomtom.com', phone: '123-123-1234'},
  address: '115 Montgomery Street, San Francisco CA 94105',
  location: [37.790343, -122.402202],
  transHist: [
    { meal: 'Chicken Sandwhich', customer: 'Kevin', status: 'pickedUp', quantity: 1 },
  ],
  meals: [
    { name: 'Chicken Sandwhich', active: true, quantity: 5, picture: 'https://www.omahasteaks.com/gifs/990x594/rb035.jpg' },
    { name: 'Green Beans', active: false, quantity: 0, picture: 'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2015/9/23/0/CCPLBSP1H_Heavenly-Sauteed-String-Beans-with-Garlic_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516897726695.jpeg' },
    { name: 'Mashed Potatoes', active: false, quantity: 0, picture: 'https://www.skinnytaste.com/wp-content/uploads/2018/01/Instant-Pot-Mashed-Potatoes-1-5.jpg' }
  ],
  stats: { totalMeals: 348, revenue: 5002.98, turtles: 89, YUMYUM: 200 }
});

console.log(restaurant1);

const restaurant2 = new RestaurantDB({
  id: 1,
  name: 'Golden Gate Bakery',
  active: true,
  contact: {email: 'GoldenGateBakery@tomtom.com', phone: '122-122-1222'},
  address: '1029 Grant Avenue, San Francisco CA 94133',
  location: [37.796389, -122.406721],
  transHist: [
    { meal: 'Pork Bun', customer: 'Adrian', status: 'pickedUp', quantity: 4 },
  ],
  meals: [
    { name: 'Pork Bun', active: true, quantity: 8, picture: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/08/05/pork-buns-ck-1734314-x.jpg?itok=n7Pis2lZ' },
    { name: 'Pinapple Bun', active: false, quantity: 0, picture: 'https://du7ybees82p4m.cloudfront.net/5767fb25d52a76.13134167.jpg?width=1820&height=1023' },
    { name: 'Croissant', active: false, quantity: 0, picture: 'https://www.seriouseats.com/recipes/images/2011/08/20110817-166611-flour-croissants.jpg' }
  ],
  stats: { totalMeals: 559, revenue: 2789.54, turtles: 76, YUMYUM: 467 }
});

const restaurant3 = new RestaurantDB({
  id: 1,
  name: 'Taco Bell',
  active: true,
  contact: {email: 'TacoBell@tomtom.com', phone: '223-334-4444'},
  address: '710 3rd Street, San Francisco CA 94107',
  location: [37.778563, -122.39245],
  transHist: [
    { meal: 'Dorito Loco Taco', customer: 'Bryce', status: 'pickedUp', quantity: 2 },
  ],
  meals: [
    { name: 'Dorito Loco Taco', active: true, quantity: 10, picture: 'https://www.tacobell.com/images/22172_nacho_cheese_doritos_locos_tacos_269x269.jpg' },
    { name: 'Crunchwrap Supreme', active: true, quantity: 4, picture: 'https://www.tacobell.com/images/22362_crunchwrap_supreme_269x269.jpg' },
    { name: 'Mexican Pizza', active: false, quantity: 0, picture: 'https://i.dailymail.co.uk/1s/2019/03/11/15/10840908-6795617-image-m-29_1552317409473.jpg' }
  ],
  stats: { totalMeals: 1293, revenue: 7889.23, turtles: 539, YUMYUM: 8867 }
});

const restaurantData = [restaurant1, restaurant2, restaurant3];
console.log(restaurantData);

RestaurantDB.insertMany(
  restaurantData, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log('restaurant seeded');
    }
  }
);


// Data for User
const user1 = new UserDB({
  id: 1,
  name: 'Joe Billy',
  active: true,
  contact: {email: 'JoeBilly@tomtom.com', phone: '111-111-1111'},
  address: 'String',
  location: [37.787415, -122.396525],
  stats: { totalMealsBought: 12, moneySaved: 64.30, moneyDonated: 15, turtles: 9, YUMYUM: 22 }
});

// Data for Orders
const order1 = new OrderDB({
  id: 1,
  user: 'Kevin',
  userAddress: '44 Tehama Street, San Francisco CA 94105',
  userContact: {email: 'kevin@tomtom.com', phone: '555-555-5555'},
  restaurant: 'The Bird',
  restaurantAddress: '115 Montgomery Street, San Francisco CA 94105',
});

const order2 = new OrderDB({
  id: 2,
  user: 'Adrian',
  userAddress: '535 Brannan Strett, San Francisco CA 94107',
  userContact: {email: 'adrian@tomtom.com', phone: '589-456-3948'},
  restaurant: 'Golden Gate Bakery',
  restaurantAddress: '1029 Grant Avenue, San Francisco CA 94133',
});

const order3 = new OrderDB({
  id: 3,
  user: 'Bryce',
  userAddress: '2198 Folsom Street, San Francisco CA 94110',
  userContact: {email: 'bryce@tomtom.com', phone: '678-435-9287'},
  restaurant: 'Taco Bell',
  restaurantAddress: '710 3rd Street, San Francisco CA 94107',
});


const userData = [user1];
const orderData = [order1, order2, order3];



UserDB.insertMany(
  userData, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log('data seeded');
    }
  }
);

OrderDB.insertMany(
  orderData, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log('data seeded');
    }
  }
);