var predicate = require('./predicate')

export var createFizzBuzz = function() {
  var ruleSet = [
    {
      predicate: predicate.and(
        predicate.isDivisibleBy(3),
        predicate.isDivisibleBy(5)
      ),
      trans: function() {
        return 'FizzBuzz'
      }
    },
    {
      predicate: predicate.or(
        predicate.isDivisibleBy(3),
        predicate.contains(3)
      ),
      trans: function() {
        return 'Fizz'
      }
    },
    {
      predicate: predicate.or(
        predicate.isDivisibleBy(5),
        predicate.contains(5)
      ),
      trans: function() {
        return 'Buzz'
      }
    },
    {
      predicate: predicate.otherwise,
      trans: function(n) {
        return n.toString()
      }
    }
  ]
  return fizzBuzz(ruleSet)
}

export var fizzBuzz = function(ruleSet) {
  return function() {
    return Array.from({ length: 100 }, function(_, i) {
      return i + 1
    }).map(function(n) {
      return ruleSet
        .find(function(rule) {
          return rule.predicate(n)
        })
        .trans(n)
    })
  }
}
