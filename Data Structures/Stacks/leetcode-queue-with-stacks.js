class MyQueue {
	constructor() {
		this.data = []
	}
	push(x) {
		this.data.push(x)
		return null
	}

	pop() {
		const peek = this.data[0]
		for (let i = 0; i < this.data.length - 1; i++) {
			this.data[i] = this.data[i + 1]
		}
		this.data.pop()
		return peek
	}

	peek() {
		return this.data[0]
	}

	empty() {
		const isEmpty = this.peek()
		if (isEmpty) return true
		else return false
	}
}

const myQueue = new MyQueue()
console.log(myQueue.push(1))
console.log(myQueue.push(2))
console.log(myQueue.push(3))
console.log(myQueue.push(4))
console.log(myQueue.pop())
console.log(myQueue.push(5))
console.log(myQueue.pop())
console.log(myQueue.pop())
console.log(myQueue.pop())
console.log(myQueue.pop())
