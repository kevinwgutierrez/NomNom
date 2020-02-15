const mongoose = require('mongoose');
const db = mongoose.connection;

// Open database @nomnom
mongoose.connect('mongodb://localhost/nomnom', {useNewUrlParser: true});

// Log DB connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
});

// Create RESTAURANT schema
const restaurantSchema = mongoose.Schema({
  resId: Number,
  resName: String,
  resActive: Boolean,
  resContact: {email: String, phone: String},
  resAddress: String,
  resLocation: [Number, Number],
  transHist: [{ meal: String, customer: String, status: String, quantity: Number }],
  resMeals: [{ name: String, active: Boolean, quantity: Number, picture: String }],
  resStats: { totalMeals: Number, revenue: Number, turtles: Number, YUMYUM: Number }
});

// Create USER schema
const userSchema = mongoose.Schema({
  userId: Number,
  userName: String,
  userActive: Boolean,
  userContact: {email: String, phone: String},
  userAddress: String,
  userLocation: [Number, Number],
  userStats: { totalMealsBought: Number, moneySaved: Number, moneyDonated: Number, turtles: Number, YUMYUM: Number }
});

// // Create DRIVER schema
// const driverSchema = mongoose.Schema({
//   id: Number,
//   name: String,
//   active: Boolean,
//   contact: {email: String, phone: String},
//   location: [Number, Number],
//   mealPickedUp: Boolean,
//   mealDroppedOff: Boolean,
//   status: String, //pickup or drop off
//   // stats: [{ totalMealsBought: Number, moneySaved: Number, moneyDonated: Number, turtles: Number, YUMYUM: Number }]
// });

// Create ORDERS schema
const orderSchema = mongoose.Schema({
  orderId: Number,
  orderUser: String,
  orderUserAddress: String,
  orderUserContact: {email: String, phone: String},
  orderRestaurant: String,
  orderRestaurantAddress: String,
  order: [{meal: String, quantity: Number, price: Number}]
});


const RestaurantDB = mongoose.model('restaurant', restaurantSchema);
const UserDB = mongoose.model('user', userSchema);
const DriverDB = mongoose.model('driver', driverSchema);
const OrderDB = mongoose.model('order', orderSchema);

module.exports = RestaurantDB;
module.exports = UserDB;
module.exports = DriverDB;
module.exports = OrderDB;