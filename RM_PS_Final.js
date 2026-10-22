
// 01. Solve Me First
// Write a function that returns the sum of two integers.

/**
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
var solveMeFirst = function(a, b) {
  return a + b;
};


// 02. Multiply
// Write a function that returns the product of two numbers.

/**
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
var multiply = function(a, b) {
  return a * b;
};


// 03. Even or Odd
// Write a function that returns "Even" when a number is even and "Odd" when it is odd.

/**
  * @param {number} number
  * @return {string}
  */
var evenOrOdd = function(number) {
  return number % 2 === 0 ? "Even" : "Odd";
};

// 04. Return Negative
// Return the negative value of a number. If it is already negative, keep it negative.

/**
  * @param {number} number
  * @return {number}
  */
var makeNegative = function(number) {
  return number <= 0 ? number : -number;
};