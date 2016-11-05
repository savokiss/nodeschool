    // include the Lo-Dash library                                                                                                                                                               
    var _ = require("lodash");                                                                                                                                                                   
    var worker = function(arr) {
      var hash = {
        hot: [],
        warm: []
      }
      _.forEach(arr,function(value,key){
        if(_.every(value,check_temp)){
          hash.hot.push(key);
        }else if(_.some(value,check_temp)){
          hash.warm.push(key);
        }
      })
      function check_temp(item){
        return item>19;
      }
      
      return hash;
    };                                                                                                                                                                                           
    // export the worker function as a nodejs module                                                                                                                                             
    module.exports = worker; 