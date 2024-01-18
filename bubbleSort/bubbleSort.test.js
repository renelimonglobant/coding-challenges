const bubbleSort = require('./bubbleSort')

test('CombubbleSort [5, 1, 4, 2, 8] will output: [ 1, 2, 4, 5, 8 ]', () => {
  expect(bubbleSort([5, 1, 4, 2, 8])).toMatchObject([1, 2, 4, 5, 8])
})

test('CombubbleSort [ 5, 4, 3, 2, 1 ] will output [ 1, 2, 3, 4, 5]', () => {
  expect(bubbleSort([5, 4, 3, 2, 1])).toMatchObject([1, 2, 3, 4, 5])
})
