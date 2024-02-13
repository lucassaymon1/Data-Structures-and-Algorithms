// add a method reverse() to the linked list that reverses the entire list of nodes

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
		return this
	}
	prepend(value) {
		const newNode = {
			value: value,
			next: null
		}
		newNode.next = this.head
		this.head = newNode
		this.length++
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
	insert(index, value) {
		//Check for proper parameters;
		if (index >= this.length) {
			return this.append(value)
		}

		const newNode = {
			value: value,
			next: null
		}
		const leader = this.traverseToIndex(index - 1)
		const holdingPointer = leader.next
		leader.next = newNode
		newNode.next = holdingPointer
		this.length++
		return this.printList()
	}
	traverseToIndex(index) {
		//Check parameters
		let counter = 0
		let currentNode = this.head
		while (counter !== index) {
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}
	remove(index) {
		// Check Parameters
		const leader = this.traverseToIndex(index - 1)
		const unwantedNode = leader.next
		leader.next = unwantedNode.next
		this.length--
		return this.printList()
	}
	reverse() {
		let first = this.head
		let second = first.next
		this.tail = this.head
		// will iterate through the list and *reversing* the pointers
		// *first* will be changing its position and pointing to the element before till it becomes the last element of the old list, and the first of the new one
		while (second) {
			const temp = second.next
			second.next = first
			first = second
			second = temp
			// console.log("-- ITERATION --")
			// console.log("First: ", first)
			// console.log("Second: ", second)
			// console.log("Temp: ", temp)
		}
		// null the next element of the head, because it will become the tail
		this.head.next = null
		// now head is the element first that is on the beggining of the new list
		this.head = first
		// console.log(this.head)
		// console.log(this.tail)

		// my solution
		// //Code Here
		// let currentNode = this.head
		// let reversedList = []

		// // create a new array that will have the reversed order of the elements
		// for(let i = this.length-1; i >= 0; i--){
		//   reversedList[i] = currentNode.value
		//   currentNode = currentNode.next
		// }
		// currentNode = null

		// // starting a new linked list that will receive the reversed elements
		// this.head = {
		//   value: reversedList[0],
		//   next: null
		// }
		// this.tail = this.head
		// this.length = 1
		// for(let i = 1; i < reversedList.length; i++){
		//   // append each element of the reversed array to the new list
		//   this.append(reversedList[i])
		// }
		return this.printList()
	}
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.remove(2)
console.log('Before reverse: ', myLinkedList.printList())
console.log('After reverse: ', myLinkedList.reverse())
