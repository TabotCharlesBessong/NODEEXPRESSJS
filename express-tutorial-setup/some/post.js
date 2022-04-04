const express = require('express')
const morgan = require('morgan')
const port = 5000
const app = express()
let people = require('./data')

// static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/api/people',(req,res)=>{
  res.status(200).json({success:true,data:people})
})

app.post('/login',(req,res)=>{
  // console.log(req.body)
  const {name} = req.body
  if(name){
    return res.status(200).send(`Welcome ${name}`)
  }else{
    res.status(401).send('Please provide the Name')
  }
  res.send('POST')
})

app.post('/api/people',(req,res)=>{
  const {name} = req.body
  if(!name){
    return res.status(400).json({success:false,msg:'Please provide cridentials'})
  }
  res.status(201).json({success:true,person:name})
})

app.get('/',(req,res)=>{
  res.send('<h1>Hello world</h1>')
})

app.listen(port,()=>{
  console.log(`The server is listening on port ${port}`)
})