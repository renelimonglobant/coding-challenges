const deleteDuplicates = require('./deleteDuplicates')

test('deleteDuplicates [1, 1, 3, 4] will output [1, 3, 4]', () => {
  expect(deleteDuplicates([1, 1, 3, 4])).toMatchObject([1, 3, 4])
})

test('deleteDuplicates [1, 1, 2] will output [1, 2]', () => {
  expect(deleteDuplicates([1, 1, 2])).toMatchObject([1, 2])
})

test('deleteDuplicates [1, 1, 2, 3, 3] will output [1, 2, 3]', () => {
  expect(deleteDuplicates([1, 1, 2, 3, 3])).toMatchObject([1, 2, 3])
})
