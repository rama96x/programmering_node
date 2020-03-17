// https://stackoverflow.com/questions/59174763/how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LineItemSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    },
    lineItemPrice: Number,
    quantity: Number,
    product: [
        {
            productID: {type: mongoose.Schema.Types.ObjectId,
                ref: "Product"}
            pr
        }
    ]
});

const LineItem = mongoose.model('LineItem',LineItemSchema);
module.exports = LineItem;

