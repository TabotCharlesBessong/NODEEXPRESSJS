
const BadRequestErr = require('../errors/bad-request')
const UnauthenticatedErr = require('../errors/unauthenticated')
const { json } = require('express/lib/response')
const {StatusCodes} = require('http-status-codes')
const User = require('../models/User')

const register = async (req,res)=>{
  
  
  const user = await User.create({...req.body})
  const token = user.createJWT()
  
  res.status(StatusCodes.CREATED).json({user:{name:user.name},token})
}

const login = async (req,res)=>{
  // res.send('login User')
  const {email,password} = req.body
  if(!email || !password){
    throw new BadRequestErr('Please provide email and password')
  }

  const user = await User.findOne({email}) 
  if(!user){
    throw new UnauthenticatedErr('Invalid cridentials')
  }
  // comparing the pasword 
  
  const isPass = await user.checkPass(password)
  if(!isPass){
    throw new UnauthenticatedErr('Invalid cridentials')
  }
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({user:{name:user.name},token})
}

module.exports = {
  register,
  login
}