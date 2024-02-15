const countingValleys = require('./countingValleys')

describe('- countingValleys test', () => {
  test(`countingValleys(8, 'UDDDUDUU') will output: 1`, () => {
    expect(countingValleys(8, 'UDDDUDUU')).toBe(1)
  })
  test(`countingValleys(8, 'DDUUUUDD') will output: 1`, () => {
    expect(countingValleys(8, 'DDUUUUDD')).toBe(1)
  })
})
