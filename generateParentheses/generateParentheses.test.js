const generateParentheses = require('./generateParentheses')

describe('- generateParentheses test', () => {
  const r3 = ['((()))', '(()())', '(())()', '()(())', '()()()']
  test(`generateParentheses(3) will output: ${r3}`, () =>
    expect(generateParentheses(3)).toMatchObject(r3))
  const r2 = ['(())', '()()']
  test(`generateParentheses(2) will output: ${r2}`, () =>
    expect(generateParentheses(2)).toMatchObject(r2))
  const r1 = ['()']
  test(`generateParentheses(1) will output: ${r1}`, () =>
    expect(generateParentheses(1)).toMatchObject(r1))
})
