
// check username , password in post(login) request
// if exist create new JWT 
// send back to front-end

// setup authentication only the request with JWT can access the dashboard
const customErr = require('../errors/custom-error')
const login = async (req,res)=>{
  const {username,password} = req.body
  // console.log(username,password);
  // mongoose validation
  // check in the controller  
  if(!username || !password ){
    throw new customErr('Please provide username and password',400)
  }
  res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req,res)=>{
  const luckyNum = Math.floor(Math.random() * 100)
  res.status(200).json({msg:`Hello , JohnDoe`, secret:`Here is your authorised data and your lucky nuumber is ${luckyNum} `})
}

module.exports = {
  login , dashboard
}