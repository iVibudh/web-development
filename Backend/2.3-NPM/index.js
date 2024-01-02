// // issue with ' vs `
// var generateName = require('sillyname');
// var sillyName = generateName();

// console.log('My name is ${sillyName}.);
// console.log('My name is ')



// // No issues
// var generateName = require('sillyname');
// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);




// // CJS (default) vs ESM
import generateName from "sillyName";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);