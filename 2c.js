//2c.Write a function called `findNthLargest` that takes an array of numbers and a number n 
//as input and returns the nth largest number in the array.

function findNthLargest(array,number){
    let newArr = array.sort((a,b) => b-a);
    return newArr[number-1];
}

let a = [2,3,5,6,7,3];
console.log(findNthLargest(a,2));