// jan 30th
const rollThedice = require('./rollThedice/rollThedice')
let result = rollThedice(1, 6, 3)
console.log('=', result)
result = rollThedice(2, 6, 7)
console.log('=', result)

/*
// jan 29th
const minimumOperationsArray = require('./minimumOperationsArray/minimumOperationsArray')
let result = minimumOperationsArray([1, 2, 3, 0, 0, 0])
console.log('=', result)
result = minimumOperationsArray([2, 3, 3, 2, 2, 4, 2, 3, 4])
console.log('=', result)
result = minimumOperationsArray([2, 3, 3, 2, 2, 4, 2, 3, 3, 3, 4])
console.log('=', result)
result = minimumOperationsArray([2, 1, 2, 2, 3, 3])
console.log('=', result)

// jan 26th
const mergeSortedArray = require('./mergeSortedArray/mergeSortedArray')
let a1 = [1, 2, 3, 0, 0, 0]
let a2 = [2, 5, 6]
mergeSortedArray(a1, a2, 3, 3)
console.log('=', a1)

a1 = [1]
a2 = []
mergeSortedArray(a1, a2, 1, 0)
console.log('=', a1)

a1 = [0]
a2 = [1]
mergeSortedArray(a1, a2, 0, 1)
console.log('=', a1)


// jan 25th
const binaryTreePreorder = require('./binaryTreePreorder/binaryTreePreorder')
let tree = [30, 45, 5, 9, 7, 31, 45, 11, 2]
let result = binaryTreePreorder(tree)
console.log('=', result)
result = binaryTreePreorder([], true)
console.log('=', result)

// jan 24th
const trappingRainWater = require('./trappingRainWater/trappingRainWater')
let blocks = [3, 0, 0, 2, 0, 4]
let result = trappingRainWater(blocks)
console.log(blocks, '=', result)
blocks = [7, 4, 0, 9]
result = trappingRainWater(blocks)
console.log(blocks, '=', result)
blocks = [6, 9, 9]
result = trappingRainWater(blocks)
console.log(blocks, '=', result)
blocks = [6, 0, 7, 0, 7]
result = trappingRainWater(blocks)
console.log(blocks, '=', result)

// jan 23th
const gradeDistribution = require('./gradeDistribution/gradeDistribution')
const grade = [
  { name: 'John', grade: 85 },
  { name: 'Emma', grade: 95 },
  { name: 'Michael', grade: 72 },
  { name: 'Sophia', grade: 68 },
  { name: 'Ryan', grade: 90 },
]
let result = gradeDistribution(grade)
console.log(grade, '=', result)

// jan 22th
const maxProfit = require('./maxProfit/maxProfit')
let result = maxProfit([10, 11, 9.9, 10, 8])
console.log([10, 11, 9.9, 10, 8], '=', result)
console.log('******')
result = maxProfit([10, 11, 9.9, 10.91, 8])
console.log([10, 11, 9.9, 10.91, 8], '=', result)
console.log('******')
result = maxProfit([10, 9, 8.9, 8.5, 8])
console.log([10, 9, 8.9, 8.5, 8], '=', result)

// jan 19th
const sortCharsByFrequency = require('./sortCharsByFrequency/sortCharsByFrequency')
let result = sortCharsByFrequency('treess')
console.log('treess', '=', result)
result = sortCharsByFrequency('cccaaa')
console.log('cccaaa', '=', result)
result = sortCharsByFrequency('aAbb')
console.log('aAbb', '=', result)
result = sortCharsByFrequency('antarctica')
console.log('antarctica', '=', result)

// jan 18th
const bubbleSort = require('./bubbleSort/bubbleSort')
let result = bubbleSort([5, 1, 4, 2, 8])
console.log([5, 1, 4, 2, 8], '=', result)
result = bubbleSort([5, 1, 4, 9, 24])
console.log([5, 1, 4, 9, 24], '=', result)

// jan 17th
const combinationSum = require('./combinationSum/combinationSum')
let result = combinationSum([1, 2, 4], 4)
console.log([1, 2, 4], '=', result)
result = combinationSum([2, 3, 6, 7], 7)
console.log([2, 3, 6, 7], '=', result)
result = combinationSum([2, 3, 5], 8)
console.log([2, 3, 5], '=', result)
result = combinationSum([2], 1)
console.log([2], '=', result)

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
const deleteDuplicates = require('./deleteDuplicates/deleteDuplicates')
const result = deleteDuplicates([1, 1, 3, 4])
console.log([1, 1, 3, 4], result)

const reverse = require('./reverse/reverse')
const result = reverse('123')
console.log(result)

const threeSumClosest = require('./threeSumClosest/threeSumClosest')
const result = threeSumClosest([0, 0, 0], 1)
const result2 = threeSumClosest([-1, 2, 1, -4], 1)
console.log('input', [0, 0, 0], 1, 'output =', result)
console.log('input', [-1, 2, 1, -4], 1, 'output =', result2)

const climStairs = require('./climbStairs/climbStairs')
climStairs(2)
climStairs(3)
climStairs(4)

const spiralOrder = require('./spiralOrder/spiralOrder')
const result = spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
])
const result = spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])
console.log(':')
console.log(result)
 */
