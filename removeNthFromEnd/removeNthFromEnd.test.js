const removeNthFromEnd = require('./removeNthFromEnd')

describe('- removeNthFromEnd test', () => {
  test('removeNthFromEnd([1, 2, 3, 4, 5], 2) will output [1, 2, 3, 5]', () => {
    expect(removeNthFromEnd([1, 2, 3, 4, 5], 2)).toMatchObject([1, 2, 3, 5])
  })

  test('removeNthFromEnd([1], 1) will output []', () => {
    expect(removeNthFromEnd([1], 1)).toMatchObject([])
  })

  test('removeNthFromEnd([1, 2], 1) will output [1]', () => {
    expect(removeNthFromEnd([1, 2], 1)).toMatchObject([1])
  })
})
