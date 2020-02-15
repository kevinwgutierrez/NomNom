const mongoose = require('mongoose');

// Open database @nomnom
mongoose.connect('mongodb://localhost/nomnom', {useNewUrlParser: true});

const db = mongoose.connection;
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
  resMeals: [{ name: String, active: Boolean, price: Number, quantity: Number, picture: String }],
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


const RestaurantDB = mongoose.model('Restaurant', restaurantSchema);
const UserDB = mongoose.model('User', userSchema);
const OrderDB = mongoose.model('Order', orderSchema);

module.exports.RestaurantDB = RestaurantDB;
module.exports.UserDB = UserDB;
module.exports.OrderDB = OrderDB;