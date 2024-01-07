const fs = require("fs");

// 1. create a folder named it thapa
// fs.mkdir("thapa", (err)=>{
//     console.log("Folder created sucessfully.");
//     console.log(err);
// });

// 2: Cerate a file in it named bio.txt and data into it
// fs.writeFile("thapa/bio.txt", "Hello Stranger..!", (err)=>{
//     console.log("the file is created");
//     console.log(err);
// })

//3: Add more data into the file at the end of the existing data
// fs.appendFile("thapa/bio.txt", "Hello My name is Lokanath Panda", (err)=>{
//     console.log("The new data is added.");
//     console.log(err);
// });

//4. Read the data withot getting the buffer data at first.
// const data = fs.readFile("thapa/bio.txt","utf8", (err)=>{
//     console.log(err);
// });

// 5. Rename the file name to mybio.txt 
// fs.rename("thapa/bio.txt", "thapa/mybio.txt", (err)=>{
//     console.log(err);
// });

// now delete both the file and the folder
// fs.unlink("thapa/mybio.txt", (err)=>{
//     console.log(err);
// });

//now delete both the filr and the other
// fs.rmdir("thapa", (err)=> {
//     console.log(err);
// })