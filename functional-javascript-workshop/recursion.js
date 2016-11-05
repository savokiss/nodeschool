    function reduce(arr, fn, initial) {
      
      function reduceOne(index,value){
          if(index>arr.length-1) return value;
          return reduceOne(index+1, fn(value, arr[index], index, arr));
      }
      
      return reduceOne(0, initial);
    }                                                                                                                                                                        
    module.exports = reduce 