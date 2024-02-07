const searchInRotatedSortedArray = require('./searchInRotatedSortedArray')

describe('- searchInRotatedSortedArray test', () => {
  test('searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0) will output 4', () => {
    expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4)
  })

  test('searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3) will output -1', () => {
    expect(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1)
  })

  test('searchInRotatedSortedArray([ 1 ], 0) will output -1', () => {
    expect(searchInRotatedSortedArray([1], 0)).toBe(-1)
  })
})
