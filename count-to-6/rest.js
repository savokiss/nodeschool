module.exports = function average(...args){
    var sum = args.reduce((curr,next)=>curr+next,0);
    return sum/args.length;
}