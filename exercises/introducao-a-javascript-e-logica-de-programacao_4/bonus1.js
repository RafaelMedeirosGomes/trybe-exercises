//BONUS 1
//NOTE: The code below assumes well behavior from the input
let romanNumber = "MCMXCVII";
//XLIV = 44
//break the number in parts
//10 50 1 5
//apply the correct operator +/- on each part
//(50 - 10) + (5 - 1)

let dict = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
let parsedNumbers = parse(romanNumber);
let result = join(parsedNumbers);
console.log(romanNumber);
console.log(result);

function parse(validRomanNumber) {
  let parsedResult = [];
  for (let letter in validRomanNumber) {
    parsedResult.push(dict[validRomanNumber[letter]]);
  }
  return parsedResult;
}

function join(parsedRomanNumbers) {
  let sum = 0;
  for (let index = 0; index < parsedRomanNumbers.length; index += 1) {
    if (index === parsedRomanNumbers.length - 1) {
      sum += parsedRomanNumbers[index];
    } else if (parsedRomanNumbers[index + 1] > parsedRomanNumbers[index]) {
      sum -= parsedRomanNumbers[index];
    } else {
      sum += parsedRomanNumbers[index];
    }
  }
  return sum;
}
