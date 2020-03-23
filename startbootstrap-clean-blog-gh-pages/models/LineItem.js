// https://stackoverflow.com/questions/59174763/how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose

// When ever we recreate our lineItem in the this.add we pass our old lineItem into it.
module.exports = function lineItem(oldLineItems){
    this.items = oldLineItems.items || {};
    this.totalQty = oldLineItems.totalQty || 0;
    this.totalPrice = oldLineItems.totalPrice || 0;

    this.add = function(item, id){
        // Nu vil vi sørge for, at Qty bliver opdateret i stedet for bare at tilføje endnu et objekt med samme id.
        // Dette gøres ved at opdatere en persons lineItem hver gang ved hjælp af følende funktion.
        let storedItem =  this.items[id];
        if (!storedItem){
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;

    };

    this.gennerateArray = function () {
        let arr = [];
        for (let id in this.items){
            arr.push(this.items[id]);
        }
        return arr
    };
};












/*
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
            productsId: {
                type: Number,
                ref: "Product"
            },
            productName: {
                type: String,
                ref: "Product"
            },
            productPrice: {
                type: Number,
                ref: "Product"
            }
        }
    ],
    quantity: {
        type: Number,
        required: true
    },
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
*/ /*
const LineItem = mongoose.model('LineItem',LineItemSchema);
module.exports = LineItem;


*/

