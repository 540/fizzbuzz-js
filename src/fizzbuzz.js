const predicate = require('./predicate')

export const createFizzBuzz = () => {
  const ruleSet = [
    {
      predicate: predicate.and(
        predicate.isDivisibleBy(3),
        predicate.isDivisibleBy(5)
      ),
      trans: () => 'FizzBuzz'
    },
    {
      predicate: predicate.or(
        predicate.isDivisibleBy(3),
        predicate.contains(3)
      ),
      trans: () => 'Fizz'
    },
    {
      predicate: predicate.or(
        predicate.isDivisibleBy(5),
        predicate.contains(5)
      ),
      trans: () => 'Buzz'
    },
    {
      predicate: predicate.otherwise,
      trans: n => n.toString()
    }
  ]
  return fizzBuzz(ruleSet)
}

export const fizzBuzz = ruleSet => (n, numbers) =>
  numbers === undefined
    ? ruleSet.find(rule => rule.predicate(n)).trans(n)
    : numbers.map(n2 => ruleSet.find(rule => rule.predicate(n2)).trans(n2))
