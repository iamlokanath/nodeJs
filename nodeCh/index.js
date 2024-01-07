//01. create a folder named thapa
const fs = require("fs");
// fs.mkdirSync("thapa");

// 02. create a new file bio.txt in this folder
// fs.writeFileSync("thapa/bio.txt", "My name is Lokanth Panda");

//03. Add more data in the bio.txt without overwriting
// fs.appendFileSync("thapa/bio.txt", "How are you, I am Fine");

// 04. Read the data without getting the buffer data at first
// const data = fs.readFileSync("thapa/bio.txt", "utf8");
// console.log(data);

// 05.Rename the file
// fs.renameSync("thapa/bio.text", "thapa/myBio.txt");

// remove te file
// fs.unlinkSync("thapa/MyBio.txt");

//remove the folder
fs.rmdirSync("thapa");
