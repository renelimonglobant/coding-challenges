const searchInRotatedSortedArray = (nums, target) => {
  // this code is O(log(n)) complexity
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    console.log('floor', middle, start, '+', end)

    if (nums[middle] === target) return middle

    if (nums[start] <= nums[middle]) {
      if (target >= nums[start] && target < nums[middle]) {
        end = middle - 1
      } else {
        start = middle + 1
      }
    } else {
      if (target > nums[middle] && target <= nums[end]) {
        start = middle + 1
      } else {
        end = middle - 1
      }
    }
  }

  return -1
  // this code is O(n) complexity, it's not right at all even it solves the problem
  /*
    for (let i = 0; i < nums.length; i++) if (nums[i] === target) return i
    return -1
  */
}

module.exports = searchInRotatedSortedArray
