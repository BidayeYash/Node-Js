//question 1
//js1
const mathOpration = require("./mathOpration");

console.log("5+3=", mathOpration.addition(5, 3));
console.log("5-3=", mathOpration.Sub(5, 3));
console.log("10*3=", mathOpration.multiply(10, 3));
console.log("10/3=", mathOpration.div(10, 3));

//js2
function addition(a, b) {
  return a + b;
}

function Sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

module.exports = { addition, Sub, multiply, div };







//Question 2!!!!!!!
const fs=require("fs");
// fs.readFile('doc1.txt',(error,data)=>{
//     if (error) {
//      console.log("error");   
//     } else {
//         console.log(data.toString());
//     }
// });
// console.log("Programs Ends");


//WriteFile
// fs.writeFile('doc1.txt',"Welcome to hell.....",(error)=>{
//     if (error) {
//     console.log("Error");    
//     } else {
//         console.log("Updated");
//     }
// });

//DeleteFile
// fs.unlink('doc1.txt',(error)=>{
//     if (error) {
//      console.log("Error");   
//     } else {
//         console.log("Deleted");
//     }
// });

// Make Directory
// fs.mkdir("folder",(error)=>{
//     if (error) {
//         console.log("Error");
//     } else {
//         console.log("FOlder Created");
//     }
// });

//create file
// fs.writeFile("doc1.txt","Helo MotherFucker.......",(error)=>{
//     if (error) {
//         console.log("Error");
//     } else {
//         console.log("File Created");
//     }
// });

//Delete Folder
// fs.rmdir("folder",(error)=>{
//     if (error) {
//         console.log("Error");
//     } else {
//         console.log("Folder Deleted");
//     }
// });

