//EX 1
function verificaPalindrome(word) {
  let count = word.length;
  for (let index = 0; index < count-index; index += 1) {
    if(word[index] != word[count-index-1]){
      return false;
    }
  }
  return true;
}
console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));
