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
		while (currentNode) {
			if (value > currentNode.value) {
				currentNode = currentNode.right
			} else if (value < currentNode.value) {
				currentNode = currentNode.left
			} else {
				const holdingPointer = currentNode
				while (currentNode) {
					if (currentNode.right) {
						currentNode = currentNode.right
					} else {
					}
				}
			}
		}
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
const print = JSON.stringify(traverse(tree.root))
console.log(print)
// tree.remove(170);
// console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
	const tree = { value: node.value }
	tree.left = node.left === null ? null : traverse(node.left)
	tree.right = node.right === null ? null : traverse(node.right)
	return tree
}
