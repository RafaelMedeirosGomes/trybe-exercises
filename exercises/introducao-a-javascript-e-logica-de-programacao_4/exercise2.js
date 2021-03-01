//EX 1
function verificaPalindrome(word) {
  let count = word.length;
  for (let index = 0; index < count - index; index += 1) {
    if (word[index] != word[count - index - 1]) {
      return false;
    }
  }
  return true;
}
console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));
//EX 2
function maiorNaArray(array) {
  let biggest = -1 * Number.MAX_VALUE;
  let index = -1;
  for(let key in array){
    if(array[key] > biggest){
      biggest = array[key];
      index = key;
    }
  }
  return index;
}
console.log(maiorNaArray([2, 3, 6, 7, 10, 1]));
//EX 3
function maiorNaArray(array) {
  let biggest = Number.MAX_VALUE;
  let index = -1;
  for(let key in array){
    if(array[key] < biggest){
      biggest = array[key];
      index = key;
    }
  }
  return index;
}
console.log(maiorNaArray([2, 4, 6, 7, 10, 0, -3]));