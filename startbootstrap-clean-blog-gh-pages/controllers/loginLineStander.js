const bcrypt = require('bcrypt')
const LineStander = require('../models/LineStander')

module.exports = (req,res)=>{
    const { username,password } = req.body;

    LineStander.findOne({username:username},(error,admin)=>{
        if(admin){
            bcrypt.compare(password,admin.password,(error,same)=>{
                if(same) {
                    req.session.lineStanderId = lineStander._id // ved ikke helt hvordan Id laves til Admin
                    res.redirect('/')
                }
                else {
                    res.redirect('/auth/loginLineStander')
                }
            })
        }
        else {
            res.redirect('/auth/loginLineStander')
        }
    })
}