// jan 16th
const swapPairs = require('./swapPairs/swapPairs')
let result = swapPairs([1, 2, 3, 4])
console.log([1, 2, 3, 4], result)
result = swapPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], result)
result = swapPairs([1, 2, 3, 4, 5, 6])
console.log([1, 2, 3, 4, 5, 6], result)
result = swapPairs([1])
console.log([1], result)
result = swapPairs([])
console.log([], result)

// jan 15th
// const deleteDuplicates = require('./deleteDuplicates/deleteDuplicates')
// const result = deleteDuplicates([1, 1, 3, 4])
// console.log([1, 1, 3, 4], result)

// const reverse = require('./reverse/reverse')
// const result = reverse('123')
// console.log(result)

// const threeSumClosest = require('./threeSumClosest/threeSumClosest')
// const result = threeSumClosest([0, 0, 0], 1)
// const result2 = threeSumClosest([-1, 2, 1, -4], 1)
// console.log('input', [0, 0, 0], 1, 'output =', result)
// console.log('input', [-1, 2, 1, -4], 1, 'output =', result2)

// const climStairs = require('./climbStairs/climbStairs')
// climStairs(2)
// climStairs(3)
// climStairs(4)

// const spiralOrder = require('./spiralOrder/spiralOrder')
// const result = spiralOrder([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ])
// // const result = spiralOrder([
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ])
// console.log(':')
// console.log(result)
