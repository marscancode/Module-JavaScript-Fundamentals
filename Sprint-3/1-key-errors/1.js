// Predict and explain first...

// Why will an error occur when this program runs?
// like the original code in 0.js a syntax error will occur because decimalNumber has already been declared as the parameter in the function so it cannot be redeclared  inside the function with the same name.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
