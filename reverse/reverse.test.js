const reverse = require('./reverse')

test('Reverse 123 will output 321', () => {
  expect(reverse('123')).toBe(321)
})

test('Reverse -123 will output -321', () => {
  expect(reverse('-123')).toBe(-321)
})

test('Reverse 120 will output 21', () => {
  expect(reverse('120')).toBe(21)
})
