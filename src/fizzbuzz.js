var predicate_1 = require('./predicate')

export var createFizzBuzz = function() {
  var ruleSet = [
    {
      predicate:  predicate_1.and(
        predicate_1.isDivisibleBy(3),
        predicate_1.isDivisibleBy(5)
      ),
      trans: function() {
        return 'FizzBuzz'
      }
    },
    {
      predicate: predicate_1.or(
        predicate_1.isDivisibleBy(3),
        predicate_1.contains(3)
      ),
      trans: function() {
        return 'Fizz'
      }
    },
    {
      predicate: predicate_1.or(
        predicate_1.isDivisibleBy(5),
        predicate_1.contains(5)
      ),
      trans: function() {
        return 'Buzz'
      }
    },
    {
      predicate: predicate_1.otherwise,
      trans: function(n) {
        return n.toString()
      }
    }
  ]
  return fizzBuzz(ruleSet)
}

export var fizzBuzz = function(ruleSet) {
  return function(n, numbers) {
    return numbers === undefined
      ? ruleSet
          .find(function(rule) {
            return rule.predicate(n)
          })
          .trans(n)
      : numbers.map(function(n2) {
          return ruleSet
            .find(function(rule) {
              return rule.predicate(n2)
            })
            .trans(n2)
        })
  }
}
