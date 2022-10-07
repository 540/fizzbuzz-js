export const myPredicate = require('./predicate')

export const createFizzBuzz = () => {
  const ruleSet = [
    {
      predicate: myPredicate.and(
        myPredicate.isDivisibleBy(3),
        myPredicate.isDivisibleBy(5)
      ),
      trans: () => 'FizzBuzz'
    },
    {
      predicate: myPredicate.or(
        myPredicate.isDivisibleBy(3),
        myPredicate.contains(3)
      ),
      trans: () => 'Fizz'
    },
    {
      predicate: myPredicate.or(
        myPredicate.isDivisibleBy(5),
        myPredicate.contains(5)
      ),
      trans: () => 'Buzz'
    },
    {
      predicate: myPredicate.otherwise,
      trans: n => n.toString()
    }
  ]
  return fizzBuzz(ruleSet)
}

export const fizzBuzz = ruleSet => (n, numbers) =>
  numbers === undefined
    ? ruleSet.find(rule => rule.predicate(n)).trans(n)
    : numbers.map(n2 => ruleSet.find(rule => rule.predicate(n2)).trans(n2))
