// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

// going through first solution in mind, wondering for nested loops

const array1 = ['a', 'b', 'c', 'd']
const array2 = ['z', 'y', 'b']

// loop through first array and for each element, loop through the second array, then verify if the element of the first array is equal to the element of the second. if it is, return true, if not, return false.

function containsCommonItemBad(arr1, arr2){
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]){
        return true
      }
    }
  }
  return false
}

console.log(containsCommonItemBad(array1, array2))

// not a good solution --> O(a*b), quadratic time complexity

// ------- with hash tabels -------

// make a hash map (map an array into a new object) with array 1 and compare if it has equal elements to array 2
// loop throuth array 1 and create an object where properties are equal to items in array 1.
// then loop through second array and check for each element if it exists on created object.

function containsCommonItemGood(arr1, arr2){
  let map = {}
  for(let i = 0; i< arr1.length; i++){
    if(!map[arr1[i]]){
      const item = arr1[i]
      map[item] = true
    }
  }

  console.log("created object from arr1: ", map)

  for(let j = 0; j < arr2.length; j++){
    if(map[arr2[j]]){
      return true
    }
  }

  return false
}

console.log(containsCommonItemGood(array1, array2))

// A fair solution with O(a+b) time complexity due to separate loops and hash tables
// Has the advantage of reducing time complexity by taking more memory quantity. (O(n) memory usage.)

// ------- with js functions -------

// comment if you would do something to improve last example, one alternative, is to use javascript functions to make the solution more readeble.

// comment your thoughts of examples of inputs that would break this solution, and how you would prevent it from happen.

function containsCommonItensShort(arr1, arr2){
  return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonItensShort(array1, array2))