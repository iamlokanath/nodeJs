const EventEmitter = require("events");

const event = new EventEmitter();

// event.on('sayMyName', ()=>{
//     console.log("your name is Lokanath");
// });
// event.on('sayMyName', ()=>{
//     console.log("your name is Kanha");
// });
// event.on('sayMyName', ()=>{
//     console.log("your name is Panda");
// });


event.on('checkPage', (sc, msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)
})
event.emit("checkPage", 200, "ok");

// myName(200, 'ok');

