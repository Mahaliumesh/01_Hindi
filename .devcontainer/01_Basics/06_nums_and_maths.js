const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);

/* ***************************  .toFixed() ********************************* */
// console.log(balance.toFixed(1));


/* ********************************* .toPrecision() ************************************** */
/*
const otherNumber = 1123.8966

console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(6));

console.log(otherNumber.toPrecision(2))
*/


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ****************************************Maths************************

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());
console.log((Math.random()* 10)+ 1);
console.log(Math.floor(Math.random()*10)+1);

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min +1))+ min)