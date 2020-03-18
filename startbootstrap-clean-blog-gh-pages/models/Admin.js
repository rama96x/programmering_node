const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//Hjælper med at der ikke kan laves dobbelt brugernavne.
var uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt')

const Admin = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    /*phoneNumber: {
      type: Number,
      required: true,
      unique: true
  },*/
    gender: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
});

//Fejlmeddelelsen for unikt brugernavn.
Admin.plugin(uniqueValidator);

Admin.pre('save',function(next){
    const user = this
    bcrypt.hash(user.password,10,(error,hash)=>{
        user.password = hash
        next()
    });
});

const User = mongoose.model('User',Admin);
module.exports = User