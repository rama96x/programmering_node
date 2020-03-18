const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//Hjælper med at der ikke kan laves dobbelt brugernavne.
var uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt')

const adminSchema = new Schema({
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
adminSchema.plugin(uniqueValidator);

adminSchema.pre('save',function(next){
    const admin = this
    bcrypt.hash(admin.password,10,(error,hash)=>{
        admin.password = hash
        next()
    });
});

const Admin = mongoose.model('Admin',adminSchema);
module.exports = Admin