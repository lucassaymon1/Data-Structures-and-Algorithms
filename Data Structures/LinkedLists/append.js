// implement the Linked List of 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class LinkedList {
	constructor(value) {
		;(this.head = {
			value: value,
			next: null
		}),
			(this.tail = this.head)
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

		console.log('tail: ', this.tail)
		console.log('head next: ', this.head.next)

		return this
	}
}

const linkedList = new LinkedList(10)
console.log(linkedList)

linkedList.append(5)
console.log(linkedList)

linkedList.append(16)
console.log(linkedList)

linkedList.append(27)
console.log(linkedList)

linkedList.append(30)
console.log(linkedList)
