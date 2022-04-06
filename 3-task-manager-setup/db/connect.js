const mongoose = require('mongoose')
// const connectionStream = ''

const connectDB = (url)=>{
  mongoose.connect(url)
  
}

module.exports = connectDB
