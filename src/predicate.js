export const isDivisibleBy = function(divisor) {
  return function(n) {
    return n % divisor === 0
  }
}

export const contains = function(search) {
  return function(n) {
    return n.toString().search(search.toString()) === 0
  }
}

export const and = function() {
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

export const or = function() {
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

export const otherwise = function() {
  return true
}
