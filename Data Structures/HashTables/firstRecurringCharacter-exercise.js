//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// My first solution with time complexity of O(n)

function firstRecurringCharacter1(input) {
	if (!input.length) {
		return undefined
	}
	let recurringNumbers = {}

	for (let i = 0; i < input.length; i++) {
		const item = input[i]
		if (!recurringNumbers[item]) {
			recurringNumbers[item] = true
		} else {
			return item
		}
	}
	return undefined
}

// Second solution with O(n^2)

function firstRecurringCharacter2(input) {
	if (!input.length) {
		return undefined
	}

	let naiveIndex = input.length

	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < naiveIndex; j++) {
			if (input[i] === input[j]) {
				naiveIndex = j
				console.log('Found naive', input[naiveIndex])
				break
			}
		}
	}

	if (naiveIndex < input.length) return input[naiveIndex]
	else return undefined
}

console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter2([2, 3, 4, 5]))
console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter2([]))
