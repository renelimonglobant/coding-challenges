class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  print() {
    console.log(this.value)
  }
}

class BinaryTree {
  constructor() {
    this.root = null
    this.lastTraverse = []
  }

  insert(value) {
    this.root = this._insertarRecursivo(this.root, value)
  }

  _insertarRecursivo(node, value) {
    if (node === null) {
      return new Node(value)
    }

    if (value < node.value) {
      node.left = this._insertarRecursivo(node.left, value)
    } else if (value >= node.value) {
      node.right = this._insertarRecursivo(node.right, value)
    }
    return node
  }

  preOrder() {
    this._preOrdenRecursivo(this.root)
  }

  _preOrdenRecursivo(node) {
    if (node) {
      this.lastTraverse.push(node.value)
      this._preOrdenRecursivo(node.left)
      this._preOrdenRecursivo(node.right)
    }
  }
}

const binaryTreePreorder = (treenodes, custom) => {
  let tree = new BinaryTree()
  if (custom) {
    tree.insert(1)
    tree.root.left = new Node(7)
    tree.root.left.left = new Node(2)
    tree.root.left.right = new Node(6)
    tree.root.left.right.left = new Node(5)
    tree.root.left.right.right = new Node(11)
    tree.root.right = new Node(9)
    tree.root.right.right = new Node(9)
    tree.root.right.right.left = new Node(5)
  } else {
    treenodes.map((node) => tree.insert(node))
  }
  tree.preOrder()
  return tree.lastTraverse
}

module.exports = binaryTreePreorder
