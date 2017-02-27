const assert = require('chai').assert
    , expect = require('chai').expect
    , exceptions = require('../index.js')

describe('exceptions.js', () => {

    it('should contain exceptions constructors', () => {
        for (let exceptionName in exceptions) {
            if (exceptions.hasOwnProperty(exceptionName)) {
                assert(
                    typeof exceptions[exceptionName] === 'function',
                    exceptionName + ' not a constructor' )
            }
        }
    });
    it('instance of exceptions should be instance of Error()', () => {
        for (let exceptionName in exceptions) {
            if (exceptions.hasOwnProperty(exceptionName)) {
                assert(
                    (new exceptions[exceptionName] instanceof Error),
                    exceptionName + ' not subtype of Error()' )
            }
        }
    });
    it('exceptions should have stack', () => {
        for (let exceptionName in exceptions) {
            if (exceptions.hasOwnProperty(exceptionName)) {
                try {
                    throw new exceptions[exceptionName]
                } catch (e) {
                    assert(
                        e.stack && (typeof e.stack === 'string'),
                        exceptionName + ' not subtype of Error()' )
                }

            }
        }
    })
})
