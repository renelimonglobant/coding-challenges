function searchInsert (list, target) {
    const numbers = list.split(',').map(Number)
    const newNumber = parseInt(target)
    for (let i = 0; i < numbers.length; i++)
        if (newNumber <= numbers[i]) return i
    return numbers.length
}

const result = searchInsert(process.argv[2], process.argv[3])
console.log('index ', result)
