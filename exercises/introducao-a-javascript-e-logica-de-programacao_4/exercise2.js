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
  for (let key in array) {
    if (array[key] > biggest) {
      biggest = array[key];
      index = key;
    }
  }
  return index;
}
console.log(maiorNaArray([2, 3, 6, 7, 10, 1]));
//EX 3
function menorNaArray(array) {
  let biggest = Number.MAX_VALUE;
  let index = -1;
  for (let key in array) {
    if (array[key] < biggest) {
      biggest = array[key];
      index = key;
    }
  }
  return index;
}
console.log(menorNaArray([2, 4, 6, 7, 10, 0, -3]));
//EX 4
function maiorNaArray(array) {
  let biggest = -1 * Number.MAX_VALUE;
  let index = -1;
  for (let key in array) {
    if (array[key].length > biggest) {
      biggest = array[key].length;
      index = key;
    }
  }
  return array[index];
}
console.log(
  maiorNaArray(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
//EX 5
function maisSeRepete(array) {
  let dictNumeros = [];
  for (let pick in array) {
    if (dictContem(array[pick], dictNumeros) != -1) {
      dictNumeros[dictContem(array[pick], dictNumeros)] += 1;
    } else {
      dictNumeros[array[pick]] = 1;
    }
  }
  let most = 0;
  let index = -1;
  for (let key in dictNumeros) {
    if (dictNumeros[key] > most) {
      most = dictNumeros[key];
      index = key;
    }
  }
  return index;
}
function dictContem(entry, dict) {
  for (let key in dict) {
    if (key === entry) {
      return key;
    }
  }
  return -1;
}
console.log(maisSeRepete([2, 3, 2, 5, 8, 2, 3]));
//EX 6
function somatorio(n) {
    let sum = 0;
    for(let index = 1; index <= n; index += 1){
      sum += index;
    }
    return sum;
  }
}
console.log(somatorio(5));

