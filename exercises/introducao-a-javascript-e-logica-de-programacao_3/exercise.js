//Random well-behaviored user input simulated
let n = 1 + Math.round(Math.random() * 10);
//Ex 1
console.log("Exercício 1:");
let myChar = "*";
let row = "";
for (let index = 0; index < n; index += 1) {
  row += myChar;
}
for (let index = 0; index < n; index += 1) {
  console.log(row);
}
let triangle = "";
//Ex 2
console.log("Exercício 2:");
for (let index = 1; index <= n; index += 1) {
  triangle += myChar;

  console.log(triangle);
}
//Ex 3
console.log("Exercício 3:");
let invertedTriangle = [];
let tempRow = "";
for (let index = 1; index <= n; index += 1) {
  for (let index2 = 0; index2 < n - index; index2 += 1) {
    tempRow += " ";
  }
  for (let index2 = 1; index2 <= index; index2 += 1) {
    tempRow += myChar;
  }
  invertedTriangle.push(tempRow);
  tempRow = "";
}
for (let index = 0; index < invertedTriangle.length; index += 1) {
  console.log(invertedTriangle[index]);
}
//Ex 4
console.log("Exercício 4:");
//fixes my number to be odd in the most crude way imaginable
let oddNumber = n * 2 + 1;
let base = oddNumber;
let height = n + 1;
let pyramid = [];
/*
ideia do professor Oliva é boa
use 2 loops + 1 condicional para tudo, ao inves de inventar moda
*/
// x x * x x
// x * * * x
// * * * * *

for (let index2 = 0; index2 < height; index2 += 1) {
  let myCharsInThisLine = index2 * 2 + 1;
  let emptySpaces = base - myCharsInThisLine;
  let emptySpacesAtEachSide = emptySpaces / 2;
  for (let index = 1; index <= base; index += 1) {
    if (index <= emptySpacesAtEachSide) {
      tempRow += " ";
    } else if (index <= emptySpacesAtEachSide + myCharsInThisLine) {
      tempRow += myChar;
    } else {
      tempRow += " ";
    }
  }
  pyramid.push(tempRow);
  tempRow = "";
}
for (let index = 0; index < pyramid.length; index += 1) {
  console.log(pyramid[index]);
}
