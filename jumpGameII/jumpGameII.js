const jumpGameII = (nums) => {
  const n = nums.length
  let jumps = 0
  let max = 0
  let current = 0

  for (let i = 0; i < n - 1; i++) {
    max = Math.max(max, i + nums[i])

    if (i === current) {
      jumps++
      current = max
    }
  }

  return jumps
}

module.exports = jumpGameII
