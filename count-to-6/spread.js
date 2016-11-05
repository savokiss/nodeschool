var arr = process.argv.slice(2);
var min = Math.min(...arr);
var str = `The minimum of [${arr}] is ${min}`;

console.log(str);