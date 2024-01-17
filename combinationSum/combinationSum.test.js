const combinationSum = require('./combinationSum')

test('ComcombinationSum [1, 2, 4], 4 will output: [[1, 1, 1, 1], [1, 1, 2], [2, 2], [4]]', () => {
  expect(combinationSum([1, 2, 4], 4)).toMatchObject([[1, 1, 1, 1], [1, 1, 2], [2, 2], [4]])
})

test('ComcombinationSum [ 2, 3, 6, 7 ], 7 will output [[2, 2, 3],[7]]', () => {
  expect(combinationSum([2, 3, 6, 7], 7)).toMatchObject([[2, 2, 3], [7]])
})

test('ComcombinationSum [2, 3, 5 ], 8 output [[2, 2, 2, 2], [2, 3, 3], [3, 5]]', () => {
  expect(combinationSum([2, 3, 5], 8)).toMatchObject([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ])
})

test('ComcombinationSum [2], 1 output []', () => {
  expect(combinationSum([2], 1)).toMatchObject([])
})
