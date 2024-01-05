function permute(permutation) {
  const length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0)
  let k,
    p,
    i = 1

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i]
      p = permutation[i]
      permutation[i] = permutation[k]
      permutation[k] = p
      ++c[i]
      i = 1
      result.push(permutation.slice())
    } else {
      c[i] = 0
      ++i
    }
  }
  return result
}

const parseToArrayNumber = (value) => String(value).split('').map(Number)

function nextPermutation(permutation) {
  const numberspermutation = permute(JSON.parse(permutation))
  const orderedValues = [
    ...new Set(numberspermutation.map((number) => Number(number.join(''))).sort((a, b) => a - b)),
  ]
  const currentValue = Number(permutation.replace(/\D/g, ''))
  const currentIndex = orderedValues.findIndex((value) => value === currentValue)
  return parseToArrayNumber(
    orderedValues[currentIndex === orderedValues.length - 1 ? 0 : currentIndex + 1]
  )
}

const result = nextPermutation(process.argv[2])
console.log(result)
