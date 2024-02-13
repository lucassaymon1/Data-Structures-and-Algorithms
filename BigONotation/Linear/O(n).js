// const nemo = ['nemo']

// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'niguel', 'squirt', 'darla', 'hank']

const oceanSize = 25 // O(1)
const oceanHalf = Math.floor(oceanSize/2) // O(1)

const ocean = new Array(oceanSize).fill('water') // O(1)
ocean.splice(oceanHalf, 0, 'nemo') // O(1)

const findNemo = (array) => { // O(1)
  for(let i = 0; i < array.length; i++){ // O(n)
    if(array[i] === 'nemo'){ // O(n)
      console.log('FOUND NEMO!') // O(n)
      break
    }
    else{
      console.log('running')
      
    }
  }
}

findNemo(ocean) // O(1)

// Rule #1: Worst Case
// Rule #2: remove constants

// O(3n + 5) --> O(n) --> Linear time complexity