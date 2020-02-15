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
  location: String,
  delivered: Boolean,
  stats: [{ totalMealsBought: Number, moneySaved: Number, moneyDonated: Number, turtles: Number, YUMYUM: Number }]
});

// Create DRIVER schema
const driverSchema = mongoose.Schema({
  id: Number,
  name: String,
  active: Boolean,
  contact: {email: String, phone: String},
  location: String,
  mealPickedUp: Boolean,
  mealDroppedOff: Boolean,
  status: String, //pickup or drop off
  // stats: [{ totalMealsBought: Number, moneySaved: Number, moneyDonated: Number, turtles: Number, YUMYUM: Number }]
});


const restaurantDB = mongoose.model('restaurant', restaurantSchema);
const userDB = mongoose.model('user', userSchema);
const driverDB = mongoose.model('driver', driverSchema);

module.exports = restaurantDB;
module.exports = userDB;
module.exports = driverDB