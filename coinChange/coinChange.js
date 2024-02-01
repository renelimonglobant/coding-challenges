const coinChange = (coins, amount) => {
  const combination = Array(amount + 1).fill(amount + 1)
  const path = Array(amount + 1).fill([])
  combination[0] = 0

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      if (combination[i - coin] + 1 < combination[i]) {
        combination[i] = combination[i - coin] + 1
        path[i] = [...path[i - coin], coin]
      }
    }
  }

  return combination[amount] === amount + 1 ? -1 : combination[amount]
}

module.exports = coinChange
