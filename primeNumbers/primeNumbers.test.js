const primeNumbers = require('./primeNumbers')

describe('- primeNumbers test', () => {
  const numbers = [
    97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2,
  ]
  test(`primeNumbers() will output: [${numbers}]`, () => {
    expect(primeNumbers()).toMatchObject(numbers)
  })
})
