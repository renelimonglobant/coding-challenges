const changeEnough = require('./changeEnough')

describe('- changeEnough test', () => {
  test(`changeEnough([25, 20, 5, 0], 4.25) will output: true`, () =>
    expect(changeEnough([25, 20, 5, 0], 4.25)).toBe(true))
  test(`changeEnough([2, 100, 0, 0], 14.11) will output: false`, () =>
    expect(changeEnough([2, 100, 0, 0], 14.11)).toBe(false))
  test(`changeEnough([0, 0, 20, 5], 0.75) will output: true`, () =>
    expect(changeEnough([0, 0, 20, 5], 0.75)).toBe(true))
  test(`changeEnough([30, 40, 20, 5], 12.55) will output: true`, () =>
    expect(changeEnough([30, 40, 20, 5], 12.55)).toBe(true))
  test(`changeEnough([10, 0, 0, 50], 3.85) will output: false`, () =>
    expect(changeEnough([10, 0, 0, 50], 3.85)).toBe(false))
  test(`changeEnough([1, 0, 5, 219], 19.99) will output: false`, () =>
    expect(changeEnough([1, 0, 5, 219], 19.99)).toBe(false))
})
