function calculateTax(amount) {
  return amount * 0.10;
}

console.log(calculateTax(200));

function convertToUpperCase(text) {
  return text.toUpperCase();
}

console.log(convertToUpperCase("hello"));

function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(findMaximum(7, 12));

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log(isPalindrome("hello"));

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage) / 100;
}

console.log(calculateDiscountedPrice(100, 20));





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };