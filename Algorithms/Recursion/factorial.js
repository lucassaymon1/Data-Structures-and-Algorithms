// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  console.log(number);
  if (number === 2) {
    return number;
  }
  return findFactorialRecursive(number - 1) * number;
}

function findFactorialIterative(number) {
  //code here
  let factorial = number;
  for (let i = number - 1; i > 1; i--) {
    factorial *= i;
    console.log(factorial);
  }
  return factorial;
}

console.log("Recursive: ", findFactorialRecursive(6));
console.log("Iterative: ", findFactorialIterative(6));
