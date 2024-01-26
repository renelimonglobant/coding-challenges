const mergeSortedArray = require('./mergeSortedArray')

describe('- MergeSortedArray test', () => {
  const a = [1, 2, 3, 0, 0, 0]
  it(`mergeSortedArray(${JSON.stringify(
    a
  )}, [2, 5, 6], 3, 3) will output [1, 2, 2, 3, 5, 6]`, () => {
    mergeSortedArray(a, [2, 5, 6], 3, 3)
    expect(a).toMatchObject([1, 2, 2, 3, 5, 6])
  })

  const b = [1]
  it(`mergeSortedArray(${JSON.stringify(b)}, [], 1, 0) will output [1]`, () => {
    mergeSortedArray(b, [], 1, 0)
    expect(b).toMatchObject([1])
  })

  const c = [0]
  it(`mergeSortedArray(${JSON.stringify(c)}, [1], 0, 1) will output [1]`, () => {
    mergeSortedArray(c, [1], 0, 1)
    expect(c).toMatchObject([1])
  })
})
