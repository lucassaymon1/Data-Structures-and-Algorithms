// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

function memoizedFibonacci() {
  let cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = fibonacci(n);
      return cache[n];
    }
  };
  function fibonacci(n) {
    console.log("loong time...");
    if (n < 2) {
      return n;
    }
    return dynamicFib(n - 1) + dynamicFib(n - 2);
  }
}

function fibonacciBottomUp() {
  let answer = [0, 1];

  return (n) => {
    if (answer[n]) {
      return answer[n];
    } else {
      bottomUpFib(n);
      return answer[n];
    }
  };
  function bottomUpFib(n) {
    for (let i = answer.length - 1; i <= n; i++) {
      console.log("loong time...");
      answer.push(answer[i] + answer[i - 1]);
    }
    return answer[n];
  }
}

const dynamicFib = memoizedFibonacci();
const dynamicFib2 = fibonacciBottomUp();

console.log(dynamicFib(6));
console.log(dynamicFib(6));
console.log(dynamicFib(7));

console.log("BottomUp: ", dynamicFib2(6));
console.log("BottomUp: ", dynamicFib2(6));
console.log("BottomUp: ", dynamicFib2(7));
