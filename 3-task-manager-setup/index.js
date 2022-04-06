
const express = require('express')
const app = express()
const port = 5000 
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())

// routes
app.get('/hello',(req,res)=>{
  res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)

// all tasks

const start = async ()=>{
  try {
    await connectDB(process.env.MONGOURI)
    app.listen(port,console.log(`The server islistening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()