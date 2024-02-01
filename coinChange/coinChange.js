const coinChange = (coins, amount) => {
  const combination = [...Array(amount + 1)].map((_, i) => (i === 0 ? 0 : amount + 1))
  const path = Array(amount + 1).fill([])

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      if (combination[i - coin] + 1 < combination[i]) {
        combination[i] = combination[i - coin] + 1
        path[i] = [...path[i - coin], coin]
      }
    }
  }

  //   console.log(path[amount])
  return combination[amount] === amount + 1 ? -1 : combination[amount]
}

module.exports = coinChange
