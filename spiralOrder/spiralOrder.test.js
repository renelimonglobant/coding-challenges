const spiralOrder = require('./spiralOrder')

test('SpiralOrder [\n[1, 2, 3],\n[4, 5, 6],\n[7, 8, 9]] will output \n[1, 2, 3, 6, 9, 8, 7, 4, 5]', () => {
  expect(
    spiralOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toMatchObject([1, 2, 3, 6, 9, 8, 7, 4, 5])
})

test('SpiralOrder [\n[1, 2, 3, 4],\n[5, 6, 7, 8],\n[9, 10, 11, 12]] will output \n[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]', () => {
  expect(
    spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ])
  ).toMatchObject([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
})

test('SpiralOrder [\n[1, 2, 3, 4],\n[5, 6, 7, 8],\n[9, 10, 11, 12],\n[13, 14, 15, 16]] will output \n[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]', () => {
  expect(
    spiralOrder([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ])
  ).toMatchObject([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
})
