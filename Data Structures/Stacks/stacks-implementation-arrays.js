class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

// -- WITH ARRAYS --
class Stack {
	constructor() {
		this.array = []
	}
	push(value) {
		this.array.push(value)
		return this
	}
	pop() {
		this.array.pop()
		return this
	}
	peek() {
		return this.array[this.array.length - 1]
	}
	isEmpty() {
		if (this.array.length > 0) {
			return false
		} else {
			return true
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
