// 2.a. Write a function called `findPairs` that takes an array of integers and a 
// number as input and returns an array of all pairs of integers in the input array whose
//  sum is equal to the input number.



function findPairs(arr, target) {
    const pairs = [];
  
    for (let i = 0; i < arr.length; i++) { //looping through the array from the index 0 
      for (let j = i + 1; j < arr.length; j++) { //looping through the array again by leaving the first number 
        if (arr[i] + arr[j] === target) { //if their sum is equal to the target ,it will push to the pairs variable
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  
    return pairs;
  }
  let ar  = [2,3,4,5,8,9];
   console.log(findPairs(ar,7));