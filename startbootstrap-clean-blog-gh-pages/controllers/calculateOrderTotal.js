// Calculate Order Total

// (Quantity * Price) + LS Fee


var quantity = { type: mongoose.Schema.Types.ObjectId, ref: 'quantity', required: true }; // skal rettes til når lineItem er klar
var price =  { type: mongoose.Schema.Types.ObjectId, ref: 'price', required: true }; // skal rettes til når lineItem er klar

let items = quantity * price;


function calculateOrderTotal(){
    let orderTotal = 30; // LS fee
        orderTotal += items;
    console.log(orderTotal);
}

calculateOrderTotal();


// Calculate VAT
function calculateVAT(orderTotal){
    orderTotal * 1,25;
}