
const express = require('express')
const app = express()
const port = 5000 
const tasks = require('./routes/tasks')

//middleware
app.use(express.json())

// routes
app.get('/hello',(req,res)=>{
  res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)

// all tasks

app.listen(port,()=>{
  console.log(`The server islistening on port ${port}...`);
})