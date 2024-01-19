class Node {
  constructor(obj) {
    this.value = obj.value
    this.name = obj.name
    this.next = null
  }

  printName() {
    console.log(this.value, this.name)
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(objNode) {
    const newNode = new Node(objNode)

    if (!this.head || objNode.value > this.head.value) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head

      while (current.next && objNode.value < current.next.value) {
        current = current.next
      }

      newNode.next = current.next
      current.next = newNode
    }
  }

  printToStringList() {
    let current = this.head
    const arrayList = []
    while (current) {
      arrayList.push(...Array(current.value).fill(current.name))
      current = current.next
    }
    return arrayList.join('')
  }
}

const sortCharsByFrequency = (list) => {
  const counter = {}
  for (const element of list) counter[element] = counter[element] ? counter[element] + 1 : 1
  const linkedList = new LinkedList()
  for (const char in counter) linkedList.append({ name: char, value: counter[char] })
  // console.log(counter)
  // return linkedList.printToList()
  return linkedList.printToStringList()
}

module.exports = sortCharsByFrequency
