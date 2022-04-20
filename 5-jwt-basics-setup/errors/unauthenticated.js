
const {StatusCodes} = require('http-status-codes')
const customErr = require('./custom-error')

class UnauthenticatedError extends customErr {
  constructor (message){
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = UnauthenticatedError