const strings = ['a', 'b', 'c', 'd']

// pop

strings.pop() // O(1)
strings.pop() // O(1)

console.log(`Array after 2 pops: `, strings)

// push

strings.push('c') // O(1)
strings.push('d') // O(1)

console.log('Array after 2 pushes: ', strings)

// unshift

const newLength = strings.unshift('odd') // O(n)

console.log(`New array length: ${newLength} | Array after unshift(): `, strings)

// splice

const deteledElements = strings.splice(0, 1) // O(n)

console.log(
	`Deteled elements from the array: [${deteledElements}] | Array after splice(): `,
	strings
)

strings.splice(2, 0, 'alien') // O(n/2) --> O(n)

console.log('Another use for splice(): ', strings)
