/*
function spiralOrder(matrix) {
  let i = 0,
    j = 0,
    borderX = matrix[0].length,
    borderY = matrix.length
  let res = []
  console.log(matrix)
  while (i < matrix[0].length) {
    console.log(matrix[j])
    // console.log(matrix[0][i])
    console.log(matrix[j][i].slice(0, 1))
    // res.push(matrix[j][i].slice(0, 1))
    // res[i] = matrix[j].slice(0, -1)
    // while (j < borderY) {
    //   res.push(matrix[j][i])
    //   j++
    // }
    // j = 0
    // borderY = borderY - 1
    i++
  }
  return res
}
*/

const notZero = (value) => value > 0
function spiralOrder(matrix) {
  //   console.log(matrix)
  const result = []
  while (matrix.length > 0) {
    result.push(...matrix.shift())
    for (let i = 0; i < matrix.length; i++)
      notZero(matrix[i].length) && result.push(matrix[i].pop())
    notZero(matrix.length) && result.push(...matrix.pop().reverse())
    for (let i = matrix.length - 1; i >= 0; i--)
      notZero(matrix[i].length) && result.push(matrix[i].shift())
  }
  return result
}

module.exports = spiralOrder
