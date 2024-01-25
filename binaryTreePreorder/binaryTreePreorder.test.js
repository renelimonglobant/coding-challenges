const binaryTreePreorder = require('./binaryTreePreorder')

describe('- BinaryTreePreorder test', () => {
  const tree = [30, 45, 5, 9, 7, 31, 45, 11, 2]
  it(`${JSON.stringify(tree)} traverse in the order: [30, 5, 2, 9, 7, 11, 45, 31, 45]`, () =>
    expect(binaryTreePreorder(tree)).toMatchObject([30, 5, 2, 9, 7, 11, 45, 31, 45]))

  const custom = true
  it(`custom tree as the suggested in the example traverse in the order: [1, 7, 2, 6, 5, 11, 9, 9, 5]`, () =>
    expect(binaryTreePreorder([], custom)).toMatchObject([1, 7, 2, 6, 5, 11, 9, 9, 5]))
})
