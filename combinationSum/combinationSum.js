const encontrarDivisorExacto = (numero, divisorMaximo) => {
  for (let i = divisorMaximo; i >= 0; i--) if (numero * i === divisorMaximo) return i
  return null
}

const _combinationSum = (candidates, target) => {
  console.log(candidates, target)
  const result = []
  // look for equals to one element multiplication
  for (const candidate of candidates) {
    const n = encontrarDivisorExacto(candidate, target)
    if (n !== null) result.push(Array(n).fill(candidate))
  }

  const cleanCandidates = [...new Set(candidates.filter((i) => i > 0 && i < target))]
  // calculate different combinations here with cleanCandidates

  return result
}

const combinationSum = (candidates, target) => {
  const result = []

  const summation = (current, start, remaining) => {
    if (remaining === 0) {
      result.push([...current])
      return
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] <= remaining) {
        current.push(candidates[i])
        summation(current, i, remaining - candidates[i])
        current.pop()
      }
    }
  }

  summation([], 0, target)

  return result
}

module.exports = combinationSum
