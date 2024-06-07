// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 
/*const splitBill = (amount, numPeople) => {
    return `Each person needs to pay ${amount / numPeople}`
}*/


// Challenge start 
const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`

console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
console.log(splitBill(10, 5));



/*function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() {
    countFromNum -= step;
    return countFromNum;
  }
}*/

// Stretch goal start
const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return () => countFromNum -= step;
}

const countingDown = countdown(20, 2);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
