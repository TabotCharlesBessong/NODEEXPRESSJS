


// const express = require('express')
// const port = 5000
// const app = express()

// // req => middleware => res

// const logger = (req,res,next)=>{
//   const method = req.method
//   const url = req.url
//   const time = new Date().getFullYear()
//   console.log(method,url,time);
//   next()
// }

// app.get('/',logger,(req,res)=>{
  
//   res.send('The Home')
// })
// app.get('/about',logger,(req,res)=>{
//   res.send('This is our story')
// })

// app.listen(port,()=>{
//   console.log(`The server is running on port ${port}`);
// })



const logger = require('./logger')
const express = require('express')
const res = require('express/lib/response')
const port = 5000
const app = express()
app.use(logger)

// req => middleware => res



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