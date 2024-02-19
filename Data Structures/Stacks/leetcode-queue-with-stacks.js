class MyQueue {
	constructor() {
		this.first = []
		this.last = []
	}
	enqueue(x) {
		const length = this.first.length
		for (let i = 0; i < length; i++) {
			this.last.push(this.first.pop())
		}
		this.last.push(x)
		return null
	}

	dequeue() {
		const length = this.last.length
		for (let i = 0; i < length; i++) {
			this.first.push(this.last.pop())
		}
		return this.first.pop()
	}

	peek() {
		if (this.first.length > 0) {
			return this.first[this.first.length - 1]
		} else {
			return this.last[0]
		}
	}

	empty() {
		if (this.first.length > 0 || this.last.length > 0) {
			return false
		} else {
			return true
		}
	}
}

const myQueue = new MyQueue()

console.log(myQueue.peek())
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
console.log(myQueue.peek())
console.log('========')
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log('========')
console.log(myQueue.peek())
