const fs = require("fs");
const bioData = {
    name: "Lokanath Panda",
    age: "20",
    channel : "Code With Lokanath",
};

// console.log(bioData.age);


// convert the data to JSON
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// convert the JSON to object 
// const objData = JSON.parse(jsonData);
// console.log(objData);

// task
// 1: convert to JSON 
const jsonData = JSON.stringify(bioData);

// 2: durse file me add kardena
// fs.writeFile("json1.json", jsonData, (err)=>{
//     console.log("Json Data added Done");
// });

// 3:Read file
fs.readFile("json1.json", "utf-8", (err, data)=>{
    console.log("JSON Data: ",data);
    const orginalData  = JSON.parse(data);
    console.log("Original Data: ",orginalData);
} );

