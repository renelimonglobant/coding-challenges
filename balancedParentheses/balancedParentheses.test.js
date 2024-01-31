const balancedParentheses = require('./balancedParentheses')

describe('- BalancedParentheses test', () => {
  it(`'()' is valid`, () => expect(balancedParentheses('()')).toBe('valid'))
  it(`'(hello, world)' is valid`, () => expect(balancedParentheses('(hello, world)')).toBe('valid'))
  it(`'Random text (as this) is ok().' is valid`, () =>
    expect(balancedParentheses('Random text (as this) is ok().')).toBe('valid'))
  it(`')(' is invalid`, () => expect(balancedParentheses(')(')).toBe('invalid'))
  it(`'(Hello (,) world (!))' is valid`, () =>
    expect(balancedParentheses('(Hello (,) world (!))')).toBe('valid'))
  it(`')()(' is invalid`, () => expect(balancedParentheses(')()(')).toBe('invalid'))
  it(`'())(()' is invalid`, () => expect(balancedParentheses('())(()')).toBe('invalid'))
  it(`'Hello world' is invalid`, () => expect(balancedParentheses('Hello world')).toBe('invalid'))
})
