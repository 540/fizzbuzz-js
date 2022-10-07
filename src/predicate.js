export var isDivisibleBy = divisor => n => n % divisor === 0

export var contains = search => n =>
  n.toString().search(search.toString()) === 0

export var and = function() {
  let predicates = []
  for (let _i = 0; _i < arguments.length; _i++) {
    predicates[_i] = arguments[_i]
  }
  return n => predicates.every(predicate => predicate(n))
}

export var or = function() {
  let predicates = []
  for (let _i = 0; _i < arguments.length; _i++) {
    predicates[_i] = arguments[_i]
  }
  return n => predicates.some(predicate => predicate(n))
}

export var otherwise = () => true
