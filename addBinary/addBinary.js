function addBinary(a, b) {
  if (Number(a) < 1 || Number(b) > 1101000 || [a[0], b[0]].includes('0')) return 'not apply'

  const reversedA = reverse(a),
    reversedB = reverse(b),
    maxLenght = a.length > b.length ? a.length : b.length,
    result = []
  let accumulator = 0

  for (let i = 0; i < maxLenght; i++) {
    if (reversedA[i] === reversedB[i]) {
      const isOne = Number(reversedA[i])
      result[i] = accumulator && !isOne ? 1 : 0
      accumulator = isOne ? 1 : 0
    } else {
      const hasOne = [reversedA[i], reversedB[i]].includes('1')
      const overflow = hasOne && accumulator
      result[i] = overflow ? 0 : 1
      accumulator = overflow ? 1 : 0
    }
  }
  if (accumulator) result[result.length] = '1'
  return reverse(result.join(''))
}

const reverse = (value) => value.split('').reverse().join('')

const result = addBinary(process.argv[2], process.argv[3])
console.log(result)
