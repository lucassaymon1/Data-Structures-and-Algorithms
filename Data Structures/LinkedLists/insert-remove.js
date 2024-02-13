// add a method insert() to the linked list that adds a node to the specified index.

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
		const newNode = {
			value: value,
			next: null
		}
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this.printList()
	}
	prepend(value) {
		const newNode = {
			value: value,
			next: null
		}
		newNode.next = this.head
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
		//Code here
		if (index >= this.length) {
			return this.append(value)
		} else if (index <= 0) {
			return this.prepend(value)
		}
		// const newNode = {
		//   value: value,
		//   next: null
		// }
		// let i = 0
		// let currentNode = this.head
		// let prv = this.head
		// let nxt = this.head.next
		// while (i <= index) {
		//   if (i === index) {
		//     newNode.next = currentNode.next
		//     prv.next = newNode
		//     this.length++
		//     break
		//   }
		//   if (i > 0) {
		//     prv = currentNode
		//   }
		//   currentNode = nxt
		//   nxt = nxt.next
		//   i++
		// }
		let currentNode = this.head
		for (let i = 0; i < index - 1; i++) {
			currentNode = currentNode.next
		}
		let prev = currentNode // element before the index (will point to our new node)
		let aft = currentNode.next // element on the index position (will be after our new node)

		const newNode = {
			value: value,
			next: aft
		}
		prev.next = newNode
		this.length++

		return this.printList()
	}

	remove(index) {
		let currentNode = this.head
		if (index <= 0) {
			this.head = this.head.next
			currentNode = null
			this.length--
			return this.printList()
		} else if (index > this.length - 1) {
			index = this.length - 1
		}

		for (let i = 0; i < index - 1; i++) {
			currentNode = currentNode.next
		}

		let unwantedNode = currentNode.next
		currentNode.next = unwantedNode.next

		if (index === this.length - 1) {
			this.tail = currentNode
		}
		this.length--
		return this.printList()
	}
}

let myLinkedList = new LinkedList(10)
console.log(myLinkedList.append(5))
console.log(myLinkedList.append(16))
console.log(myLinkedList.prepend(1))
console.log(myLinkedList.insert(2, 99))
console.log(myLinkedList.insert(20, 88))
console.log(myLinkedList.remove(2))
console.log(myLinkedList.remove(78))
console.log(myLinkedList.remove(0))
