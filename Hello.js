// console.log("hello node js im  arvind");
// inside of nodejs not excuted a window relted function 
// always start a nodejs project fisrt is initilize in your project type in terminal npm init


// Secound topic in nodejs is modules 
//  ok i will strat a secound topic what is module so module is a lets uderstand un using example
// sopose you have a file name is twoSum.js ok and you write a code inside of this file but not 
// not run its run in another file name is index.js so how you can run the code of twoSum.js 
// so for this we have a module in nodejs and we can export the code of twoSum.js and import
// it in index.js and run the code of twoSum.js in index.js so this is the module in nodejs.


const {add,sub} = require('./math.js');
// const math = require('./index.js');

// console.log(twoSum(2, 3));
console.log(add(2, 3));
// if you have two fucntion first is add and seccound is sub then you use a obje like 

// # Start a new topic - modules in nodejs (built in module like,fs,read,write over all a file handling)
