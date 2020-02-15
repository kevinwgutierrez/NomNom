const router = require('express').Router();
const controller = require('../../Database/controller');

// Route user GET request from order endpoint
router.get('/order/user', controller.order.get);

// Route user GET request from order endpoint
router.post('/order/user', controller.order.post);


module.exports = router;