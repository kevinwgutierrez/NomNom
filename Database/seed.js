const path = require('path');

const { RestaurantDB } = require('./index');
const { UserDB } = require('./index');
const { OrderDB } = require('./index');

// Data for Restaurant

const restaurant1 = new RestaurantDB({
  resId: 1,
  resName: 'The Bird',
  resActive: true,
  resContact: {email: 'TheBird@tomtom.com', phone: '123-123-1234'},
  resAddress: '115 Montgomery Street, San Francisco CA 94105',
  resLocation: [37.790343, -122.402202],
  transHist: [
    { meal: 'Chicken Sandwhich', customer: 'Kevin', status: 'pickedUp', quantity: 1 },
  ],
  resMeals: [
    { name: 'Chicken Sandwhich', active: true, price: 4.50, quantity: 5, picture: 'https://www.omahasteaks.com/gifs/990x594/rb035.jpg' },
    { name: 'Green Beans', active: false, price: 1, quantity: 0, picture: 'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2015/9/23/0/CCPLBSP1H_Heavenly-Sauteed-String-Beans-with-Garlic_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516897726695.jpeg' },
    { name: 'Mashed Potatoes', active: false, price: 1, quantity: 0, picture: 'https://www.skinnytaste.com/wp-content/uploads/2018/01/Instant-Pot-Mashed-Potatoes-1-5.jpg' }
  ],
  resStats: { totalMeals: 348, revenue: 5002.98, turtles: 89, YUMYUM: 200 }
});

const restaurant2 = new RestaurantDB({
  resId: 1,
  resName: 'Golden Gate Bakery',
  resActive: true,
  resContact: {email: 'GoldenGateBakery@tomtom.com', phone: '122-122-1222'},
  resAddress: '1029 Grant Avenue, San Francisco CA 94133',
  resLocation: [37.796389, -122.406721],
  transHist: [
    { meal: 'Pork Bun', customer: 'Adrian', status: 'pickedUp', quantity: 4 },
  ],
  resMeals: [
    { name: 'Pork Bun', active: true, price: 2.50, quantity: 8, picture: 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/08/05/pork-buns-ck-1734314-x.jpg?itok=n7Pis2lZ' },
    { name: 'Pinapple Bun', active: false, price: 2.50, quantity: 0, picture: 'https://du7ybees82p4m.cloudfront.net/5767fb25d52a76.13134167.jpg?wresIdth=1820&height=1023' },
    { name: 'Croissant', active: false, price: 3.00, quantity: 0, picture: 'https://www.seriouseats.com/recipes/images/2011/08/20110817-166611-flour-croissants.jpg' }
  ],
  resStats: { totalMeals: 559, revenue: 2789.54, turtles: 76, YUMYUM: 467 }
});

const restaurant3 = new RestaurantDB({
  id: 1,
  resName: 'Fogo de Chao',
  resActive: true,
  resContact: {email: 'Fogo@tomtom.com', phone: '223-334-4444'},
  resAddress: '201 S 3rd Street Suite 100, San Francisco, CA 94103',
  resLocation: [37.784736, -122.400133],
  transHist: [
    { meal: '12oz Ribeye', customer: 'Bryce', status: 'pickedUp', quantity: 2 },
  ],
  resMeals: [
    { name: '12oz Ribeye', active: true, price: 12, quantity: 10, picture: 'https://www.calvettimeats.com/wp-content/uploads/2016/12/Black-Angus-Beef-Ribeye-Steak-12-oz-1024x684.jpg' },
    { name: 'Lamb Shank', active: true, price: 10, quantity: 4, picture: 'https://www.ibreatheimhungry.com/wp-content/uploads/2019/04/IPlambshanks3.jpg' },
    { name: '6oz Sirloin', active: false, price: 11, quantity: 0, picture: 'https://cdn.shopify.com/s/files/1/1727/0315/products/Sirloin_steak-1.jpg?v=1484941276' }
  ],
  resStats: { totalMeals: 1293, revenue: 7889.23, turtles: 539, YUMYUM: 8867 }
});

const restaurantData = [restaurant1, restaurant2, restaurant3];

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
  userId: 1,
  userName: 'Joe Billy',
  userActive: true,
  userContact: {email: 'JoeBilly@tomtom.com', phone: '111-111-1111'},
  userAddress: 'String',
  userLocation: [37.787415, -122.396525],
  userStats: { totalMealsBought: 12, moneySaved: 64.30, moneyDonated: 15, turtles: 9, YUMYUM: 22 }
});

const userData = [user1];

UserDB.insertMany(
  userData, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log('user seeded');
    }
  }
);

// Data for Orders
const order1 = new OrderDB({
  orderId: 1,
  orderUser: 'Kevin',
  orderUserAddress: '44 Tehama Street, San Francisco CA 94105',
  orderUserContact: {email: 'kevin@tomtom.com', phone: '555-555-5555'},
  orderRestaurant: 'The Bird',
  orderRestaurantAddress: '115 Montgomery Street, San Francisco CA 94105',
  order: [{meal: 'Chicken Sandwhich', quantity: 1, price: 4.50}],
});

const order2 = new OrderDB({
  orderId: 2,
  orderUser: 'Adrian',
  orderUserAddress: '535 Brannan Strett, San Francisco CA 94107',
  orderUserContact: {email: 'adrian@tomtom.com', phone: '589-456-3948'},
  orderRestaurant: 'Golden Gate Bakery',
  orderRestaurantAddress: '1029 Grant Avenue, San Francisco CA 94133',
  order: [{meal: 'Pork Bun', quantity: 4, price: 10.00}],
});

const order3 = new OrderDB({
  orderId: 3,
  orderUser: 'Bryce',
  orderUserAddress: '2198 Folsom Street, San Francisco CA 94110',
  orderUserContact: {email: 'bryce@tomtom.com', phone: '678-435-9287'},
  orderRestaurant: 'Taco Bell',
  orderRestaurantAddress: '710 3rd Street, San Francisco CA 94107',
  order: [{meal: '12oz Ribeye', quantity: 2, price: 24}],
});

const orderData = [order1, order2, order3];

OrderDB.insertMany(
  orderData, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log('order seeded');
    }
  }
);