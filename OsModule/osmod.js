const os = require("os");

// to print the bits of your pc
console.log(os.arch());

const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1014/ 1024 / 1024}`);

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());