const primeNumbers = () => {
  const isPrime = (number) => {
    if (number <= 1) return false
    const steps = Array.from({ length: Math.floor(Math.sqrt(number)) - 1 }, (_, i) => i + 2)
    return !steps.find((step) => number % step === 0)
  }

  const numbers = Array.from({ length: 100 }, (_, index) => 100 - index)
  return numbers.filter((n) => isPrime(n))
}

module.exports = primeNumbers
