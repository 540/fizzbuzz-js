export const fizzBuzz = function(numbers) {
  return numbers.map(function(n) {
    return fizzBuzzForNumber(n)
  })
}

const fizzBuzzForNumber = function(aNumber) {
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
const isDivisibleBy = function(divisor) {
  return function(n) {
    return n % divisor === 0
  }
}
const isDivisibleBy3 = isDivisibleBy(3)
const isDivisibleBy5 = isDivisibleBy(5)
