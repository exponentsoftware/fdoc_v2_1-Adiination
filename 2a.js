// 2.a. Write a function called `findPairs` that takes an array of integers and a 
// number as input and returns an array of all pairs of integers in the input array whose
//  sum is equal to the input number.



function findPairs(arr, target) {
    const pairs = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  
    return pairs;
  }
  let ar  = [2,3,4,5,8,9];
   console.log(findPairs(ar,7));