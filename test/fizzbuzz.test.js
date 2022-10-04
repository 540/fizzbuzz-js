var myFizzBuzz = require('../src/fizzbuzz')

describe('FizzBuzz', function() {
  var fizzBuzz = myFizzBuzz.createFizzBuzz()
  it('returns "1" for 1 number', function() {
    expect(runFizzBuzz(1)).toEqual('1')
  })
  it('returns "2" for 2 number', function() {
    expect(runFizzBuzz(2)).toEqual('2')
  })
  it('returns "Fizz" for 3 number', function() {
    expect(runFizzBuzz(3)).toEqual('Fizz')
  })
  it('returns "Fizz" for 6 number', function() {
    expect(runFizzBuzz(6)).toEqual('Fizz')
  })
  it('returns "Buzz" for 5 number', function() {
    expect(runFizzBuzz(5)).toEqual('Buzz')
  })
  it('returns "Buzz" for 10 number', function() {
    expect(runFizzBuzz(10)).toEqual('Buzz')
  })
  it('returns "Buzz" for 5 number', function() {
    expect(runFizzBuzz(5)).toEqual('Buzz')
  })
  it('returns "FizzBuzz" for 15 number', function() {
    expect(runFizzBuzz(15)).toEqual('FizzBuzz')
  })
  it('returns "Fizz" for number containing 3', function() {
    expect(runFizzBuzz(35)).toEqual('Fizz')
  })
  it('returns "Buzz" for number containing 5', function() {
    expect(runFizzBuzz(53)).toEqual('Buzz')
  })
  it('returns multiple numbers', function() {
    expect(fizzBuzz(53, [1, 2, 3, 4, 5])).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz'
    ])
  })
  var runFizzBuzz = function(n) {
    return fizzBuzz(n, [n])[0]
  }
})
