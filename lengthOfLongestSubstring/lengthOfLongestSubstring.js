const lengthOfLongestSubstring = (s) => {
  const substrings = []
  let characters = [],
    j = 0
  for (const char of s) {
    if (characters.includes(char)) {
      j++
      characters = []
    }
    characters.push(char)
    substrings[j] = (substrings[j] || '') + char
  }
  return [...substrings].sort((a, b) => b.length - a.length)[0].length
}

module.exports = lengthOfLongestSubstring
