// start a file handling in nodejs
// any module you use first is declare a require("fs") module 
const fs= require("fs");


// use this i will create a file in nodejs and use a (write modeule in nodejs)
// syn code 
// (1) fs.writeFileSync("./text.txt","hey there im nodejs learner");
// execute this code then you will see a create a new tect file and inside of test file written 
// hey there im nodejs learner <- this sentance as a output;


// Async code secound way to crete  file 
// fs.writeFile("./text.txt","hey there im nodejs learner asycn code",(err)=>{})

// (2) how to read a file in nodejs ok
// first methord (sync)
// const result=fs.readFileSync('./contact.text',"utf-8")
// console.log(result)

// seound methord (Async)
// fs.readFile("./contact.text","utf-8", (err, result) => {
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(result);
//     }
// });

// # (3) module fuction (append)
// this function is mot override a data its usse the append function make a just front line showing a data 
// use a fs(appendFileSync)

// fs.appendFileSync("./text.txt","hey there im nodejs learner asycn code")


