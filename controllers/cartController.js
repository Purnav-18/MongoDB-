const Cart = require('../models/Cart');

exports.createCart = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const saved = await newCart.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCartByUser = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId }).populate('products.productId');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const { products, total } = req.body;
    const updatedCart = await Cart.findOneAndUpdate(
      { userId: req.params.userId },
      { products, total },
      { new: true }
    );
    res.json(updatedCart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
