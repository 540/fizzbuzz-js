export var fizzBuzz = function(aNumber, numbers) {
  if (numbers === undefined) {
    return fizzBuzzForNumber(aNumber)
  } else {
    return numbers.map(function(n) {
      return fizzBuzzForNumber(n)
    })
  }
}

var fizzBuzzForNumber = function(aNumber) {
  if (isDivisibleBy3(aNumber) && isDivisibleBy5(aNumber)) {
    return 'FizzBuzz'
  }
  if (isDivisibleBy3(aNumber)) {
    return 'Fizz'
  }
  if (isDivisibleBy5(aNumber)) {
    return 'Buzz'
  }
  return aNumber.toString()
}
var isDivisibleBy = function(divisor) {
  return function(n) {
    return n % divisor === 0
  }
}
var isDivisibleBy3 = isDivisibleBy(3)
var isDivisibleBy5 = isDivisibleBy(5)
