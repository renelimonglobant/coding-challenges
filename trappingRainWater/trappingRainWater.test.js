const trappingRainWater = require('./trappingRainWater')

describe('- TrappingRainWater test', () => {
  const blocks1 = [3, 0, 0, 2, 0, 4]
  it(`${JSON.stringify(blocks1)} contains 10 water blocks`, () =>
    expect(trappingRainWater(blocks1)).toBe(10))

  const blocks2 = [7, 4, 0, 9]
  it(`${JSON.stringify(blocks2)} contains 10 water blocks`, () =>
    expect(trappingRainWater(blocks2)).toBe(10))

  const blocks3 = [6, 9, 9]
  it(`${JSON.stringify(blocks3)} contains 0 water blocks`, () =>
    expect(trappingRainWater(blocks3)).toBe(0))

  const blocks4 = [6, 0, 7, 0, 7]
  it(`${JSON.stringify(blocks4)} contains 13 water blocks`, () =>
    expect(trappingRainWater(blocks4)).toBe(13))
})
