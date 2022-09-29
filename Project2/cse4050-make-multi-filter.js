'use strict';

var arrayFilterer = Cse4050MakeMultiFilter([8,9,10,11,12]);

function Cse4050MakeMultiFilter(originalArray){
  
  var currentArray = originalArray;

  function arrayFilterer(filterCriteria, callBack){
    if(typeof filterCriteria != "function"){
      return currentArray;
    }

    currentArray = currentArray.filter(filterCriteria);

    if(typeof callBack == "function"){
      callBack.call(originalArray, currentArray);
    }

    return arrayFilterer;
  }
  
  return arrayFilterer;
}

console.log(arrayFilterer);