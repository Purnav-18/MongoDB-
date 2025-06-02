const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/', cartController.createCart);
router.get('/user/:userId', cartController.getCartByUser);
router.put('/user/:userId', cartController.updateCart);

module.exports = router;
