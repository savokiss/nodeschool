    // include the Lo-Dash library                                                                                                                                                               
    var _ = require("lodash");                                                                                                                                                                   
    var worker = function(arr) {
      var result = [];
      var hash = _.groupBy(arr,'username');
      _.forEach(hash,function(item,name){
        result.push({
          username: name,
          comment_count: _size(item)
        })
      });
      return _.sortBy(result,'comment_count').reverse();
    };                                                                                                                                                                                           
    // export the worker function as a nodejs module                                                                                                                                             
    module.exports = worker; 