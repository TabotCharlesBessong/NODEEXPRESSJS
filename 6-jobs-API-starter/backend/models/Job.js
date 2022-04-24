
const mongoose = require('mongoose')

const JobsSchema = new mongoose.Schema({
  company:{
    type:String,
    required:[true,'Please provide your company name'],
    maxlength:60
  },
  position:{
    type:String,
    required:[true,'Please provide your  position name '],
    maxlength:120
  },
  status:{
    type:String,
    enum:['Interview','Declined','Pending'],
    default:'Pending'
  },
  createdBy:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:[true,'Please provide user']
  }
} ,{timestamps:true} )

module.exports = mongoose.model('Job',JobsSchema)