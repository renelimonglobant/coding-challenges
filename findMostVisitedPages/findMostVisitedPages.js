const findMostVisitedPages = (data) => {
  const results = {}
  const exists = (arr, item) => arr?.length && arr.includes(item)

  for (const item of data) {
    if (!results[item.url]) results[item.url] = []
    if (!exists(results[item.url], item.userId)) results[item.url].push(item.userId)
  }

  const ordered = Object.entries(results)
  return ordered.sort((a, b) => b[1].length - a[1].length).map(([url]) => url)
}

module.exports = findMostVisitedPages
