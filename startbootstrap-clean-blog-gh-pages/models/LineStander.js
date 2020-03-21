const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//Hjælper med at der ikke kan laves dobbelt brugernavne.
var uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt')

const lineStanderSchema = new Schema({
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
lineStanderSchema.plugin(uniqueValidator);

lineStanderSchema.pre('save',function(next){
    const lineStander = this
    bcrypt.hash(lineStander.password,10,(error,hash)=>{
        lineStander.password = hash
        next()
    });
});

const LineStander = mongoose.model('LineStander',lineStanderSchema);
module.exports = LineStander