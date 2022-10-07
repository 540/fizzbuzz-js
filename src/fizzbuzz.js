export const fizzBuzz = (aNumber, numbers) => {
  if (numbers === undefined) {
    return fizzBuzzForNumber(aNumber)
  } else {
    return numbers.map(n => fizzBuzzForNumber(n))
  }
}

const fizzBuzzForNumber = aNumber => {
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
const isDivisibleBy = divisor => number => number % divisor === 0
const isDivisibleBy3 = isDivisibleBy(3)
const isDivisibleBy5 = isDivisibleBy(5)
