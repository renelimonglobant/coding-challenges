function findKthLargest(nums, k) {
  k = nums.length - k

  function quickSelect(left, right) {
    const mid = Math.floor((left + right) / 2)
    const pivot = nums[mid]
    let idx = left
    ;[nums[mid], nums[right]] = [nums[right], nums[mid]]

    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        ;[nums[idx], nums[i]] = [nums[i], nums[idx]]
        idx++
      }
    }

    ;[nums[idx], nums[right]] = [nums[right], nums[idx]]

    if (idx > k) return quickSelect(left, idx - 1)
    else if (idx < k) return quickSelect(idx + 1, right)
    else return nums[idx]
  }

  return quickSelect(0, nums.length - 1)
}

module.exports = findKthLargest
