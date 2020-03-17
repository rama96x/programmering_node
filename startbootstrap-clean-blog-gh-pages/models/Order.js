const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderID: mongoose.Schema.Types.ObjectId,
    status: String, // måske boolean i stedet.
    deliveryLocation: String, // kommentar til hvor man er.
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

