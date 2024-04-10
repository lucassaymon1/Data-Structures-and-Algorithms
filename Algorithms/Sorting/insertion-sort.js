const numbers = [99, 44, 87, 6, 2, 1, 5, 63, 87, 283, 4, 0, 287];

// function insertionSort(array) {
//    //Code Here
//   const length = array.length
//   for(let i = 0; i < length; i++){
//     let item = array[i]
//     for(let j = i-1; j >= 0; j--){
//       if(item < array[j]) {
//         array[j+1] = array[j]
//         array[j] = item
//       }
//       else {
//         break
//       }
//     }
//   }
//   return array
// }

// with while loop:

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let j = i - 1;
    let temp = array[i];
    while (temp < array[j] && j >= 0) {
      array[j + 1] = array[j];
      array[j] = temp;
      j--;
    }
  }
  return array;
}

// or with JS functions:

// function insertionSort(array){
//   const length = array.length
//   for(let i = 0; i < length; i++){
//     if(array[i] < array[0]){
//       array.unshift(array.splice(i, 1)[0]) // inserts spliced element at the first position
//     }
//     else{
//       for(let j = 1; j < i; j++){
//         if(array[i] > array[j-1] && array[i] <= array[j]){
//           array.splice(j, 0, array.splice(i, 1)[0]) // insert to j, element spliced at i
//         }
//       }
//     }
//   }
//   return array
// }

console.log(insertionSort(numbers));
