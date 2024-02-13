function reverse(str) {
	// input validation

	if (typeof str !== typeof 'string') {
		return 'Enter a valid string!'
	}
	if (str.length < 2) {
		return str
	}

	// in javascript, strings are essencially arrays, so you can directly iterate through them

	const strLength = str.length - 1
	let backwards = []

	for (let i = strLength; i >= 0; i--) {
		backwards.push(str[i])
	}

	return backwards.join('')
}

// cleaner version

function reverse2(str) {
	return str.split('').reverse().join('')
}

// cleaner cleaner version

const reverse3 = (str) => [...str].reverse().join('')

console.log(reverse('Hello, my name is Lucas Saymon!'))
console.log(reverse2('Hello, my name is Lucas Saymon!'))
console.log(reverse3('Hello, my name is Lucas Saymon!'))
