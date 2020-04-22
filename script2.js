function sum(array) {
  let sum = 0
  sum = array.reduce((sum, num) => sum + num)
  return sum
}

console.log(sum.call(this, [5, 5, 5, 5, 5, 5, 5, 5, 5]))
