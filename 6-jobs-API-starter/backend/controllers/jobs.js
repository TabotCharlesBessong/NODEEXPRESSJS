
const getAllJons = async (req,res)=>{
  res.send('Get all jobs')
}

const getJob = async (req,res)=>{
  res.send('get a single job')
}

const createJob = async (req,res)=>{
  res.send('create a single job')
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