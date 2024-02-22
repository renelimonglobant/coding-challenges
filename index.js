// feb 22th
const combinationSum2 = require('./combinationSum2/combinationSum2')
let result = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
console.log('=', result)
result = combinationSum2([2, 5, 2, 1, 2], 5)
console.log('=', result)

/*
// feb 21th
const findKthLargest = require('./findKthLargest/findKthLargest')
let result = findKthLargest([3, 2, 1, 5, 6, 4], 2)
console.log('=', result)
result = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
console.log('=', result)

// feb 20th
const lengthOfLongestSubstring = require('./lengthOfLongestSubstring/lengthOfLongestSubstring')
let result = lengthOfLongestSubstring('abcabcbb')
console.log('=', result)
result = lengthOfLongestSubstring('bbbbb')
console.log('=', result)
result = lengthOfLongestSubstring('pwwkew')
console.log('=', result)

// feb 19th
const generateParentheses = require('./generateParentheses/generateParentheses')
let result = generateParentheses(3)
console.log('=', result)
result = generateParentheses(2)
console.log('=', result)
result = generateParentheses(1)
console.log('=', result)

// feb 16th
const changeEnough = require('./changeEnough/changeEnough')
let result = changeEnough([25, 20, 5, 0], 4.25)
console.log('=', result)
result = changeEnough([2, 100, 0, 0], 14.11)
console.log('=', result)
result = changeEnough([0, 0, 20, 5], 0.75)
console.log('=', result)
result = changeEnough([30, 40, 20, 5], 12.55)
console.log('=', result)
result = changeEnough([10, 0, 0, 50], 3.85)
console.log('=', result)
result = changeEnough([1, 0, 5, 219], 19.99)
console.log('=', result)

// feb 15th
const countingValleys = require('./countingValleys/countingValleys')
let result = countingValleys(8, 'UDDDUDUU')
console.log('=', result)
result = countingValleys(8, 'DDUUUUDD')
console.log('=', result)

// feb 14th
const primeNumbers = require('./primeNumbers/primeNumbers')
let result = primeNumbers()
console.log('=', result)

// feb 13th
const searchRange = require('./searchRange/searchRange')
let result = searchRange([5, 7, 7, 8, 8, 10], 8)
console.log('=', result)
result = searchRange([5, 7, 7, 8, 8, 10], 6)
console.log('=', result)
result = searchRange([], 0)
console.log('=', result)

// feb 12th
const jumpGameII = require('./jumpGameII/jumpGameII')
let result = jumpGameII([2, 3, 1, 1, 4])
console.log('=', result)
result = jumpGameII([2, 3, 0, 1, 4])
console.log('=', result)

// feb 9th
const findMostVisitedPages = require('./findMostVisitedPages/findMostVisitedPages')
const logData = [
  { url: '/home', userId: 'A' },
  { url: '/about', userId: 'B' },
  { url: '/products', userId: 'A' },
  { url: '/home', userId: 'C' },
  { url: '/contact', userId: 'B' },
  { url: '/products', userId: 'D' },
  { url: '/home', userId: 'A' },
  { url: '/home', userId: 'B' },
  { url: '/products', userId: 'A' },
]
let result = findMostVisitedPages(logData)
console.log('=', result)

// feb 8th
const longestPalindrome = require('./longestPalindrome/longestPalindrome')
let result = longestPalindrome('ana, anna')
console.log('=', result)
result = longestPalindrome('babad')
console.log('=', result)
result = longestPalindrome('cbbd')
console.log('=', result)
result = longestPalindrome('abc')
console.log('=', result)

// feb 7th
const searchInRotatedSortedArray = require('./searchInRotatedSortedArray/searchInRotatedSortedArray')
let result = searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)
console.log('=', result)
result = searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)
console.log('=', result)
result = searchInRotatedSortedArray([1], 0)
console.log('=', result)

// feb 6th
const removeNthFromEnd = require('./removeNthFromEnd/removeNthFromEnd')
let result = removeNthFromEnd([1, 2, 3, 4, 5], 2)
console.log('=', result)
result = removeNthFromEnd([1], 1)
console.log('=', result)
result = removeNthFromEnd([1, 2], 1)
console.log('=', result)

// feb 2nd
const base64 = require('./base64Encoding/base64Encoding')
const encoded = base64.base64Encoding('hola')
console.log('hola', '=', encoded)
const decoded = base64.base64Decoding(encoded)
console.log(encoded, '=', decoded)

// feb 1st
const coinChange = require('./coinChange/coinChange')
let result = coinChange([1, 2, 5], 11)
console.log([1, 2, 5], 11, '=', result)
console.log('*******')
result = coinChange([2], 3)
console.log([2], 3, '=', result)
console.log('*******')
result = coinChange([2, 2, 5, 8], 10)
console.log([2, 2, 5, 8], 10, '=', result)
console.log('*******')
result = coinChange([2], 4)
console.log([2], 4, '=', result)
console.log('*******')
result = coinChange([20, 2, 10], 2)
console.log([20, 2, 10], 2, '=', result)

// jan 30th
const balancedParentheses = require('./balancedParentheses/balancedParentheses')
let result = balancedParentheses('()')
console.log('()', '=', result)
result = balancedParentheses('(hello, world)')
console.log('(hello, world)', '=', result)
result = balancedParentheses('Random text (as this) is ok().')
console.log('Random text (as this) is ok().', '=', result)
result = balancedParentheses(')(')
console.log(')(', '=', result)
result = balancedParentheses('(Hello (,) world (!))')
console.log('(Hello (,) world (!))', '=', result)
result = balancedParentheses(')()(')
console.log(')()(', '=', result)
result = balancedParentheses('())(()')
console.log('())(()', '=', result)
result = balancedParentheses('Hello world')
console.log('Hello world', '=', result)

// jan 30th
const rollThedice = require('./rollThedice/rollThedice')
let result = rollThedice(1, 6, 3)
console.log('=', result)
result = rollThedice(2, 6, 7)
console.log('=', result)

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
