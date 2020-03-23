const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productsId: {
        type: Number,
        required: true,
        unique: true
    },
    productName: String,
    price: Number
});


const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;


