// CustomError class that inherits from Error, where the class name property is "CustomError"
class Customererror extends Error {
  constructor (message) {
    super(message)
    this.name = 'CustomError'
  }
}
// Function throwGenericError() that uses throw to create a generic Error error, with the custom message of "Generic error"
function throwGenericError () {
  throw new Error('Generic error')
}
// Function throwCustomError() that uses throw to create a custom CustomError error, with the custom message of "Custom error"
function throwCustomError () {
  throw new Error('Custom error')
}
// A try..catch..finally block that forces the generic error by calling throwGenericError(), with console.log() debug statements
try {
  console.log('Force generic error')
  console.log('Generic error try block')
  throwGenericError()
} catch (error) {
  console.log('Generic error catch block')
  console.log(error.name + ': ' + error.message)
} finally {
  console.log('Generic error finally block')
}
// A try..catch..finally block that forces the custom error by calling throwCustomError(), with console.log() debug statements
try {
  console.log('force custom error')
  console.log('custom error try block')
  throwCustomError()
} catch (error) {
  console.log('custom error catch block')
  console.log(error.name + ': ' + error.message)
} finally {
  console.log('Custom error finally block')
}
