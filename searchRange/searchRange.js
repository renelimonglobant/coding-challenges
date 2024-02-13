const searchRange = (nums, target) => {
  let start = -1
  let end = -1

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    if (nums[middle] === target) {
      start = middle
      end = middle

      while (start > 0 && nums[start - 1] === target) start--
      while (end < nums.length - 1 && nums[end + 1] === target) end++

      left = right
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return [start, end]
}

module.exports = searchRange
