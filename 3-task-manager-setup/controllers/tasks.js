// contains logic of all task
const Task = require('../models/task')
const express = require('express')
const getAllTasks = async (req,res)=>{
  // res.rend('all items')
  // res.send('get all tasks')
  try {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const createTasks = async (req,res)=>{
  try {
    const task = await Task.create(req.body)
    res.status(201).json({task});
  } catch (error) {
    res.status(500).json({msg:error})
  }
  
}

const getTask =async (req,res)=>{
  try {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    // res.json({id:req.params.id});
    if(!task){
      return res.status(404).json({msg:`No task with this id: ${taskID} `})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

const updateTask = async (req,res)=>{
  try {
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
      new:true,runValidators:true
    })
    if(!task){
      return res.status(404).json({msg:`No task with this id: ${taskID} `})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
  // res.send('Hello old tasks');
}

const deleteTask = async (req,res)=>{
  try {
    const {id:taskID} = req.params
    const task = await Task.findByIdAndDelete({_id:taskID})
    if(!task){
      return res.status(404).json({msg:`No task with this id: ${taskID} `})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
  res.send('Bye Bye tasks');
}

module.exports = {
  getAllTasks,
  updateTask,
  createTasks,
  getTask,
  deleteTask
}