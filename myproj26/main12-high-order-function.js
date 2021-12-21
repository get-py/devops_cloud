// const { wrap } = require("module");

// function base_10(fn) {
//     function wrap(x, y) {
//         return fn(x, y) + 10;
//     }
//     return wrap;
// }

// function mysum(x, y) {
//     return x + y;
// }

// mysum = base_10(base_10(mysum));

// console.log(mysum(1, 2));





const base_10 = (fn) => (x, y) => fn(x, y) + 10;
console.log(base_10(1, 2));