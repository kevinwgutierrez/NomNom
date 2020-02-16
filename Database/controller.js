const { RestaurantDB } = require('./index');
const { UserDB } = require('./index');
const { OrderDB } = require('./index');

module.exports = {
  user: {
    get: (req, res) => {

    }, 
    post: (req, res) => {

    }
  },

  driver: {
    get: (req, res) => {
      OrderDB.find({}, (err, data) => {
        if(err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.send(data);
        }
      });
    },
    patch: (req, res) => {
      
    }
  },

  restaurant: {
    get: (req, res) => {},
    post: (req, res) => {}
  }
};