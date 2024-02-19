const generateParentheses = (numPairs) => {
  const result = []
  const numParentheses = numPairs * 2

  const generator = (str, open, close) => {
    if (str.length === numParentheses) {
      result.push(str)
      return
    }
    if (open < numPairs) generator(str + '(', open + 1, close)
    if (close < open) generator(str + ')', open, close + 1)
  }

  generator('', 0, 0)
  return result
}

module.exports = generateParentheses
