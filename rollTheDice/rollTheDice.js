const rollThedice = (x, n, target) => {
  let combinationsCount = 0
  const generateCombinations = (diceRollsLeft, currentSum) => {
    if (diceRollsLeft === 0) {
      if (currentSum === target) combinationsCount++
      return
    }

    for (let i = 1; i <= n; i++) generateCombinations(diceRollsLeft - 1, currentSum + i)
  }

  generateCombinations(x, 0)
  return combinationsCount
}

module.exports = rollThedice
