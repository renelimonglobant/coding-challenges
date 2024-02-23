const multiplyStrings = require('./multiplyStrings')

describe('- multiplyStrings test', () => {
  test(`multiplyStrings('2', '3') will output: 6`, () => expect(multiplyStrings('2', '3')).toBe(6))
  test(`multiplyStrings('123', '456') will output: 56088`, () =>
    expect(multiplyStrings('123', '456')).toBe(56088))
})
