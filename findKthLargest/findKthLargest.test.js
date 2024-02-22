const findKthLargest = require('./findKthLargest')

describe('- findKthLargest test', () => {
  test(`findKthLargest('abcabcbb') will output: 3`, () =>
    expect(findKthLargest('abcabcbb')).toBe(3))
  test(`findKthLargest('bbbbb') will output: 1`, () => expect(findKthLargest('bbbbb')).toBe(1))
  test(`findKthLargest('pwwkew') will output: 3`, () => expect(findKthLargest('pwwkew')).toBe(3))
})
