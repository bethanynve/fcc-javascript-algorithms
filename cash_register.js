// freeCodeCamp Cash Register 29-Sep-2023
// with help from Class Central Free JS Bootcamp

const DENOMINATIONS = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000
  }
  
  // Calculate how much change is due (in cents)
  function checkCashRegister(price, cash, cid) {
    const changeDue = (cash - price)
    let changeDueCents = changeDue * 100;

    // Add up the amount of money in the cash drawer (in cents)
    const centsInCid = cid.reduce((acc, [, amount]) => {
      return acc + (amount * 100)
    }, 0.00);

    // If the cash-in-drawer (in cents) is equal to the change due in cents: 
    if (centsInCid === changeDueCents) {
      return {status: "CLOSED", change: cid};
    } 
  
    // Remove bills/coins from the cash drawer, sorted from highest value to lowest. 
    // This requires reversing the order of denominations.
    const change = cid.reverse().map(([name, amount]) => {
      let total = 0;
      let denomination = DENOMINATIONS[name];
      let amountCents = amount * 100;
      // Loop while the change due (in cents) is greater than or equal to the value (denomination) of the current bill, AND there is still more of that denomination in the cash drawer (amountCents).
      while (denomination <= changeDueCents && amountCents > 0) {
        // console.log(name, total, changeDueCents, amountCents);
          // Add one of that denomination to the total
          total += denomination;
          // Subtract that denomination from the total changeDueCents
          changeDueCents -= denomination;
          // Subtract one of that denomination from cash-in-drawer
          amountCents -= denomination;
        }
      return [name, total / 100];
    })

    // Filter out denominations that are not greater than zero (i.e. they're empty)
    .filter(([, amount]) => amount > 0);
  
    // If the cash-in-drawer is less than the cash due:
    if(changeDueCents > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
    // Otherwise, return change sorted in highest to lowest order
    return {status: "OPEN", change: change};
  }
  