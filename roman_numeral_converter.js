//freeCodeCamp Roman Numeral Converter 1-Feb-2022
 
const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 
function convertToRoman(num) {
  let conversion = "";
  let originalNum = num;
    for (let i = 0; i < arabic.length; i++) {
      while (num >= arabic[i]) {
        conversion += roman[i];
        num -= arabic[i];
      }
    }
  console.log(`${originalNum} in Roman numerals is ${conversion}.`);
 return conversion;
}
 
convertToRoman(36);
