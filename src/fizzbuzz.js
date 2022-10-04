export var myPredicate = require('./predicate')

export var createFizzBuzz = function() {
  var ruleSet = [
    {
      predicate: (0, myPredicate.and)(
        (0, myPredicate.isDivisibleBy)(3),
        (0, myPredicate.isDivisibleBy)(5)
      ),
      trans: function() {
        return 'FizzBuzz'
      }
    },
    {
      predicate: (0, myPredicate.or)(
        (0, myPredicate.isDivisibleBy)(3),
        (0, myPredicate.contains)(3)
      ),
      trans: function() {
        return 'Fizz'
      }
    },
    {
      predicate: (0, myPredicate.or)(
        (0, myPredicate.isDivisibleBy)(5),
        (0, myPredicate.contains)(5)
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
  return (0, fizzBuzz)(ruleSet)
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

