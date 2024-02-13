// ES5 example

const boxes = [1, 2, 3, 4, 5];
const boxes2 = [1, 2, 3, 4, 5];

function conpressBoxesTwice(boxes, boxes2){
  boxes.forEach(function(firstBox){ // O(a)
    boxes2.forEach(function(secondBox){ // O(b)
      console.log(firstBox, secondBox);
    });
  });

}

(conpressBoxesTwice(boxes, boxes2));

// O(a * b) --> Quadratic time complexity