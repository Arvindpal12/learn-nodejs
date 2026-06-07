// console.log("hello node js im  arvind");
// inside of nodejs not excuted a window relted function 
// always start a nodejs project fisrt is initilize in your project type in terminal npm init


// Secound topic in nodejs is modules 
//  ok i will strat a secound topic what is module so module is a lets uderstand un using example
// sopose you have a file name is twoSum.js ok and you write a code inside of this file but not 
// not run its run in another file name is index.js so how you can run the code of twoSum.js 
// so for this we have a module in nodejs and we can export the code of twoSum.js and import
// it in index.js and run the code of twoSum.js in index.js so this is the module in nodejs.


// const {add,sub} = require('./math.js');
// const math = require('./index.js');

// console.log(twoSum(2, 3));
// console.log(add(2, 3));
// if you have two fucntion first is add and seccound is sub then you use a obje like 

// # Start a new topic - modules in nodejs (built in module like,fs,read,write over all a file handling)


// # Achitechture of nodejs
// first to make a request to a nodejs server then nodejs first to move this request in 
// queue and then event loop is pekup this request then we sand for a non-blocking process and
//if wee sand a request for the blocking oporation then its asign a thread worker and move a thread pool
// and this therad pool sand a ressult 
// defult thread provide a gernaly only for 4 thread it means 4 clint sand a request then evry 
// thread are busy anf 5 clint is wait this is problem for scaliblity .

// this problem solve a non-blocking process .

// #lets start a HTTP SERVER in nodejs topics to how to create a server .
// First step is reqiure a http module ok and in nodejs we have a built in module name is http.

const http = require('http');
// secound step is create a server using http module and for this we have a method name is create server and this method take a callback function and this callback function take two parameter first is req and seccound is res and this req is a request object and res is a response object and this req object have a lot of method and property and this res object also have a lot of method and property ok so we can use this req and res object to handle the request and response of the server.
const myServer = http.createServer((req,res)=>{
    console.log("request is comming")
// its used to end  a our respone .
    res.end("hello node js server im arvind")
});
// its a port no who place a run our server and .listen is a metord to call a 3000 port no means listen krta h
myServer.listen(3000, ()=>{
    console.log("server is running on port 3000")
});