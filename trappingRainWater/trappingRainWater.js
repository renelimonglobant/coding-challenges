const trappingRainWater = (blocks) => {
  const n = blocks.length
  if (n < 3) return 0

  let xl = 0
  let xr = n - 1
  let maxLeft = 0
  let maxRight = 0
  let waterBlocks = 0

  while (xl < xr) {
    maxLeft = Math.max(maxLeft, blocks[xl])
    maxRight = Math.max(maxRight, blocks[xr])

    if (maxLeft < maxRight) {
      waterBlocks += maxLeft - blocks[xl]
      xl++
    } else {
      waterBlocks += maxRight - blocks[xr]
      xr--
    }
  }

  return waterBlocks
}

module.exports = trappingRainWater
