const mongoose = require('mongoose')
// const connectionStream = ''

const connectDB = (url)=>{
  return mongoose.connect(url)
  
}

module.exports = connectDB
