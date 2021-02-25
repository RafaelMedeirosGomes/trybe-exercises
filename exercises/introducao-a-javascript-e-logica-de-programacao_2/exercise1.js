let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Exercise 1
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}
//Exercise 2
let sum = 0;
for (let index = 0; index < numbers.length; index++){
  sum += numbers[index];
}
console.log(sum);
//Exercise 3
let average = sum/numbers.length;
console.log(average);
//Exercise 4
if(average>20){
  console.log("valor maior que 20");
}else{
  comsole.log("valor menor ou igual a 20");
}