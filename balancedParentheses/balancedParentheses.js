const balancedParentheses = (string) => {
  let cleanString = string.match(/[()]/g)?.join('') || ''
  if (cleanString.length % 2 !== 0) return 'invalid'
  let noEmpty = true
  while (noEmpty) {
    const subString = cleanString.replace('()', '')
    if (subString.length === 0) noEmpty = false
    if (subString.length < cleanString.length) cleanString = subString
    else return 'invalid'
  }
  return 'valid'
}

module.exports = balancedParentheses
