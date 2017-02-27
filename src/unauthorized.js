class Unauthorized extends Error {
  constructor (message) {
    super(message)
    Error.captureStackTrace(this, Unauthorized)
    this.name = 'Unauthorized'
    this.message = (message || '')
    this.statusCode = 401
  }
}

module.exports = Unauthorized
