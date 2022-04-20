
// check username , password in post(login) request
// if exist create new JWT 
// send back to front-end

// setup authentication only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken')
const customErr = require('../errors/custom-error')
const login = async (req,res)=>{
  const {username,password} = req.body
  // console.log(username,password);
  // mongoose validation
  // check in the controller  
  if(!username || !password ){
    throw new customErr('Please provide username and password',400)
  }
  
  const id = new Date().getTime()

  const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
  res.status (200).json({msg:'user created',token})
  res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req,res)=>{
  // console.log(req.headers)
  const authHeader = req.headers.authorization 

  if(!authHeader || !authHeader.startsWith('Bearer ')){
    throw new customErr('No Token Provided',401)
  }

  const token = authHeader.split(' ')[1]
  // console.log(token)
  
  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    // console.log(decoded);
    const luckyNum = Math.floor(Math.random() * 100)
    res.status(200).json({msg:`Hello , ${decoded.username}`, secret:`Here is your authorised data and your lucky nuumber is ${luckyNum} `})
  } catch (error) {
    throw new customErr('Not authorised to access this route',401)
  }


  
}

module.exports = {
  login , dashboard
}