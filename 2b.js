// 2.b. Write a function called `findMissingNumber` that takes an array of integers from 
// 1 to n with one number missing and returns the missing number

function findMissingNumber(numbers) {
    const n = numbers.length + 1; // n is the expected length of the array (including the missing number)
    const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0); //  the sum of the numbers in the array
    const expectedSum = (n * (n + 1)) / 2; // calculate the sum of integers from 1 to n using the formula (n * (n + 1)) / 2
    const missingNumber = expectedSum - sumOfNumbers; 
    
    return missingNumber;
  }
  
  const array = [1, 2, 4, 5, 6]; 
  console.log(findMissingNumber(array)); 
  


