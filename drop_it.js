// freeCodeCamp Intermediate Algorithm Scripting -> Drop It
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {

    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
      console.log(arr);
      return arr;
  }
  
  dropElements([1, 2, 3, 7, 4], function(n) {return n > 3; });
  