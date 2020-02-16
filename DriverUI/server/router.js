const router = require('express').Router();
const controller = require('../../Database/controller.js');

// Route user GET order request from driver endpoint
router.get('/driver', controller.driver.get);

// Route user PATCH order request from driver endpoint
router.patch('/driver', controller.driver.patch);


module.exports = router;