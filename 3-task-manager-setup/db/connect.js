const mongoose = require('mongoose')
// const connectionStream = ''

const connectDB = (url)=>{
  console.log("Connected to DB");
    return new mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
  
}

module.exports = connectDB
