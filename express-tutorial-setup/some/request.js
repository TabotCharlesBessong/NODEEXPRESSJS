const express = require('express')
const morgan = require('morgan')
const port = 5000
const app = express()
let {people} = require('./data')

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

app.post('/api/thunder/people',(req,res)=>{
  const {name} = req.body
  if(!name){
    return res.status(400).json({success:false,msg:'Please provide cridentials'})
  }
  res.status(201).json({success:true,data:[...people,name]})
})
// put is for edit the data 
app.put('/api/people/:id',(req,res)=>{
  const {id} = req.params 
  const {name} = req.body
  const person = people.find((peo)=> peo.id === Number(id) )
  if(!person){
    return res.status(404).json({success:false,msg:`Cetter Personne avec Lindentite ${id} nexiste pas dans la base des donne`})
  }
  // console.log(id,name);
  // res.send(`Cetter Personne avec Lindentite ${id} existe dans la base des donne`)

  const newPeople = people.map((per)=>{
    if(per.id === Number(id)){
      per.name = name
    }
    return per
  })
  res.status(200).json({success:true,data:newPeople})
})

// The delete method
app.delete('/api/people/:id',(req,res)=>{
  const person = people.find((peo)=> peo.id === Number(req.params.id) )
  if(!person){
    return res.status(404).json({success:false,msg:`Cetter Personne avec Lindentite ${req.params.id} nexiste pas dans la base des donne`})
  }
  const newPerson1 = people.filter((pp)=> pp.id !== Number(req.params.id ))
  res.status(200).json({success:true,data:newPerson1})
})

app.get('/',(req,res)=>{
  res.send('<h1>Hello world</h1>')
})

app.listen(port,()=>{
  console.log(`The server is listening on port ${port}`)
})