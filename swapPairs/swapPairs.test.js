const swapPairs = require('./swapPairs')

test('swapPairs [1, 2, 3, 4] will output [2, 1, 4, 3]', () => {
  expect(swapPairs([1, 2, 3, 4])).toMatchObject([2, 1, 4, 3])
})

test('swapPairs [1, 2, 3, 4, 5, 6] will output [2, 1, 4, 3, 6, 5]', () => {
  expect(swapPairs([1, 2, 3, 4, 5, 6])).toMatchObject([2, 1, 4, 3, 6, 5])
})

test('swapPairs [1] will output [1]', () => {
  expect(swapPairs([1])).toMatchObject([1])
})

test('swapPairs [] will output []', () => {
  expect(swapPairs([])).toMatchObject([])
})
