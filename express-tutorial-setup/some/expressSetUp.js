


const express = require('express');
const path  = require('path');
const port = 5000
const app = express()

app.listen(port,()=>{
  console.log(`The server is listening on port ${port}`);
})
// app.get method 

// app.use
app.use(express.static('./public'))
// app.get('/',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

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