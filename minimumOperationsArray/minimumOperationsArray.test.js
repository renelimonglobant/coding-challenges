const minimumOperationsArray = require('./minimumOperationsArray')

describe('- MinimumOperationsArray test', () => {
  it(`[2, 3, 3, 2, 2, 4, 2, 3, 4] will output 4`, () =>
    expect(minimumOperationsArray([2, 3, 3, 2, 2, 4, 2, 3, 4])).toBe(4))

  it(`[2, 1, 2, 2, 3, 3] will output -1`, () =>
    expect(minimumOperationsArray([2, 1, 2, 2, 3, 3])).toBe(-1))

  it(`[2, 3, 3, 2, 2, 4, 2, 3, 3, 3, 4] will output 5`, () =>
    expect(minimumOperationsArray([2, 3, 3, 2, 2, 4, 2, 3, 3, 3, 4])).toBe(5))

  it(`[1, 2, 3, 0, 0, 0] will output -1`, () =>
    expect(minimumOperationsArray([1, 2, 3, 0, 0, 0])).toBe(-1))
})
