angular.module('shared.minDigitsFilter', [])

.filter("minDigits", function(){
  return function(num, targetLength){
    var str = num + "";
    while(str.length < targetLength){
      str = "0"+str;
    }
    return str;
  };
});