
// 1.b. Write a function called filterByLength that takes an array of strings and a 
// number as input and returns an array of all the strings in the input array 
// whose length is greater than or equal to the input number.

function filterByLength(arr, num) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= num) {
        result.push(arr[i]);
      }
    }
    return result;
  }
   let n = ["banana","orange","pineapple"];

   console.log(filterByLength(n,7));
  