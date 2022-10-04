import FizzBuzz from '../src/fizzbuzz'

describe('FizzBuzz', () => {
  const fizzbuzz = new FizzBuzz()

  it('example test', () => {
    expect(fizzbuzz.message()).toEqual(undefined)
  })
})
