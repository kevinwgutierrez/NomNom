const router = require('express').Router();
const controller = require('../../Database/controller');

// Route user GET request from order endpoint
router.get('/user', controller.user.get);

// Route user GET request from order endpoint
router.post('/user', controller.user.post);


module.exports = router;