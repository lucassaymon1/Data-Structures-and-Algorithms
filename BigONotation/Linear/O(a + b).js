// ES5 example

function conpressBoxesTwice(boxes, boxes2){
  boxes.forEach(function(box){ // O(a)
    console.log(box);
  });

  boxes2.forEach(function(box){ // O(b)
    console.log(box);
  });
}


// Rule #3: Different terms for inputs
// O(a + b) --> Linear time complexity