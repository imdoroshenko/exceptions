class NotFound extends Error {
  constructor (message){
    super(message)
    Error.captureStackTrace(this, NotFound)
    this.name = 'Not Found'
    this.message = (message || '')
    this.statusCode = 404
  }
}

module.exports = NotFound
