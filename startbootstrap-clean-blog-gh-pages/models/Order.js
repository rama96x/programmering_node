const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderID: mongoose.Schema.Types.ObjectId,
    status: {  type: Boolean,  default: true  },
    deliveryLocation: String, // kommentar til hvor man er på RF.
    lineItem: { type: mongoose.Schema.Types.ObjectId, ref: 'LineItem', required: true }, // Ret til, når LineItem er klar
    billingAddress: {
        customerID: { type: mongoose.Schema.Types.ObjectId, ref: 'customerID', required: true }, // Ret til, når User er klar
        streetName: String,
        streetNr: Number,
        zipCode: Number,
        city: String,
        country: String,
    }

});

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;



// calcOrderTotal, (quantity * price) + LS gebyr = OrderTotal

// calcVAT, OrderTotal * 1,25

