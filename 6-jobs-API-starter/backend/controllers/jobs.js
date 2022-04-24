const BadRequestErr = require('../errors/bad-request')
const UnauthenticatedErr = require('../errors/unauthenticated')
// const { json } = require('express/lib/response')
const {StatusCodes} = require('http-status-codes')
const User = require('../models/User')

const getAllJons = async (req,res)=>{
  res.send('Get all jobs')
}

const getJob = async (req,res)=>{
  res.send('get a single job')
}

const createJob = async (req,res)=>{
  res.json(req.body)
}

const updateJob = async (req,res)=>{
  res.send('update a single job')
}

const deleteJob = async (req,res)=>{
  res.send('delete a single job')
}

module.exports = {
  getAllJons,
  getJob,
  createJob,
  deleteJob,
  updateJob
}