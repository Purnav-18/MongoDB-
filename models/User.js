const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed password
  role: { type: String, enum: ['customer', 'vendor', 'admin'], default: 'customer' },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }, // optional reference to Cart
});

module.exports = mongoose.model('User', userSchema);
