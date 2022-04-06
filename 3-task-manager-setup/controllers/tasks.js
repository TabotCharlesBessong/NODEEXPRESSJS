// contains logic of all task
const Task = require('../models/task')
const express = require('express')
const getAllTasks = (req,res)=>{
  // res.rend('all items')
  res.send('get all tasks')
}

const createTasks = async (req,res)=>{
  const task = await Task.create(req.body)
  res.status(201).json({task});
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