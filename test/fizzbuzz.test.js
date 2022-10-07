const myFizzBuzz = require('../src/fizzbuzz')

describe('FizzBuzz', () => {
  const fizzBuzz = myFizzBuzz.createFizzBuzz()
  it('returns "1" for 1 number', () => {
    expect(runFizzBuzz(1)).toEqual('1')
  })
  it('returns "2" for 2 number', () => {
    expect(runFizzBuzz(2)).toEqual('2')
  })
  it('returns "Fizz" for 3 number', () => {
    expect(runFizzBuzz(3)).toEqual('Fizz')
  })
  it('returns "Fizz" for 6 number', () => {
    expect(runFizzBuzz(6)).toEqual('Fizz')
  })
  it('returns "Buzz" for 5 number', () => {
    expect(runFizzBuzz(5)).toEqual('Buzz')
  })
  it('returns "Buzz" for 10 number', () => {
    expect(runFizzBuzz(10)).toEqual('Buzz')
  })
  it('returns "Buzz" for 5 number', () => {
    expect(runFizzBuzz(5)).toEqual('Buzz')
  })
  it('returns "FizzBuzz" for 15 number', () => {
    expect(runFizzBuzz(15)).toEqual('FizzBuzz')
  })
  it('returns "Fizz" for number containing 3', () => {
    expect(runFizzBuzz(35)).toEqual('Fizz')
  })
  it('returns "Buzz" for number containing 5', () => {
    expect(runFizzBuzz(53)).toEqual('Buzz')
  })
  it('returns multiple numbers', () => {
    expect(fizzBuzz(53, [1, 2, 3, 4, 5])).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz'
    ])
  })
  const runFizzBuzz = n => fizzBuzz(n, [n])[0]
})
