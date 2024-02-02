const base64 = require('./base64Encoding')

describe('- Base64 encoding and decoding test', () => {
  it(`base64.base64Encoding('hola') is 'aG9sYQAA'`, () => {
    expect(base64.base64Encoding('hola')).toBe('aG9sYQAA')
  })

  it(`base64.base64Decoding(aG9sYQAA) is 'hola'`, () => {
    expect(base64.base64Decoding('aG9sYQAA')).toBe('hola')
  })
})
