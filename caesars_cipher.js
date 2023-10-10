//freeCodeCamp Caesars Cipher 9-Feb-2022

const CIPHER_KEY = {
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M'
  };
  
  function rot13(encryptedStr) {
    let decryptedStr = "";
    for (let symbol of encryptedStr) {
      if (/[A-Z]/.test(symbol)) {
        decryptedStr += CIPHER_KEY[symbol];
      } else {
        decryptedStr += symbol;
      }
    };
    console.log(`${encryptedStr} decodes to ${decryptedStr}`)
    return decryptedStr;
  }
  
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!")
  rot13("SERR YBIR?")
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
  