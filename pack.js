// 1st way of using the user defined module
const mat = require('./math');

console.log(mat.add(2,3));
console.log(mat.sub(2,3));
console.log(mat.mul(2,3));
console.log(mat.div(2,3));


// // 2nd way of using the user defined module
// const { add, sub } = require('./math');

// console.log(add(4,3));
// console.log(sub(4,3));
