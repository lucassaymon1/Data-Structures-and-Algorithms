// 1 --> 10 --> 5 --> 16

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head
		this.length = 1
	}
	append(value) {
		const newNode = new Node(value)
		console.log(newNode)
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}

	prepend(value) {
		const newNode = new Node(value)
		newNode.next = this.head
		this.head = newNode
		this.length++
		console.log('Head next: ', this.head.next)
		return this
	}

	printList() {
		const array = []
		let currentNode = this.head

		while (currentNode !== null) {
			array.push(currentNode.value)
			currentNode = currentNode.next
		}
		return array
	}
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
console.log(myLinkedList.printList())
