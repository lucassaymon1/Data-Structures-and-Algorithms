// Oh no! notation

function nFactorialFunc(n){
  for(let i = 0; i < n; i++){
    nFactorialFunc(n-1)
    console.log("Oh no!")
  }
}

nFactorialFunc(5)

// O(n!) --> Factorial time complexity
// DON'T RUN THIS CODE!