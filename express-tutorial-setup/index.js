const express = require('express')
const morgan = require('morgan')
const port = 5000
const app = express()
let people = require('./data')

// static assets
app.use(express.static('./methods-public'))


app.get('/api/people',(req,res)=>{
  res.status(200).json({success:true,data:people})
})

app.get('/',(req,res)=>{
  res.send('<h1>Hello world</h1>')
})

app.listen(port,()=>{
  console.log(`The server is listening on port ${port}`)
})