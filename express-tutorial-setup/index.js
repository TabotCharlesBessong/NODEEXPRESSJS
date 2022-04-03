
const express = require('express')
const app = express()
const {products} = require('./data')
const port = 5000

app.get('/',(req,res)=>{
  res.send('<h1>Home page is here</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
  const newProducts = products.map((prop)=>{
    const {id,name,image} = prop
    return {id,name,image}
  })
  res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
  // console.log(req.params);
  const {productID} = req.params
  const singleProducts = products.find((prop )=> prop.id === Number(productID) )
  if(!singleProducts){
    return res.status(404).send('Product does not exist in our store')
  }
  res.json(singleProducts)
})

app.listen(port,()=>{
  console.log(`The server is listening on port ${port}`);
})