
const express = require('express')
const app = express()
const {products} = require('./data')
const port = 5000

app.get('/',(req,res)=>{
  res.send('<h1>Home page is here</h1><a href="/api/products">products</a>')
})

const len = products.length
console.log(len);

const ran = Math.floor(Math.random() * len) 
console.log(ran);

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

app.get('/api/v1/query',(req,res)=>{
  console.log(req.query);
  const {search,limit} = req.query
  let sortedProd = [...products]
  if(search){
    sortedProd = sortedProd.filter((prod)=>{
      return prod.name.startsWith(search)
    })
  }

  let norm = limit > len ? ran : limit

  if(norm){
    sortedProd = sortedProd.slice(0,Number(limit))
  }

  if(sortedProd.length < 1){
    // res.status(200).send('No products found')
    return res.status(200).json({success:true,data:[]})
  }

  res.status(200).json(sortedProd)
  res.send("Hello world")  
  
})

app.listen(port,()=>{
  console.log(`The server is listening on port ${port}`);
})