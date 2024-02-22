const combinationSum2 = require('./combinationSum2')

describe('- combinationSum2 test', () => {
  nums1 = [10, 1, 2, 7, 6, 1, 5]
  r1 = [
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ]
  test(`combinationSum2(${JSON.stringify(nums1)}, 8) will output: ${JSON.stringify(r1)}`, () =>
    expect(combinationSum2(nums1, 8)).toMatchObject(r1))
  const nums2 = [2, 5, 2, 1, 2]
  const r2 = [[1, 2, 2], [5]]
  test(`combinationSum2(${JSON.stringify(nums2)}, 5) will output: ${JSON.stringify(r2)}`, () =>
    expect(combinationSum2(nums2, 5)).toMatchObject(r2))
})
