
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Please provide the name'],
    minlength:3,
    maxlength:50,
  },
  email:{
    type:String,
    required:[true,'Please provide the email'],
    match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Please provide valid email'],
    unique:true,
  },
  password:{
    type:String,
    required:[true,'Please provide the password'],
    minlength:8,
    // maxlength:12,
  },
})

UserSchema.pre('save',async function(next){
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
  next()
})

UserSchema.methods.createJWT = function (){
  return jwt.sign({userId:this._id,name:this.name},'jwtSecret',{expiresIn:'30d'})
}

module.exports = mongoose.model('User',UserSchema)