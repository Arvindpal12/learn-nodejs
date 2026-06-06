// // there is a (1) way to export a moduless 

// function twoSum(a,b){
//     return a+b;
    
// }
// have a more fucntions then use a 
// function sub(a,b){
//     return a-b;
// }

// module.exports = twoSum; <- only use a single fucntion 
// module.exports={ // <- if you have two fucntion first is add and seccound is sub then you use a obje like 

//     twoSum,
//     sub,

// };

// (2) way to export and that is a best and morden way 
exports.add =(a,b)=> a+b;
exports.sub =(a,b) => a-b;

