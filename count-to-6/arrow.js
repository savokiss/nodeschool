var inputs = process.argv.slice(2);
var result = inputs.map((item)=>item[0])
.reduce((curr,prev)=>curr+prev);

console.log(`[${inputs}] becomes "${result}"`);