
const jwt = require('jsonwebtoken')
const customErr = require('../errors/custom-error')

const authenticationMiddleware = async (req,res,next)=>{
  // console.log(req.headers.authorisation)
  const authHeader = req.headers.authorization 

  if(!authHeader || !authHeader.startsWith('Bearer ')){
    throw new customErr('No Token Provided',401)
  }

  const token = authHeader.split(' ')[1]
  // console.log(token)
  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    // console.log(decoded);
    const {id,username} = decoded
    req.user  = {id,username}
    next()

  } catch (error) {
    throw new customErr('Not authorised to access this route',401)
  }
}

module.exports = authenticationMiddleware