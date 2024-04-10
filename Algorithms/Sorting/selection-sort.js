const numbers = [99, 44, 6, 87, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  //Code Here
  for (let i = 0; i < array.length; i++) {
    let minor = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minor]) {
        minor = j;
      }
    }
    let temp = array[i];
    array[i] = array[minor];
    array[minor] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));
