
const {StatusCodes} = require('http-status-codes')
const customErr = require('./custom-error')

class BadRequestError extends customErr {
  constructor (message){
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequestError