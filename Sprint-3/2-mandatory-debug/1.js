// Predict and explain first...
// The function will not return the expected result because whilst sum takes in two arguments it cannot add a+b together because it hasn't been stored in a variable before return so when we call sum it will be undefined?

//function sum(a, b) {
// return;
// a + b;
//}

//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
//console output: The sum of 10 and 32 is undefined
// sum is undefined because we haven't stored the operation we want it to perform correctly in a variable so its value is undefined.
// Finally, correct the code to fix the problem

function sum(a, b) {
  let sumResult = a + b;
  return sumResult;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
