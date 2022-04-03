



// const authorise = require('./some/authorise')
const logger = require('./logger')
const express = require('express')
// const res = require('express/lib/response')
const morgan = require('morgan')
const port = 5000
const app = express()
// app.use(logger)
// app.use([logger,authorise])

const authorised = (req,res,next)=>{
  const {user} = req.query
  if(user === 'John'){
    req.user = {name:'John',id:3}
    next()
  }else{
    res.status(401).send('Not autorised')
  }
  console.log('authority')
  next()
}
// req => middleware => res
app.use(morgan('tiny'))
app.use(express.static('./public'))

app.get('/',(req,res)=>{
  
  res.send('The Home')
})
app.get('/about',(req,res)=>{
  res.send('This is our story')
})
app.get('/api/products',(req,res)=>{
  res.send('Buy our products')
})

app.get('/api/items',(req,res)=>{
  res.send('Buy our items')
})

app.listen(port,()=>{
  console.log(`The server is running on port ${port}`);
})

// module.exports = authorised