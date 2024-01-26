const mergeSortedArray = (array1, array2, m, n) => {
  if (n === 0) return

  const final = []
  let i = 0,
    i1 = 0,
    i2 = 0
  while (i < m + n) {
    if (array1[i1] !== 0 && array1[i1] < array2[i2]) {
      final[i] = array1[i1]
      i1++
    } else {
      final[i] = array2[i2]
      i2++
    }
    i++
  }
  // make mutable
  for (let j = 0; j < final.length; j++) array1[j] = final[j]
}

module.exports = mergeSortedArray
