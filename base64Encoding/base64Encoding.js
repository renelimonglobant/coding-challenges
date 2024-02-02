const base64Charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

const base64Encoding = (str) => {
  let result = ''

  for (let i = 0; i < str.length; i += 3) {
    const chunk = str.slice(i, i + 3)
    let binaryChunk = ''

    for (let j = 0; j < chunk.length; j++) {
      binaryChunk += chunk[j].charCodeAt(0).toString(2).padStart(8, '0')
    }

    while (binaryChunk.length < 24) {
      binaryChunk += '00000000'
    }

    const base64Indexes = [
      parseInt(binaryChunk.slice(0, 6), 2),
      parseInt(binaryChunk.slice(6, 12), 2),
      parseInt(binaryChunk.slice(12, 18), 2),
      parseInt(binaryChunk.slice(18, 24), 2),
    ]

    for (const index of base64Indexes) {
      result += base64Charset[index]
    }
  }

  return result
}

function base64Decoding(base64Str) {
  let binaryResult = ''

  for (let i = 0; i < base64Str.length; i++) {
    const base64Char = base64Str[i]
    const base64Index = base64Charset.indexOf(base64Char)

    if (base64Index !== -1) {
      binaryResult += base64Index.toString(2).padStart(6, '0')
    }
  }

  let result = ''

  for (let i = 0; i < binaryResult.length; i += 8) {
    result += String.fromCharCode(parseInt(binaryResult.slice(i, i + 8), 2))
  }

  return result.replace(/\u0000/g, '')
}

module.exports = { base64Encoding, base64Decoding }
