const bubbleSort = (list) => {
  for (let i = 0; i < list.length; i++)
    for (let j = 0; j < list.length; j++)
      if (list[i] < list[j]) {
        const tmp = list[j]
        list[j] = list[i]
        list[i] = tmp
      }
  return list
}

module.exports = bubbleSort
