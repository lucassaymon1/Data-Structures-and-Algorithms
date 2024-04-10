const numbers = [99, 87, 44, 6, 2, 1, 5, 63, 87, 283, 4];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const half = array.length / 2;
  const left = array.slice(0, half);
  const right = array.slice(half);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // console.log("left right: ", left, right)
  const merged = [];
  let i = 0;
  let j = 0;
  while (left[i] && right[j]) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else if (right[j] < left[i]) {
      merged.push(right[j]);
      j++;
    }
  }
  if (!left[i]) {
    merged.push(...right.slice(j));
  } else {
    merged.push(...left.slice(i));
  }
  // console.log("merged: ", merged)
  return merged;
  // or
  // return merged.concat(left.slice(i)).concat(right.slice(j))
}

const answer = mergeSort(numbers);
console.log("sorted: ", answer);
