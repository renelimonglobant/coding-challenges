const countingValleys = (steps, path) => {
  const seaLevel = 0
  let currentLevel = 0
  let inValley = false
  let numValleys = 0
  for (let i = 0; i < steps; i++) {
    path[i] === 'U' ? currentLevel++ : currentLevel--

    if (currentLevel < seaLevel && !inValley) {
      inValley = true
      numValleys++
    } else if (currentLevel === seaLevel) inValley = false
  }
  return numValleys
}

module.exports = countingValleys
