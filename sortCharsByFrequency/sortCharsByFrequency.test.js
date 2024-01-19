const sortCharsByFrequency = require('./sortCharsByFrequency')

describe('sortCharsByFrequency test', () => {
  it('tree will output: eetr', () => {
    expect(sortCharsByFrequency('tree')).toBe('eetr')
  })

  it('cccaaa will output cccaaa', () => {
    expect(sortCharsByFrequency('cccaaa')).toBe('cccaaa')
  })

  it('aAbb will output bbaA', () => {
    expect(sortCharsByFrequency('aAbb')).toBe('bbaA')
  })

  it('antarctica will output aaaccttirn', () => {
    expect(sortCharsByFrequency('antarctica')).toBe('aaaccttirn')
  })
})
