const object1 = {
  name: 'Boris',
  weight: 15,
}

const object2 = {
  name: 'Boris',
  weight: 15,
}

const object3 = {
  name: 'Rex',
  weight: 20,
}

// Реализуйте функцию isEquivalent

const isEquivalent = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2)

console.log(isEquivalent(object1, object2)) // true
console.log(isEquivalent(object1, object3)) // false
