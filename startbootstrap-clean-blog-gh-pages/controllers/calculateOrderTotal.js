// Calculate Order Total

// (Quantity * Price) + LS Fee

const lsFee = 30;

var quantity = { type: mongoose.Schema.Types.ObjectId, ref: 'quantity', required: true }; // skal rettes til når lineItem er klar
var price =  { type: mongoose.Schema.Types.ObjectId, ref: 'price', required: true }; // skal rettes til når lineItem er klar

const items = quantity * price;


function calculateOrderTotal(){
    let orderTotal = 30;
        orderTotal += items;
    console.log(orderTotal);
}




/*
function calculateLineItemTotal(){
    return this.price * this.quantity;
}
 */



}

// Calculate VAT