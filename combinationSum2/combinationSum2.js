const combinationSum2 = (candidates, target) => {
  const result = []

  const summation = (current, start, remaining) => {
    if (remaining === 0) {
      result.push([...current])
      return
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] <= remaining && (i <= start || candidates[i] !== candidates[i - 1])) {
        current.push(candidates[i])
        summation(current, i + 1, remaining - candidates[i])
        current.pop()
      }
    }
  }

  candidates.sort((a, b) => a - b)
  summation([], 0, target)
  return result
}

module.exports = combinationSum2
