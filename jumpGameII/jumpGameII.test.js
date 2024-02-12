const jumpGameII = require('./jumpGameII')

describe('- jumpGameII test', () => {
  test(`jumpGameII([2, 3, 1, 1, 4]) will output: 2`, () =>
    expect(jumpGameII([2, 3, 1, 1, 4])).toBe(2))
  test(`jumpGameII([2, 3, 0, 1, 4]) will output: 2`, () =>
    expect(jumpGameII([2, 3, 0, 1, 4])).toBe(2))
})
