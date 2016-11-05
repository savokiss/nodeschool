var _ = require("lodash");
var worker = function(arr){
  return _.sortBy(arr,function(item){
    return -item.quantity;
  });
}

module.exports = worker;