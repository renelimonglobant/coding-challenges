function reverse(a) {
  const reversed = a[0] === '-' ? '-' + reverseStringNumber(a.substring(1)) : reverseStringNumber(a)
  if (Number(reversed).toString(2).length > 32) return 0
  return Number(reversed)
}

const reverseStringNumber = (value) => value.split('').reverse().join('').replace(/^0+/, '')

// for console debugging
// const result = reverse(process.argv[2])
// console.log(result)

module.exports = reverse
