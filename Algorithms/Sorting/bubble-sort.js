const numbers = [99, 44, 87, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  //Code here
  let loops = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j + 1] < array[j]) {
        let holdingPointer = array[j];
        array[j] = array[j + 1];
        array[j + 1] = holdingPointer;
      }
    }
    loops++;
  }
  console.log(loops);
  return array;
}

console.log(numbers);
console.log(bubbleSort(numbers));
