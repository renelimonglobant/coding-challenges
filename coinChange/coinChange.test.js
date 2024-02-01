const coinChange = require('./coinChange')

describe('- CoinChange test', () => {
  it(`coinChange([1, 2, 5], 11) is 3`, () => expect(coinChange([1, 2, 5], 11)).toBe(3))
  it(`coinChange([ 2], 3) is -1`, () => expect(coinChange([2], 3)).toBe(-1))
})
