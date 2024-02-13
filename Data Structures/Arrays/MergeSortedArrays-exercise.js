// My solution

function mergeSortedArrays1(arr1, arr2) {
	const mergeSorted = []
	const length1 = arr1.length
	const length2 = arr2.length
	let i = 0,
		j = 0

	// iterate while are still items in the arrays
	while (i < length1 || j < length2) {
		// add to the new array the smallest of the two compared elements
		if (!arr2[j] || arr1[i] <= arr2[j]) {
			if (isNaN(arr1[i])) {
				return 'invalid element on the array'
			}
			mergeSorted.push(arr1[i])
			i++
		} else {
			if (isNaN(arr2[j])) {
				return 'invalid element on the array'
			}
			mergeSorted.push(arr2[j])
			j++
		}
	}

	return mergeSorted // n(a+b) solution. Linear time complexity.
}

// course solution

function mergeSortedArrays2(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
		return 'Enter two valid arrays.'
	}

	const mergeSorted = []
	let arrayItem1 = arr1[0]
	let arrayItem2 = arr2[0]
	let i = 1,
		j = 1

	// iterate while are still items in the arrays
	while (arrayItem1 || arrayItem2) {
		// add to the new array the smallest of the two compared elements
		if (!arrayItem2 || arrayItem1 <= arrayItem2) {
			if (isNaN(arrayItem1)) {
				return 'invalid element on the array'
			}
			mergeSorted.push(arrayItem1)
			arrayItem1 = arr1[i]
			i++
		} else {
			if (isNaN(arrayItem2)) {
				return 'invalid element on the array'
			}
			mergeSorted.push(arrayItem2)
			arrayItem2 = arr2[j]
			j++
		}
	}

	return mergeSorted // n(a+b) solution. Linear time complexity.
}

// although the 2 answers are equal when it comes to time complexity. the second answer is more understandable when it uses more referenced elements, and not indexes.

console.log(
	mergeSortedArrays1(
		[0, 3, 4, 31, 89, 100, 110, 1182],
		[3, 4, 6, 30, 35, 40, 57]
	)
)
