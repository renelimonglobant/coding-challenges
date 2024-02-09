const findMostVisitedPages = require('./findMostVisitedPages')

describe('- findMostVisitedPages test', () => {
  const logData = [
    { url: '/home', userId: 'A' },
    { url: '/about', userId: 'B' },
    { url: '/products', userId: 'A' },
    { url: '/home', userId: 'C' },
    { url: '/contact', userId: 'B' },
    { url: '/products', userId: 'D' },
    { url: '/home', userId: 'A' },
    { url: '/home', userId: 'B' },
    { url: '/products', userId: 'A' },
  ]
  const result = ['/home', '/products', '/about', '/contact']
  test(`findMostVisitedPages(${JSON.stringify(logData)}) will output [ ${result} ]`, () =>
    expect(findMostVisitedPages(logData)).toMatchObject(result))
})
