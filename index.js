const n = "Nupoor";
console.log(n);
//creating module
const fs= require("fs");
//Write the text in file
fs.writeFileSync("read.txt", "Hello good morning");
//Appending the text
fs.appendFileSync("read.txt", " This is append fuction from JS");
//read the file using module
const buffer_data= fs.readFileSync("read.txt");
console.log(buffer_data);
//read original data
original_data=buffer_data.toString();
console.log(original_data);
//to rename the file
fs.renameSync("read.txt","readwrite.txt");

