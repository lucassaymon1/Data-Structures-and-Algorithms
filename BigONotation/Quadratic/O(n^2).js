const boxes = [1, 2, 3, 4, 5];

function printAllBoxesThenPrintTheirSum(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes.forEach(function (firsBoxes) {
    boxes.forEach(function (secondBoxes) {
      console.log(firsBoxes + secondBoxes);
    });
  });
}

printAllBoxesThenPrintTheirSum(boxes);

// Rule #4: Drop Non Dominants
// O(n^2 + n) --> O(n^2) Quadratic time complexity
