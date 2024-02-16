class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.length = 0
	}
	peek() {
		return this.first
	}
	enqueue(value) {
		const newNode = new Node(value)
		if (!this.last) {
			this.last = newNode
			this.first = newNode
			this.length++
			return this
		}
		this.last.next = newNode
		this.last = newNode
		this.length++
		return this
	}
	dequeue() {
		// const holdingPointer = this.first
		if (!this.first) {
			return this
		}
		if (this.first === this.last) {
			this.last = null
		}
		this.first = this.first.next
		this.length--
		return this
	}
	//isEmpty;
}

const myQueue = new Queue()

console.log(myQueue.enqueue('Joy'))
console.log(myQueue.enqueue('Matt'))
console.log(myQueue.enqueue('Pavel'))
console.log(myQueue.enqueue('Samir'))
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.enqueue('Joy'))
console.log(myQueue.enqueue('Matt'))
console.log(myQueue.enqueue('Pavel'))
console.log(myQueue.enqueue('Samir'))

//Joy
//Matt
//Pavel
//Samir
