const threeSumClosest = require('./threeSumClosest')

test('Input [ 0, 0, 0 ], 1 will output = 0', () => {
  expect(threeSumClosest([0, 0, 0], 1)).toBe(0)
})

test('Input [ -1, 2, 1, -4 ], 1 will output = 2', () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2)
})
