const myFizzBuzz = require('../src/fizzbuzz')

describe('FizzBuzz', function() {
  it('returns "1" for 1 number', function() {
    expect(myFizzBuzz.fizzBuzz(1)).toEqual('1')
  })
  it('returns "2" for 2 number', function() {
    expect(myFizzBuzz.fizzBuzz(2)).toEqual('2')
  })
  it('returns "Fizz" for 3 number', function() {
    expect(myFizzBuzz.fizzBuzz(3)).toEqual('Fizz')
  })
  it('returns "Fizz" for 6 number', function() {
    expect(myFizzBuzz.fizzBuzz(6)).toEqual('Fizz')
  })
  it('returns "Buzz" for 5 number', function() {
    expect(myFizzBuzz.fizzBuzz(5)).toEqual('Buzz')
  })
  it('returns "Buzz" for 10 number', function() {
    expect(myFizzBuzz.fizzBuzz(10)).toEqual('Buzz')
  })
  it('returns "Buzz" for 5 number', function() {
    expect(myFizzBuzz.fizzBuzz(5)).toEqual('Buzz')
  })
  it('returns "FizzBuzz" for 15 number', function() {
    expect(myFizzBuzz.fizzBuzz(15)).toEqual('FizzBuzz')
  })
})
