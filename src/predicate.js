export const isDivisibleBy = divisor => n => n % divisor === 0

export const contains = search => n =>
  n.toString().search(search.toString()) === 0

export const and = function() {
  let predicates = []
  for (let _i = 0; _i < arguments.length; _i++) {
    predicates[_i] = arguments[_i]
  }
  return function(n) {
    return predicates.every(function(predicate) {
      return predicate(n)
    })
  }
}

export const or = function() {
  let predicates = []
  for (let _i = 0; _i < arguments.length; _i++) {
    predicates[_i] = arguments[_i]
  }
  return function(n) {
    return predicates.some(function(predicate) {
      return predicate(n)
    })
  }
}

export const otherwise = () => true
