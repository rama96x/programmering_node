const Product = require('../models/Product.js')

module.exports = async (req,res)=> {
    // We try to find all products created in the database
    const products = await Product.find({})
    console.log(products)
    // Now we respond with the page creating all our products from our database.
    res.render('products',{
        products
    });
};


