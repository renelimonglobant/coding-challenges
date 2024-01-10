// const reverse = require('./reverse/reverse')
// const result = reverse('123')
// console.log(result)

const threeSumClosest = require('./threeSumClosest/threeSumClosest')
const result = threeSumClosest([0, 0, 0], 1)
const result2 = threeSumClosest([-1, 2, 1, -4], 1)
console.log('input', [0, 0, 0], 1, 'output =', result)
console.log('input', [-1, 2, 1, -4], 1, 'output =', result2)
