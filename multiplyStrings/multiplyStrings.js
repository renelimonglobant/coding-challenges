const multiplyStrings = (num1, num2) => {
  const getDigit = (n) => {
    switch (n) {
      case '0':
        return 0
      case '1':
        return 1
      case '2':
        return 2
      case '3':
        return 3
      case '4':
        return 4
      case '5':
        return 5
      case '6':
        return 6
      case '7':
        return 7
      case '8':
        return 8
      default:
        return 9
    }
  }
  const getNumber = (n) => {
    let pow = 0,
      number = 0
    for (let i = n.length - 1; i >= 0; i--) number += getDigit(n[i]) * Math.pow(10, pow++)
    return number
  }

  return getNumber(num1) * getNumber(num2)
}

module.exports = multiplyStrings
