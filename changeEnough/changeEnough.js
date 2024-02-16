const changeEnough = (amount, price) => {
  const moneys = [0.25, 0.1, 0.05, 0.01]
  let counter = 0
  for (let i = 0; i < amount.length; i++) counter = counter + moneys[i] * amount[i]
  return counter >= price
}

module.exports = changeEnough
