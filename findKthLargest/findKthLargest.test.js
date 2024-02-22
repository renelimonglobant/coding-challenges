const findKthLargest = require('./findKthLargest')

describe('- findKthLargest test', () => {
  const nums1 = [3, 2, 1, 5, 6, 4]
  test(`findKthLargest(${nums1}, 2) will output: 5`, () => expect(findKthLargest(nums1, 2)).toBe(5))
  const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6]
  test(`findKthLargest(${nums2}, 4) will output: 4`, () => expect(findKthLargest(nums2, 4)).toBe(4))
})
