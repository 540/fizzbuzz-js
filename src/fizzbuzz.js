export var myPredicate = require('./predicate')

export var createFizzBuzz = function() {
  var ruleSet = [
    {
      predicate: myPredicate.and(
        myPredicate.isDivisibleBy(3),
        myPredicate.isDivisibleBy(5)
      ),
      trans: function() {
        return 'FizzBuzz'
      }
    },
    {
      predicate: myPredicate.or(
        myPredicate.isDivisibleBy(3),
        myPredicate.contains(3)
      ),
      trans: function() {
        return 'Fizz'
      }
    },
    {
      predicate: myPredicate.or(
        myPredicate.isDivisibleBy(5),
        myPredicate.contains(5)
      ),
      trans: function() {
        return 'Buzz'
      }
    },
    {
      predicate: myPredicate.otherwise,
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
