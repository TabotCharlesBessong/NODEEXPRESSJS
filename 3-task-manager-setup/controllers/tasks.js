// contains logic of all task
const express = require('express')
const getAllTasks = (req,res)=>{
  // res.rend('all items')
  res.send('get all tasks')
}

const createTasks = (req,res)=>{
  res.json(req.body);
}

const getTask = (req,res)=>{
  res.json({id:req.params.id});
}

const updateTask = (req,res)=>{
  res.send('Hello old tasks');
}

const deleteTask = (req,res)=>{
  res.send('Bye Bye tasks');
}

module.exports = {
  getAllTasks,
  updateTask,
  createTasks,
  getTask,
  deleteTask
}