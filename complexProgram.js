File Name: complexProgram.js

/**
 * Complex Program in JavaScript
 * Description: This program demonstrates a complex algorithm for finding the smallest prime factor of a given number.
 * This involves advanced techniques for prime factorization, including memoization and dynamic programming.
 */

// Function to calculate the smallest prime factor of a number
function calculateSmallestPrimeFactor(num) {
  if (num < 2) return null; // Invalid input
  if (num < 4) return num;  // Smallest prime factors for 2 and 3
  
  // Use memoization to store previously calculated factors
  const memo = new Array(num + 1).fill(null);
  memo[0] = 0;
  memo[1] = 1;
  
  // Calculate prime factors using dynamic programming
  for (let i = 2; i <= num; i++) {
    if (memo[i] === null) { // Not yet calculated
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          memo[i] = memo[j] + memo[i / j];
          break;
        }
      }
      if (isPrime) {
        memo[i] = i;
      }
    }
  }
  
  return memo[num];
}

// Example usage
const testNumber = 235895;  // Random test number
const smallestPrimeFactor = calculateSmallestPrimeFactor(testNumber);

console.log(`The smallest prime factor of ${testNumber} is: ${smallestPrimeFactor}`);
console.log("Execution completed.");