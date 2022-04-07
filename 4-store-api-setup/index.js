
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()
const productsRouter = require('./routes/products')
const connectDB = require('./db/connect')

// async errors
const notFound = require('./middleware/not-found')
const errorMid = require('./middleware/error-handler')

// middleware 
app.use(express.json())

// The routes
app.get('/',(req,res)=>{
  res.send('<h1>Store Api</h1> <a href="/api/v1/products">product routes</a> ')
})
app.use('/api/v1/products',productsRouter)


app.use('/api/v1/products',)

// products route
app.use(notFound)
app.use(errorMid)

const start = async ()=>{
  try {
    //connect db
    await connectDB(process.env.MONGO_URI)
    app.listen(port,()=>{
      console.log(`The server is running on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()

