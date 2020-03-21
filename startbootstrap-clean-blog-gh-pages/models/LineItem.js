// https://stackoverflow.com/questions/59174763/how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Vi kan også bare lave new Schema om til "new mongoose.Schema" for at spare koden ovenfor.


const LineItemSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    products: [
        {
            productId: Number,
            productName: String,
            productPrice: Number,
            quantity: Number
        }
    ],
    active: {
        type: Boolean,
        default: true
    },
    modifiedOn: {
        type: Date,
        default: Date.now()
    }

});
    /*
    product: [
        {
            productID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            productName: {
                type: mongoose.Schema.Types.String,
                ref: "Product"
            },
            productPrice: {
                type: mongoose.Schema.Types.Number,
                ref: "Product"
            }
        }
    ],
    lineItemPrice: Number,
    quantity: Number,
});
*/
const LineItem = mongoose.model('LineItem',LineItemSchema);
module.exports = LineItem;




