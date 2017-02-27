class BadRequest extends Error {
  constructor (message) {
    super(message)
    Error.captureStackTrace(this, BadRequest)
    this.name = 'Bad Request'
    this.message = (message || '')
    this.statusCode = 400
  }
}

module.exports = BadRequest
