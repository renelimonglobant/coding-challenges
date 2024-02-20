const lengthOfLongestSubstring = require('./lengthOfLongestSubstring')

describe('- lengthOfLongestSubstring test', () => {
  test(`lengthOfLongestSubstring('abcabcbb') will output: 3`, () =>
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3))
  test(`lengthOfLongestSubstring('bbbbb') will output: 1`, () =>
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1))
  test(`lengthOfLongestSubstring('pwwkew') will output: 3`, () =>
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3))
})
