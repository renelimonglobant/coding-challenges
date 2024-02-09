const longestPalindrome = (s) => {
  const isPalindrome = (substring) => substring === substring.split('').reverse().join('')

  let theLongest = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.slice(i, j)
      if (isPalindrome(substring) && substring.length > theLongest.length) {
        theLongest = substring
      }
    }
  }
  return theLongest
}

module.exports = longestPalindrome
