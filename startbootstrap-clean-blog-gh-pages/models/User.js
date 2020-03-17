const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//Hjælper med at der ikke kan laves dobbelt brugernavne.
var uniqueValidator = require('mongoose-unique-validator');

const bcrypt = require('bcrypt')

const UserSchema = new Schema({
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
  gender: {
    type: [],
    required: false
  },
    password: {
    type: String,
      required: true
    }
});

//Fejlmeddelelsen for unikt brugernavn.
UserSchema.plugin(uniqueValidator);

UserSchema.pre('save',function(next){
  const user = this
  bcrypt.hash(user.password,10,(error,hash)=>{
    user.password = hash
    next()
  });
});

const User = mongoose.model('User',UserSchema);
module.exports = User
