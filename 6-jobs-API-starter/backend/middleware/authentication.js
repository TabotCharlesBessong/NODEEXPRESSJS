
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const UnauthenticatedErr = require('../errors/unauthenticated')

const auth = (req,res,next)=>{
  // check user 
  const authHeader = req.headers.authorization 
  if(!authHeader  || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedErr('Not allowed')
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token,process.env.JWT_SECRET)
    // catch user to the job route 
    req.user = {userId:payload.userId,name:payload.name}
    next()
  } catch (error) {
    throw new UnauthenticatedErr('Not allowed ')
  }
}

module.exports = auth