function Summatory(num, currentSum = [], result = []) {
  if (num === 0) {
    result.push(currentSum.filter((n) => n !== 0))
    return
  }
  if (num >= 1) Summatory(num - 1, [...currentSum, 1], result)
  if (num >= 2) Summatory(num - 2, [...currentSum, 2], result)
}

function climStairs(nums) {
  const result = []
  Summatory(nums, [], result)
  console.log('input', nums, 'output:')

  result.forEach((suma) => {
    const labels = suma.map((sum) => `${sum} step${sum % 2 === 0 ? 's' : ''}`).join(' + ')
    console.log(labels)
  })
  return result
}

module.exports = climStairs
