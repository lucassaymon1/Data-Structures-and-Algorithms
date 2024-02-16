// -- WITH LINKED LISTS --

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
		this.top = null
		this.bottom = null
		this.length = 0
	}

	push(value) {
		const newNode = new Node(value)
		if (!this.top) {
			this.bottom = newNode
		}

		const holdingPointer = this.top
		this.top = newNode
		this.top.next = holdingPointer
		this.length++

		return this
	}

	peek() {
		return this.top
	}

	pop() {
		if (!this.top) {
			return null
		} else if (this.top === this.bottom) {
			this.bottom = null
		}
		this.top = this.top.next
		this.length--
		return this
	}

	isEmpty() {
		if (this.length === 0) {
			return true
		} else {
			return false
		}
	}
}

const myStack = new Stack()
console.log(myStack.push(2))
console.log(myStack.push(5))
console.log(myStack.push(8))
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.isEmpty())
//Discord
//ZTM
//google
