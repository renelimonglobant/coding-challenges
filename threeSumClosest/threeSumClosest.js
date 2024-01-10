function threeSumClosest(nums, target) {
  if (nums.length < 3) return 0
  let previousDiff = 100000000
  for (let i = 0; i < nums.length; i++)
    for (let j = 0; j < nums.length; j++)
      for (let k = 0; k < nums.length; k++)
        if (new Set([j, k, i]).size === 3) {
          const diff = Math.abs(nums[i] + nums[j] + nums[k] - target)
          if (diff === 1) return nums[i] + nums[j] + nums[k]
          if (diff < previousDiff) previousDiff = diff
        }
  return previousDiff
}

module.exports = threeSumClosest
