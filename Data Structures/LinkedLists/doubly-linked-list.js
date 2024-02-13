// Implement Doubly Linked List and its methods.

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null
		}
		this.tail = this.head
		this.length = 1
	}

	append(value) {
		const newNode = {
			value: value,
			next: null,
			prev: null
		}
		this.tail.next = newNode
		newNode.prev = this.tail
		this.tail = newNode
		this.length++

		return this.printList()
	}

	prepend(value) {
		const newNode = {
			value: value,
			next: null,
			prev: null
		}
		newNode.next = this.head
		this.head.prev = newNode
		this.head = newNode
		this.length++
		return this.printList()
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

	insert(index, value) {
		// entry treatments
		if (index >= this.length) {
			return this.append(value)
		} else if (index <= 0) {
			return this.prepend(value)
		}
		const currentNode = this.traverseToIndex(index)

		let prev = currentNode // element before the index (will point to our new node)
		let aft = currentNode.next // element on the index position (will be after our new node)

		const newNode = {
			value: value,
			next: aft,
			prev: prev
		}
		aft.prev = newNode
		prev.next = newNode
		this.length++

		return this.printList()
	}

	remove(index) {
		if (index <= 0) {
			this.head = this.head.next
			this.length--
			return this.printList()
		} else if (index >= this.length - 1) {
			this.tail = this.tail.prev
			this.tail.next = null
			this.length--
			return this.printList()
		}

		const currentNode = this.traverseToIndex(index)

		let unwantedNode = currentNode.next
		let afterUnwanted = unwantedNode.next
		currentNode.next = afterUnwanted
		if (afterUnwanted) {
			afterUnwanted.prev = currentNode
		}

		if (index === this.length - 1) {
			this.tail = currentNode
		}
		this.length--
		return this.printList()
	}

	traverseToIndex(index) {
		const middle = Math.floor(this.length / 2)
		let currentNode = null

		if (index > middle) {
			currentNode = this.tail
			for (let i = 0; i < this.length - index; i++) {
				currentNode = currentNode.prev
			}
		} else {
			currentNode = this.head
			for (let i = 0; i < index - 1; i++) {
				currentNode = currentNode.next
			}
		}
		return currentNode
	}
}

let myLinkedList = new DoublyLinkedList(10)
console.log(myLinkedList.append(5))
console.log(myLinkedList.append(16))
console.log(myLinkedList.prepend(1))
console.log(myLinkedList.insert(2, 33))
console.log(myLinkedList.insert(4, 88))
console.log(myLinkedList.remove(1))
console.log(myLinkedList.remove(19))
console.log(myLinkedList.insert(0, 45))
