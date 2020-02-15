const path = require('path');

const restaurantDB = require('./index');
const userDB = require('./index');
const driverDB = require('./index');

// Data for Restaurant

const restaurant1 = new restaurantDB({
  id: 1,
  name: 'Great American Steak House',
  active: true,
  contact: {email: 'Steaks@gmail.com', phone: '123-123-1234'},
  address: '44 Tehama St., San Francisco, CA',
  transHist: [
    { meal: '16oz Ribeye', customer: 'Kevin', status: 'String', quantity: 1 },
    { meal: '16oz Ribeye', customer: 'Zach', status: 'String', quantity: 1 },
    { meal: '16oz Ribeye', customer: 'Bryce', status: 'String', quantity: 2 },
    { meal: '16oz Ribeye', customer: 'Adrian', status: 'String', quantity: 1 }
  ],
  meals: [
    { name: '16oz Ribeye', active: true, quantity: 5, picture: 'https://www.omahasteaks.com/gifs/990x594/rb035.jpg' },
    { name: 'Green Beans', active: false, quantity: 0, picture: 'https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2015/9/23/0/CCPLBSP1H_Heavenly-Sauteed-String-Beans-with-Garlic_s4x3.jpg.rend.hgtvcom.616.462.suffix/1516897726695.jpeg' },
    { name: 'Mashed Potatoes', active: false, quantity: 0, picture: 'https://www.skinnytaste.com/wp-content/uploads/2018/01/Instant-Pot-Mashed-Potatoes-1-5.jpg' }
  ],
  stats: { totalMeals: 348, revenue: 5002.98, turtles: 89, YUMYUM: 200 }
});

// Data for User


// Data for Driver

Song.insertMany(
  fakedata, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log('data seeded');
    }
  }
);