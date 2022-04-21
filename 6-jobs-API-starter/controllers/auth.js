
const BadRequestErr = require('../errors/bad-request')
const { json } = require('express/lib/response')
const {StatusCodes} = require('http-status-codes')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

const register = async (req,res)=>{
  // const {name,email,password} = req.body
  // if(!name || !email || !password){
  //    throw new BadRequestErr('Please provide the name email and password')
  // }

  // temp user object
  const {name,email,password} = req.body
  // hash variable
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password,salt)
  const tempUser = {name,email,password:hashPassword} 
  const user = await User.create({...tempUser})
  res.status(StatusCodes.CREATED).json({user})
}

const login = async (req,res)=>{
  res.send('login User')
}

module.exports = {
  register,
  login
}