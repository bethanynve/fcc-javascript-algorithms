//freeCodeCamp Caesars Cipher 4-Aug-2023

const validRegEx1 = /^(1\s?)?\((\d{3})\)\s?\2-\d{4}$/;
const validRegEx2 = /^(1\s?)?\d{3}(\s|-)?\d{3}(\s|-)?\d{4}$/;

const formats = [validRegEx1, validRegEx2];

function telephoneCheck(str) {
  for (let format of formats) {
    if (format.test(str)) {
      return true;
    }
  }
  return false;
}

telephoneCheck("555-555-5555");
