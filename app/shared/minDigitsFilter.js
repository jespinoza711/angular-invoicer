//Filter that displays a number, ensuring number length.
//Example: 23 | minDigits:5 -> becomes "00023"
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