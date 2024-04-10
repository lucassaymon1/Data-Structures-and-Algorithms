// Dynamic programming - Memoization

function memoizedAddTo80() {
  let cache = {};

  // if has a memoized response, returns it, if not, memoize new case and trigger the         function that will return the response
  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = addTo80(n);
      return cache[n];
    }
  };

  function addTo80(n) {
    console.log("long time...");
    return n + 80;
  }
}

const memoized = memoizedAddTo80();

console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(6));
console.log(memoized(5));
