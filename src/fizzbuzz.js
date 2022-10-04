var predicate = require('./predicate')
export var createFizzBuzz = function() {
  var ruleSet = [
    {
      predicate: (0, predicate.and)(
        (0, predicate.isDivisibleBy)(3),
        (0, predicate.isDivisibleBy)(5)
      ),
      trans: function() {
        return 'FizzBuzz'
      }
    },
    {
      predicate: (0, predicate.or)(
        (0, predicate.isDivisibleBy)(3),
        (0, predicate.contains)(3)
      ),
      trans: function() {
        return 'Fizz'
      }
    },
    {
      predicate: (0, predicate.or)(
        (0, predicate.isDivisibleBy)(5),
        (0, predicate.contains)(5)
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
  return (0, fizzBuzz)(ruleSet)
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

