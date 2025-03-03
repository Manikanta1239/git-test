// 1st way: Importing entire module
const mat = require('./math');
console.log('Method 1 - Importing entire module:');
console.log('Addition:', mat.add(2, 3));
console.log('Subtraction:', mat.sub(2, 3));
console.log('Multiplication:', mat.mul(2, 3));
console.log('Division:', mat.div(2, 3));

// 2nd way: Destructuring specific functions
const { add, sub } = require('./math');
console.log('\nMethod 2 - Destructuring specific functions:');
console.log('Addition:', add(4, 3));
console.log('Subtraction:', sub(4, 3));

// 3rd way: Destructuring all functions
const { add: addition, sub: subtraction, mul: multiplication, div: division } = require('./math');
console.log('\nMethod 3 - Destructuring with renamed functions:');
console.log('Addition:', addition(5, 3));
console.log('Subtraction:', subtraction(5, 3));
console.log('Multiplication:', multiplication(5, 3));
console.log('Division:', division(5, 3));

// 4th way: Using object destructuring with rest parameters
const { add: sum, ...otherOperations } = require('./math');
console.log('\nMethod 4 - Object destructuring with rest parameters:');
console.log('Addition:', sum(6, 3));
console.log('Other operations:', otherOperations);
console.log('Subtraction using other operations:', otherOperations.sub(6, 3));

// Testing different number combinations
console.log('\nTesting different number combinations:');
const numbers = [
    [10, 5],
    [20, 4],
    [15, 3],
    [100, 10]
];

console.log('\nTesting all operations with different numbers:');
numbers.forEach(([a, b]) => {
    console.log(`\nNumbers: ${a} and ${b}`);
    console.log('Addition:', mat.add(a, b));
    console.log('Subtraction:', mat.sub(a, b));
    console.log('Multiplication:', mat.mul(a, b));
    console.log('Division:', mat.div(a, b));
});
