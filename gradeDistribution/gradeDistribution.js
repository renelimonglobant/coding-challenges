const gradeDistribution = (studentList) => {
  const distribution = { A: 0, B: 0, C: 0, D: 0, F: 0 }
  for (const student of studentList)
    switch (true) {
      case student.grade > 89:
        distribution.A++
        break
      case student.grade > 79:
        distribution.B++
        break
      case student.grade > 69:
        distribution.C++
        break
      case student.grade > 59:
        distribution.D++
        break
      default:
        distribution.F++
        break
    }

  return distribution
}

module.exports = gradeDistribution
