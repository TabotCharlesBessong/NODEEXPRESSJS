// contains logic of all task
const express = require('express')
const getAllTasks = (req,res)=>{
  // res.rend('all items')
  res.send('all tasks')
}

module.exports = {
  getAllTasks
}