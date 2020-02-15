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
  id: Number,
  name: String,
  active: Boolean,
  contact: {email: String, phone: String},
  address: String,
  location: [Number, Number],
  transHist: [{ meal: String, customer: String, status: String, quantity: Number }],
  meals: [{ name: String, active: Boolean, quantity: Number, picture: String }],
  stats: { totalMeals: Number, revenue: Number, turtles: Number, YUMYUM: Number }
});

// Create USER schema
const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  active: Boolean,
  contact: {email: String, phone: String},
  address: String,
  location: [Number, Number],
  stats: { totalMealsBought: Number, moneySaved: Number, moneyDonated: Number, turtles: Number, YUMYUM: Number }
});

// Create DRIVER schema
const driverSchema = mongoose.Schema({
  id: Number,
  name: String,
  active: Boolean,
  contact: {email: String, phone: String},
  location: [Number, Number],
  mealPickedUp: Boolean,
  mealDroppedOff: Boolean,
  status: String, //pickup or drop off
  // stats: [{ totalMealsBought: Number, moneySaved: Number, moneyDonated: Number, turtles: Number, YUMYUM: Number }]
});

// Create ORDERS schema
const orderSchema = mongoose.Schema({
  id: Number,
  user: String,
  userAddress: String,
  userContact: {email: String, phone: String},
  restaurant: String,
  restaurantAddress: String,
});


const RestaurantDB = mongoose.model('restaurant', restaurantSchema);
const UserDB = mongoose.model('user', userSchema);
const DriverDB = mongoose.model('driver', driverSchema);
const OrderDB = mongoose.model('order', orderSchema);

module.exports = RestaurantDB;
module.exports = UserDB;
module.exports = DriverDB;
module.exports = OrderDB;