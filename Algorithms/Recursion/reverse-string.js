function reverseString(str) {
  // O(n)
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log("Iterative: ", reverseString("yoyo master"));

function reverseStringRecursive(str) {
  // O(n)
  if (str.length <= 1) return str;

  return str[str.length - 1] + reverseStringRecursive(str.slice(0, -1));
}

console.log("Recursive: ", reverseStringRecursive("yoyo master"));
