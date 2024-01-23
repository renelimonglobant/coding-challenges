const gradeDistribution = require('./gradeDistribution')

describe('- GradeDistribution test', () => {
  const grade = [
    { name: 'John', grade: 85 },
    { name: 'Emma', grade: 95 },
    { name: 'Michael', grade: 72 },
    { name: 'Sophia', grade: 68 },
    { name: 'Ryan', grade: 90 },
  ]
  const result = { A: 2, B: 1, C: 1, D: 1, F: 0 }
  it(`${JSON.stringify(grade)} shows: ${JSON.stringify(result)}`, () => {
    expect(gradeDistribution(grade)).toMatchObject(result)
  })
})
