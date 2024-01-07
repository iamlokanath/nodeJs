const fs = require("fs");

// while creating Asyncronous file we must need to add the calllback function
// fs.writeFile('read.txt', "Today is awesome day :)",
// (err) => {
//     console.log("file is created");
//     console.log(err);
// });

// to add new data in the file
// fs.appendFile("read.txt", "I am Lokanth Panda", (err)=>{
//     console.log("The new data is added.");
//     console.log(err);
// });

// to read the data in the file
// fs.readFile('read.txt', 'utf8', (err, data)=>{
//     console.log(err);
//     console.log(data);
// })

// to delete the file
// fs.unlink("read1.txt", (err)=>{
//     console.log("File is deleted.");
//     console.log(err);
// });

// nb: asynchronous is better than synchrounous because asynchrouns do the things that is present and after the things are done then it goes to the request