const climbStairs = require('./climbStairs')

test('ClimbStairs 2 will output: \n 1 step + 1 step \n 2 steps', () => {
  expect(climbStairs(2)).toMatchObject([[1, 1], [2]])
})

test('ClimbStairs 3 output ', () => {
  expect(climbStairs(3)).toMatchObject([
    [1, 1, 1],
    [1, 2],
    [2, 1],
  ])
})

test('ClimbStairs 4 output ', () => {
  expect(climbStairs(4)).toMatchObject([
    [1, 1, 1, 1],
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
    [2, 2],
  ])
})
