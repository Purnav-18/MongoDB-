const Product = require('../models/Product');
const mongoose = require('mongoose');

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getProductsByVendor = async (req, res) => {
  try {
    const vendorId = mongoose.Types.ObjectId(req.params.vendorId);
    const products = await Product.find({ vendorId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
