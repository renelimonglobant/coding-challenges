function mergeIntervals(intervals) {
  const intervalsArray = JSON.parse(intervals).sort((a, b) => a[0] - b[0])
  return intervalsArray.reduce((acc, currentInterval) => {
    const prevInterval = acc[acc.length - 1]
    if (prevInterval !== undefined && currentInterval[0] <= prevInterval[1]) {
      prevInterval[1] = Math.max(prevInterval[1], currentInterval[1])
      return acc
    } else return [...acc, currentInterval]
  }, [])
}

const result = mergeIntervals(process.argv[2])
console.log(result)
