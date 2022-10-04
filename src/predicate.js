export var isDivisibleBy = function(divisor) {
  return function(n) {
    return n % divisor === 0
  }
}

export var contains = function(search) {
  return function(n) {
    return n.toString().search(search.toString()) === 0
  }
}

export var and = function() {
  var predicates = []
  for (var _i = 0; _i < arguments.length; _i++) {
    predicates[_i] = arguments[_i]
  }
  return function(n) {
    return predicates.every(function(predicate) {
      return predicate(n)
    })
  }
}

export var or = function() {
  var predicates = []
  for (var _i = 0; _i < arguments.length; _i++) {
    predicates[_i] = arguments[_i]
  }
  return function(n) {
    return predicates.some(function(predicate) {
      return predicate(n)
    })
  }
}

export var otherwise = function() {
  return true
}