const Product = require('../models/Product.js');
const path = require('path');

module.exports = (req,res)=>{
    Product.create(req.body,(error,product)=>{
        if(error){
            return res.redirect ('/auth/login')
        }
        else return res.redirect('/products');

    })
    /*if(req.session.userId) {
        return res.render('create');
    }
    res.redirect('/auth/login')

     */
};


