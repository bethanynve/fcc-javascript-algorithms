//freeCodeCamp Palindrome Checker 25-Jan-2022

//remove all non-alphanumeric characters
function makeAlphaNumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "");
}

//make all characters lowercase
function makeLowerCase(str) {
   return str.toLowerCase();
}

//make it backward
function makeBackward(str) {
  let result = [];
  for (let i = str.length-1; i >= 0; i--) {
    result += str[i];
  }
    return result;
}

//check for palindrome
function palindrome(str) {
  const alphaNumStr = makeAlphaNumeric(str);
  const lowerCaseStr = makeLowerCase(alphaNumStr);
  const backwardStr = makeBackward(lowerCaseStr);
 
  console.log(`Is '${str}' a palindrome?`);

  if (backwardStr === lowerCaseStr) {
    console.log(`Yes! ${backwardStr} is the same as ${lowerCaseStr}.`);
    return true;
  } else {
    console.log(`No, it is not. ${backwardStr} is not the same as ${lowerCaseStr}.`);
    return false;
  }
}

palindrome("nurses run");
