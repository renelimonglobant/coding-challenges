class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }

  printName() {
    console.log(this.value)
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      return
    }
    let current = this.head
    while (current.next) current = current.next
    current.next = node
  }

  swapEven() {
    if (this.head === null || this.head.next === null) return

    const tmpHead = new Node(null)
    tmpHead.next = this.head
    let current = tmpHead

    while (current?.next && current?.next?.next) {
      const firstNode = current.next
      const secondNode = current.next.next
      const restOfList = secondNode.next

      current.next = secondNode
      secondNode.next = firstNode
      firstNode.next = restOfList

      current = firstNode
    }
    this.head = tmpHead.next
  }

  printToList() {
    let current = this.head
    const arrayList = []
    while (current) {
      arrayList.push(current.value)
      current = current.next
    }
    return arrayList
  }
}

const swapPairs = (list) => {
  const linkedList = new LinkedList()
  list.map((element) => linkedList.append(element))
  linkedList.swapEven()
  return linkedList.printToList()
}

module.exports = swapPairs
