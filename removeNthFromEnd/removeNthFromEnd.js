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
    this.nthChildren = 0
  }

  append(value) {
    const node = new Node(value)
    this.nthChildren++
    if (!this.head) {
      this.head = node
      return
    }
    let current = this.head
    while (current.next) current = current.next
    current.next = node
  }

  deleteNthFromEnd(n) {
    if (this.nthChildren === 1) {
      this.head = null
      return
    }

    let current = this.head
    let i = 1
    while (current !== null && current.next !== null) {
      if (this.nthChildren - n === i) current.next = current.next.next
      else current = current.next
      i++
    }
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

const removeNthFromEnd = (list, n) => {
  const linkedList = new LinkedList()
  list.map((element) => linkedList.append(element))
  linkedList.deleteNthFromEnd(n)
  return linkedList.printToList()
}

module.exports = removeNthFromEnd
