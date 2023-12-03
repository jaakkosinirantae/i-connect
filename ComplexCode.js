// Filename: ComplexCode.js
// Description: A complex and elaborate JavaScript code that performs various operations on arrays and objects

// Create an array of fruits
var fruits = ["apple", "banana", "orange", "mango"];

// Create an object of countries and their respective capitals
var countries = {
  "USA": "Washington D.C.",
  "UK": "London",
  "France": "Paris",
  "Germany": "Berlin"
};

// Function to capitalize the first letter of each word in a string
function capitalize(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Perform operations on the array of fruits
console.log("Array of fruits: " + fruits);
console.log("Number of fruits: " + fruits.length);
console.log("Reversed array of fruits: " + fruits.reverse());
console.log("Capitalized fruits: " + fruits.map(capitalize));
console.log("Fruits sorted alphabetically: " + fruits.sort());

// Perform operations on the object of countries
console.log("Object of countries: ", countries);
console.log("Number of countries: " + Object.keys(countries).length);
console.log("Capital of France: " + countries["France"]);
console.log("Reversed capitals: ", Object.values(countries).map(reverseString));

// Check if numbers are prime
console.log("Is 17 prime? " + isPrime(17));
console.log("Is 25 prime? " + isPrime(25));
console.log("Is 31 prime? " + isPrime(31));

// Generate random numbers
var randomNumbers = [];
for (var i = 0; i < 10; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log("Random numbers: " + randomNumbers);

// Sort the random numbers in descending order
console.log("Sorted random numbers: " + randomNumbers.sort(function(a, b) {
  return b - a;
}));

// Calculate the sum of the random numbers
var sum = randomNumbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
console.log("Sum of random numbers: " + sum);

// Perform complex calculations
var result = Math.pow(Math.sqrt(16) + Math.min(5, 10), 2);
console.log("Complex calculation result: " + result);

// Perform string operations
var str = "Hello, World!";
console.log("Uppercase string: " + str.toUpperCase());
console.log("Lowercase string: " + str.toLowerCase());
console.log("Reversed string: " + reverseString(str));

// Generate an array of numbers from 1 to 100
var numbers = Array.from({ length: 100 }, (_, i) => i + 1);
console.log("Numbers from 1 to 100: " + numbers);

// Filter the numbers array to get prime numbers
var primeNumbers = numbers.filter(isPrime);
console.log("Prime numbers from 1 to 100: " + primeNumbers);

// Generate an array of squares of prime numbers
var squares = primeNumbers.map(function(num) {
  return num * num;
});
console.log("Squares of prime numbers: " + squares);

// Calculate the sum of squares
var sumOfSquares = squares.reduce(function(acc, curr) {
  return acc + curr;
}, 0);
console.log("Sum of squares: " + sumOfSquares);

// Find the average of the prime numbers
var average = primeNumbers.reduce(function(acc, curr) {
  return acc + curr;
}, 0) / primeNumbers.length;
console.log("Average of prime numbers: " + average);

// Perform advanced string manipulation
var sentence = "This is an example sentence";
console.log("Processed sentence: " + sentence.split(" ").map(reverseString).join(" "));

// Perform complex array transformation
var transformedArray = primeNumbers
  .map(function(num) {
    return num.toString().split("").reverse().join("");
  })
  .filter(function(str) {
    return str.length > 1;
  })
  .map(capitalize)
  .sort();
console.log("Transformed array: ", transformedArray);

// Calculate fibonacci sequence
function fibonacci(n) {
  var fib = [0, 1];
  for (var i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

console.log("Fibonacci sequence (first 15 numbers): " + fibonacci(15));

// Perform complex conditional checks
var condition1 = true;
var condition2 = false;
var condition3 = true;

if (condition1) {
  console.log("Condition 1 is true");
} else if (condition2) {
  console.log("Condition 2 is true");
} else if (condition3) {
  console.log("Condition 3 is true");
} else {
  console.log("All conditions are false");
}

// Perform complex looping
var i = 0;
while (i < 10) {
  if (i % 2 === 0) {
    console.log("Even number: " + i);
  } else {
    console.log("Odd number: " + i);
  }
  i++;
}

// A complex nested object
var nestedObj = {
  prop1: "value1",
  prop2: {
    nestedProp1: "value2",
    nestedProp2: {
      deeplyNestedProp: "value3"
    }
  }
};
console.log("Nested object: " + JSON.stringify(nestedObj));

// Perform complex date calculations
var date = new Date();
console.log("Current date: " + date);
date.setDate(date.getDate() + 7);
console.log("Date after 7 days: " + date);
date.setMonth(date.getMonth() + 1);
console.log("Date after 1 month: " + date);
date.setFullYear(date.getFullYear() + 1);
console.log("Date after 1 year: " + date);

// Generate a Fibonacci spiral using HTML canvas

// Get the canvas element
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set the starting point of the spiral
var cx = canvas.width / 2;
var cy = canvas.height / 2;
var radius = 0;

// Function to draw a spiral
function drawSpiral() {
  ctx.beginPath();
  ctx.moveTo(cx, cy);

  for (var i = 0; i < 1000; i++) {
    var angle = 0.1 * i;
    var x = cx + radius * Math.cos(angle);
    var y = cy + radius * Math.sin(angle);
    ctx.lineTo(x, y);
    radius += 0.1; // Increase the radius for each point
  }

  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  ctx.stroke();
}

drawSpiral();

// Add complex event listeners
document.getElementById("button").addEventListener("click", function() {
  console.log("Button clicked");
});

document.getElementById("input").addEventListener("input", function(event) {
  console.log("Input value changed:", event.target.value);
});

// Perform complex AJAX requests
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
  if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    var response = JSON.parse(httpRequest.responseText);
    console.log("AJAX response:", response);
  }
};

httpRequest.open("GET", "https://api.example.com/data", true);
httpRequest.send();

// ... More complex code goes here ...

// End of complex code