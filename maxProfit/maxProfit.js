const maxProfit = (list) => {
  let iProfit,
    maxProfit = 0

  for (let i = 1; i < list.length; i++)
    if (list[i] - list[i - 1] > maxProfit) {
      maxProfit = list[i] - list[i - 1]
      iProfit = i
    }
  return iProfit
    ? `Buy at $${list[iProfit - 1]}, sell at $${list[iProfit]}. Profit: $${maxProfit.toFixed(2)}`
    : 'Don’t buy, profit can’t be made'
}

module.exports = maxProfit
