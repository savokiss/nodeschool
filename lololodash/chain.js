    // include the Lo-Dash library                                                                                                                                                               
    var _ = require("lodash");                                                                                                                                                                   
    var worker = function(arr) {
      
      return _.chain(arr)
      .sort()
      .map(function(item){
        return _.toUpper(item+'chained');
      })
      .value();
    };                                                                                                                                                                                           
    // export the worker function as a nodejs module                                                                                                                                             
    module.exports = worker; 