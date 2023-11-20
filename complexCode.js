/**
 * Filename: complexCode.js
 * 
 * Description: This code demonstrates a complex and sophisticated JavaScript implementation
 *              of the Sieve of Eratosthenes algorithm for finding prime numbers.
 *              It generates prime numbers up to a given limit and provides various utility functions.
 * 
 * Dependencies: None
 */

// PrimeGenerator class to generate prime numbers
class PrimeGenerator {
  constructor(limit) {
    this.limit = limit;
    this.primes = [];
    this.sieve = new Array(limit + 1).fill(true);
    this.generatePrimes();
  }

  generatePrimes() {
    this.primes.push(2);
    for (let i = 3; i <= this.limit; i += 2) {
      if (this.sieve[i]) {
        this.primes.push(i);
        for (let j = i * i; j <= this.limit; j += i) {
          this.sieve[j] = false;
        }
      }
    }
  }

  isPrime(number) {
    if (number < 2 || number > this.limit) {
      return false;
    }
    return this.sieve[number];
  }

  getPrimes() {
    return this.primes;
  }
}

// Utility functions
function formatPrimes(primes) {
  return primes.join(", ");
}

function printPrimeFactors(number, primes) {
  let primeFactors = [];
  let i = 0;

  while (number > 1 && i < primes.length) {
    if (number % primes[i] === 0) {
      primeFactors.push(primes[i]);
      number /= primes[i];
    } else {
      i++;
    }
  }

  if (primeFactors.length > 0) {
    console.log(`Prime factors of ${number}: ${primeFactors.join(", ")}`);
  } else {
    console.log(`Number ${number} is prime itself`);
  }
}

function calculateGCD(a, b) {
  let remainder;
  while (b != 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

// Usage example
const limit = 1000;
const generator = new PrimeGenerator(limit);

console.log(`Prime numbers up to ${limit}: ${formatPrimes(generator.getPrimes())}`);

const testNumbers = [37, 56, 73, 97, 1024];
testNumbers.forEach((number) => {
  console.log(`Is ${number} prime? ${generator.isPrime(number)}`);
  printPrimeFactors(number, generator.getPrimes());
});

console.log(`GCD of 15 and 25: ${calculateGCD(15, 25)}`);
console.log(`GCD of 50 and 75: ${calculateGCD(50, 75)}`);

// ... more complex code, additional utility functions, etc.

// End of complexCode.js