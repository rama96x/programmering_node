const Product = require('../models/Product');
const LineItem = require('../models/LineItem');
const path = require('path');


module.exports = (req,res)=> {

    let productId = req.params.id;
    let lineItems = new LineItem(req.session.lineItems ? req.session.lineItems : {});

    Product.findById(productId, function (err, product) {
        if (err) {
            return res.redirect('/');
        }
        lineItems.add(product, product.id);
        req.session.lineItems = lineItems;
        console.log(lineItems);
        res.redirect('/products');
    });

};

    /*
    const products = Product.find({});
    console.log(products);
    LineItem.create(req.body,(error,lineItem)=> {
        for(let i = 0; i < products.length; i++){
            i = LineItem.products;
            products[i].productsId = LineItem.products.productsId;
            console.log(i);
            console.log(products[i].productsId);
        }

        if (error) {
            return res.redirect('/');
        } else return res.redirect('/products');
    });

    /* const testtest = await console.log(Product.findById(req.params.id))
    console.log(testtest)
    //const test2 = await Product.findById(req.params.id)
    res.render('products',{
        testtest
        //test2
    })

     */

// };

    /*
    //const { product, lineItemPrice, quantity } = req.body;

    //LineItem.create({
    const {productId, productName, productPrice, quantity} = req.body;

    let userId = req.session.userId; // the logged in user id

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

     */








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

