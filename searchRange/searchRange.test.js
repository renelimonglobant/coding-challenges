const searchRange = require('./searchRange')

describe('- searchRange test', () => {
  test(`searchRange([5, 7, 7, 8, 8, 10], 8) will output: [3, 4]`, () =>
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toMatchObject([3, 4]))
  test(`searchRange([5, 7, 7, 8, 8, 10], 6) will output: [-1, -1]`, () =>
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toMatchObject([-1, -1]))
  test(`searchRange([], 0) will output: [-1, -1]`, () =>
    expect(searchRange([], 0)).toMatchObject([-1, -1]))
})
