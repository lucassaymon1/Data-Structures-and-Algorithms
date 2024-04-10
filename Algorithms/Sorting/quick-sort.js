const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 43];

function quickSort(array, left, right) {
  if (right <= left) {
    return;
  }
  const pivot = partition(array, left, right);
  quickSort(array, left, pivot - 1);
  quickSort(array, pivot + 1, right);
}

function partition(array, left, right) {
  return swap(array, left, right);
}

function swap(array, firstIndex, secondIndex) {
  let pivotIndex = secondIndex;
  let swapper = false;
  while (firstIndex !== secondIndex) {
    if (!swapper) {
      if (array[firstIndex] > array[pivotIndex]) {
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;

        secondIndex--;
        pivotIndex = firstIndex;
        swapper = true;
      } else {
        firstIndex++;
      }
    } else {
      if (array[secondIndex] < array[pivotIndex]) {
        let temp = array[secondIndex];
        array[secondIndex] = array[firstIndex];
        array[firstIndex] = temp;

        firstIndex++;
        pivotIndex = secondIndex;
        swapper = false;
      } else {
        secondIndex--;
      }
    }
  }
  return pivotIndex;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
