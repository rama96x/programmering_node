const bcrypt = require('bcrypt')
const Admin = require('../models/Admin')

module.exports = (req,res)=>{
    const { username,password } = req.body;

    Admin.findOne({username:username},(error,admin)=>{
        if(admin){
            bcrypt.compare(password,admin.password,(error,same)=>{
                if(same) {
                    req.session.adminId = admin._id // ved ikke helt hvordan Id laves til Admin
                    res.redirect('/')
                }
                else {
                    res.redirect('/auth/loginAdmin')
                }
            })
        }
        else {
            res.redirect('/auth/loginAdmin')
        }
    })
}