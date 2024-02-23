class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}
	insert(value) {
		const newNode = new Node(value)
		if (this.root === null) {
			this.root = newNode
			return this
		}
		let currentNode = this.root
		while (true) {
			if (value >= currentNode.value) {
				if (!currentNode.right) {
					currentNode.right = newNode
					return this
				}
				currentNode = currentNode.right
			} else {
				if (!currentNode.left) {
					currentNode.left = newNode
					return this
				}
				currentNode = currentNode.left
			}
		}
	}
	lookup(value) {
		if (!this.root) {
			return false
		}
		let currentNode = this.root
		while (currentNode) {
			if (value === currentNode.value) {
				return currentNode
			} else if (value > currentNode.value) {
				currentNode = currentNode.right
			} else {
				currentNode = currentNode.left
			}
		}
		return false
	}

	remove(value) {
		if (!this.root) {
			return false
		}
		let currentNode = this.root
		let parentNode = null
		while (currentNode) {
			if (value > currentNode.value) {
				parentNode = currentNode
				currentNode = currentNode.right
			} else if (value < currentNode.value) {
				parentNode = currentNode
				currentNode = currentNode.left
			} else if (currentNode.value === value) {
				// we have a match

				// Case 1: currentNode has no right child
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left
					} else if (currentNode.value > parentNode.value) {
						parentNode.right = currentNode.left
					} else if (currentNode.value < parentNode.value) {
						parentNode.left = currentNode.left
					}
				}
				// Case 2: currentNode has no left child
				else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left
					if (parentNode === null) {
						this.root = currentNode.right
					} else if (currentNode.value > parentNode.value) {
						parentNode.right = currentNode.right
					} else if (currentNode.value < parentNode.value) {
						parentNode.left = currentNode.right
					}
				}
				// Case 3: Oh boy...
				else {
					let leftmost = currentNode.right.left
					let leftmostParent = currentNode.right
					while (leftmost.left !== null) {
						leftmostParent = leftmost
						leftmost = leftmost.left
					}

					leftmostParent.left = leftmost.right
					leftmost.left = currentNode.left
					leftmost.right = currentNode.right

					if (parentNode !== null) {
						this.root = leftmost
					} else if (currentNode.value > parentNode.value) {
						parentNode.right = leftmost
					} else if (currentNode.value < parentNode.value) {
						parentNode.left = leftmost
					}
				}
				return true
			}
		}
		return false
	}
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log('Lookup: ', tree.lookup(4))
tree.remove(20)
tree.remove(4)
const print = JSON.stringify(traverse(tree.root))
console.log(print)
//     9
//  4     20
//1  6  15  170

function traverse(node) {
	const tree = { value: node.value }
	tree.left = node.left === null ? null : traverse(node.left)
	tree.right = node.right === null ? null : traverse(node.right)
	return tree
}
