'use strict';
class Unauthorized extends Error {
  constructor (message) {
    super(message);
    Error.captureStackTrace(this, Unauthorized);
    this.name = 'Unauthorized';
    this.message = (message || '');
    this.statusCode = 401;
    this.headers = {
      'WWW-Authenticate': 'token realm="MMS api"'
    };
  }
}

module.exports = Unauthorized;
