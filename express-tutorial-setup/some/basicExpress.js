
const express = require('express')
const port = 5000
const app = express()

app.listen(port,(req,res)=>{
  console.log(`The server is listening on port ${port}`);
})
// app.get method 
app.get('/',(req,res)=>{
  res.send('Hello my dearest friends')
})

app.get('/about',(req,res)=>{
  res.send('Hello my dearest friends tell me more about you')
})

// app.post 

// app.put

// app.delete

// app.all 
app.all('*',(req,res)=>{
  res.status(404).send('<h1>Page not found</h1>')
})