    function countWords(inputWords) {                                                                                                                                        
      return inputWords.reduce(function(hash,word){
        hash[word]?hash[word]++:hash[word]=1;
        return hash;
      },{});
    }                                                                                                                                                                        
                                                                                                                                                                             
    module.exports = countWords  