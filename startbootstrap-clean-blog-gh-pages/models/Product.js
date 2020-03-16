const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: String,
    productPrice: Number
});

const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;

