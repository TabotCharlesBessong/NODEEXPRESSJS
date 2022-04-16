
require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middlewares in use
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1',mainRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async ()=>{
  try {
    app.listen(port,console.log(`The server is listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()