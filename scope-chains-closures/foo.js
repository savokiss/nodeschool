function foo(){
  var bar;
  quux = 2;
  function zip(){
    var quux = 1;
    bar = true;
  }
  return zip;
}