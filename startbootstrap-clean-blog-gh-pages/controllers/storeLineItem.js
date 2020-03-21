
const User = require('../models/User');
const LineItem = require('../models/LineItem');
const path = require('path');


module.exports = (req,res)=> {
    //const { product, lineItemPrice, quantity } = req.body;

    //LineItem.create({
    const {productId, productName, productPrice, quantity} = req.body;

    let userId = req.session.userId; //TODO: the logged in user id

    /*for (let i = 0; i < User._id.length; i++){
        let i = userId
    }

     */
    console.log(userId);


    try {
        let cart = LineItem.findOne({userId});

        if (cart) {
            //cart exists for user
            let itemIndex = cart.products.findIndex(p => p.productId == productId);

            if (itemIndex > -1) {
                //product exists in the cart, update the quantity
                let productItem = cart.products[itemIndex];
                productItem.quantity = quantity;
                cart.products[itemIndex] = productItem;
            } else {
                //product does not exists in cart, add new item
                cart.products.push({productId, productName, productPrice, quantity});
            }
            cart = cart.save();
            return res.status(201).send(cart);
        } else {
            //no cart for user, create new cart
            const newCart = LineItem.create({
                userId,
                products: [{productId, productName, productPrice, quantity}]
            });

            return res.status(201).send(newCart);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
};
        /*product: [
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
        quantity: Number,
        lineItemPrice: Number
    });
        /*req.body,(error,LineItem)=>{
        if(error){
            return res.redirect ('/auth/login')
        }
        else
        return res.redirect('/products');


};

         */

