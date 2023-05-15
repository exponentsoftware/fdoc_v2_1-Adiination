// 1.c. Write a function called sumOfPrimes that takes a number as input and 
// returns the sum of all prime numbers less than or equal
//  to the input number.

function sumOfPrimes(number) {
    let sum = 0;
  
    // Helper function to check if a number is prime
    function isPrime(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    // Iterate from 2 to the input number
    for (let i = 2; i <= number; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  console.log(sumOfPrimes(10));

  

