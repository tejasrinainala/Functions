// Challenge: Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 

// Write your code below:

function splitBill(amount, count) {
    return `Each person needs to pay ${amount / count}`
} 



console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))

