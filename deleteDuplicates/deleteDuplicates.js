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

  removeDuplicates() {
    let current = this.head
    while (current !== null && current.next !== null)
      if (current.value === current.next.value) current.next = current.next.next
      else current = current.next
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

const deleteDuplicates = (list) => {
  const linkedList = new LinkedList()
  list.map((element) => linkedList.append(element))
  linkedList.removeDuplicates()
  return linkedList.printToList()
}

module.exports = deleteDuplicates
