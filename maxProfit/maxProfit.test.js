const maxProfit = require('./maxProfit')

describe('maxProfit test', () => {
  it('[ 10, 11, 9.9, 10, 8 ]: Buy at $10, sell at $11. Profit: $1.00', () => {
    expect(maxProfit([10, 11, 9.9, 10, 8])).toBe('Buy at $10, sell at $11. Profit: $1.00')
  })

  it('[ 10, 11, 9.9, 10.91, 8 ]: Buy at $9.9, sell at $10.91. Profit: $1.01', () => {
    expect(maxProfit([10, 11, 9.9, 10.91, 8])).toBe('Buy at $9.9, sell at $10.91. Profit: $1.01')
  })

  it('[ 10, 9, 8.9, 8.5, 8 ]: Don’t buy, profit can’t be made', () => {
    expect(maxProfit([10, 9, 8.9, 8.5, 8])).toBe('Don’t buy, profit can’t be made')
  })
})
