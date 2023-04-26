// const num1 = 179;
// const num2 = 284;
// const countCarries = (num1 = 1, num2 = 1) => {
//   let res = 0;
//   let carry = 0;
//   while (num1 + num2) {
//     carry = +((num1 % 10) + (num2 % 10) + carry > 9);
//     res += carry;
//     num1 = (num1 / 10) | 0;
//     num2 = (num2 / 10) | 0;
//   }
//   return res;
// };
// countCarries(num1, num2);

const result = [];

let carryString = "_";
let carryNum = 0;
let sumString = "";
let num1 = 940538,
  num2 = 975634;

// while both numbers greater than 9
while (num1 + num2) {
  sumString = (((num1 % 10) + (num2 % 10) + carryNum) % 10) + sumString;

  console.log("num1: " + Math.floor(num1 / 10) + ", num2: " + num2 / 10);

  if ((num1 / 10 || num2 / 10) < 1) {
    sumString = 1 + Math.floor(num1 / 10) + Math.floor(num2 / 10) + sumString;
    result.push({ carryString: carryString, sumString: sumString });
    break;
  }

  carryNum = +((num1 % 10) + (num2 % 10) + carryNum > 9);
  carryString = carryNum + carryString;

  num1 = (num1 / 10) | 0;
  num2 = (num2 / 10) | 0;

  result.push({ carryString: carryString, sumString: sumString });
}

console.log(JSON.stringify(result, null, 4));
