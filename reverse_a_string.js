// freeCodeCamp Basic Algorithm Scripting -> Reverse a String
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

//solution 1
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

reverseString("hello");

//solution 2
const reverseString = str => str.split("").reverse("").join("");
