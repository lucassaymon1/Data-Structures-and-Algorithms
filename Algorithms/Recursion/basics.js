let counter = 0;
function inception() {
  console.log(counter);
  // base case
  if (counter > 3) {
    return "Done!";
  }
  counter++;
  // recursive case
  return inception();
}
console.log(inception());

// 1. identify the base case
// 2. identify de recursive case
// 3. get closer and closer, then return when needed. Usually you'll have two returns
