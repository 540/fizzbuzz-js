const fizzbuzz = require('../src/fizzbuzz')

describe('FizzBuzz', () => {
  const fizzbuzzNumber = n => fizzBuzz()[n - 1]
  const fizzBuzz = fizzbuzz.createFizzBuzz()
  it('returns "1" for 1 number', () => {
    expect(fizzbuzzNumber(1)).toEqual('1')
  })
  it('returns "2" for 2 number', () => {
    expect(fizzbuzzNumber(2)).toEqual('2')
  })
  it('returns "Fizz" for 3 number', () => {
    expect(fizzbuzzNumber(3)).toEqual('Fizz')
  })
  it('returns "Fizz" for 6 number', () => {
    expect(fizzbuzzNumber(6)).toEqual('Fizz')
  })
  it('returns "Buzz" for 5 number', () => {
    expect(fizzbuzzNumber(5)).toEqual('Buzz')
  })
  it('returns "Buzz" for 10 number', () => {
    expect(fizzbuzzNumber(10)).toEqual('Buzz')
  })
  it('returns "Buzz" for 5 number', () => {
    expect(fizzbuzzNumber(5)).toEqual('Buzz')
  })
  it('returns "FizzBuzz" for 15 number', () => {
    expect(fizzbuzzNumber(15)).toEqual('FizzBuzz')
  })
  it('returns "Fizz" for number containing 3', () => {
    expect(fizzbuzzNumber(35)).toEqual('Fizz')
  })
  it('returns "Buzz" for number containing 5', () => {
    expect(fizzbuzzNumber(53)).toEqual('Buzz')
  })
  it('returns multiple numbers', () => {
    expect(fizzBuzz().splice(0, 5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz'])
  })
  it('returns 100 numbers', () => {
    expect(fizzBuzz()).toHaveLength(100)
  })
})
