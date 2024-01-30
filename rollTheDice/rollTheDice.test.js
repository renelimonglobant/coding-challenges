const rollThedice = require('./rollThedice')

describe('- RollThedice test', () => {
  it(`rollThedice(1, 6, 3) will output 1`, () => expect(rollThedice(1, 6, 3)).toBe(1))

  it(`rollThedice(2, 6, 7) will output 6`, () => expect(rollThedice(2, 6, 7)).toBe(6))
})
