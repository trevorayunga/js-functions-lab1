// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
/**
 * Lab: Functions in JavaScript
 * Basic budgeting utility functions.
 */

/**
 * Calculates a 10% tax on a given amount.
 * @param {number} amount - The taxable amount.
 * @returns {number} The calculated tax value.
 */
function calculateTax(amount) {
  return amount * 0.10;
}

/**
 * Converts a string to all uppercase letters.
 * @param {string} text - The input string.
 * @returns {string} The uppercase version of the input string.
 */
function convertToUpperCase(text) {
  return text.toUpperCase();
}

/**
 * Returns the larger of two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The maximum of the two numbers.
 */
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

/**
 * Determines whether a string is a palindrome, ignoring case.
 * @param {string} word - The input string.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(word) {
  const normalized = word.toLowerCase();
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

/**
 * Calculates the price after applying a discount.
 * @param {number} originalPrice - The original price.
 * @param {number} discountPercentage - The discount percentage (e.g. 20 for 20%).
 * @returns {number} The price after the discount has been applied.
 */
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * (discountPercentage / 100));
}

// ---- Simple manual tests (run with: node functions.js) ----
if (require.main === module) {
  console.log("calculateTax(200):", calculateTax(200));                       // 20
  console.log("convertToUpperCase('hello'):", convertToUpperCase("hello"));    // HELLO
  console.log("findMaximum(4, 9):", findMaximum(4, 9));                        // 9
  console.log("isPalindrome('Racecar'):", isPalindrome("Racecar"));            // true
  console.log("isPalindrome('hello'):", isPalindrome("hello"));                // false
  console.log("calculateDiscountedPrice(100, 20):", calculateDiscountedPrice(100, 20)); // 80
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};