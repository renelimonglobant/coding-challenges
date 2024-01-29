const minimumOperationsArray = (numbers) => {
  const repetitions = (list, element) => list.filter((el) => el === element).length
  const deleteNTimes = (list, n, times) => {
    let nRepetitions = 0
    return list.reduce((acc, el) => {
      el === n && nRepetitions < times ? nRepetitions++ : acc.push(el)
      return acc
    }, [])
  }
  let tmpNumbers = numbers
  let moreAvailable = true
  let timesReducing = 0

  while (moreAvailable) {
    const nTimes = repetitions(tmpNumbers, tmpNumbers[0])
    if (nTimes >= 2) {
      tmpNumbers = deleteNTimes(tmpNumbers, tmpNumbers[0], nTimes >= 3 && nTimes !== 4 ? 3 : 2)
      timesReducing++
    } else moreAvailable = false
  }
  return tmpNumbers.length ? -1 : timesReducing
}

module.exports = minimumOperationsArray
