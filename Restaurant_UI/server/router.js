const router = require('express').Router();
const controller = require('../../Database/controller');

// Route user GET order request from restaurant endpoint
router.get('/restaurant', controller.restaurant.get);

// Route user PATCH order request from restaurant endpoint
router.patch('/restaurant', controller.retaurant.patch);


module.exports = router;