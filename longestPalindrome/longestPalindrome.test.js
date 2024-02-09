const longestPalindrome = require('./longestPalindrome')

describe('- longestPalindrome test', () => {
  test(`longestPalindrome('ana, anna') will output 'anna'`, () =>
    expect(longestPalindrome('ana, anna')).toBe('anna'))

  test(`longestPalindrome('babad') will output 'bab'`, () =>
    expect(longestPalindrome('babad')).toBe('bab'))

  test(`longestPalindrome('cbbd') will output 'bb'`, () =>
    expect(longestPalindrome('cbbd')).toBe('bb'))

  test(`longestPalindrome('abc') will output 'a'`, () => expect(longestPalindrome('abc')).toBe('a'))
})
