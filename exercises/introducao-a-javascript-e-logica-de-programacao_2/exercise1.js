let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Exercise 1
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}
//Exercise 2
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);
//Exercise 3
let average = sum / numbers.length;
console.log(average);
//Exercise 4
if (average > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
//Exercise 5
const smallestValuePossible = -1 * Number.MAX_VALUE;
let biggestNumber = smallestValuePossible;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > biggestNumber) {
    biggestNumber = numbers[index];
  }
}
console.log(biggestNumber);
//Exercise 6
let oddNumberCounter = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    oddNumberCounter += 1;
  }
}
if (oddNumberCounter !== 0) {
  console.log(oddNumberCounter);
} else {
  console.log("nenhum valor ímpar encontrado");
}
//Exercise 7
const biggestValuePossible = Number.MAX_VALUE;
let smallestNumber = biggestValuePossible;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}
console.log(smallestNumber);
//Exercise 8
let naturalNumbersArray = [];
for (let index = 1; index <= 25; index += 1) {
  naturalNumbersArray.push(index);
}
console.log(naturalNumbersArray);
//Exercise 9
for (let index = 0; index < naturalNumbersArray.length; index += 1) {
  console.log(naturalNumbersArray[index] / 2);
}
