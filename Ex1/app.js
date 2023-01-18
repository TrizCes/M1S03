/*
Em um arquivo **app.js** incluído em **index.html**:

Implemente uma função "**procuraMinMax**" que receba como parâmetro um array (numérico) e identifique o **menor** e o **maior** valor do mesmo. 

Imprima no console estes valores ou **"Não é possível encontrar"** quando não for possível.

 //Teste a função com as seguintes entradas:

```
[56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
[]
[1]
[1, -1]
null
[-2,-2,-2,-2] 
[20,10, 30]  
```
___

Obs.: Use let e const para declarar variáveis se for necessário.

Extra: Faça com uma arrow function.
*/

function procurarMinMax(array) {
  if (Array.isArray(array)) {
    const avaliador = array[0];
    if (isNaN(avaliador) || avaliador === undefined) {
      return console.log('Não é possível encontrar');
    } else {
      let min = array[0];
      let max = array[0];

      for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
          min = array[i];
        }

        if (max < array[i]) {
          max = array[i];
        }
      }

      return console.log(`\n Menor valor: ${min} \n Maior valor: ${max} \n`);
    }
  } else {
    return console.log('Não é possível encontrar');
  }
}

let array1 = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];
let array2 = [];
let array3 = [1];
let array4 = [1, -1];
let array5 = null;
let array6 = [-2, -2, -2, -2];
let array7 = [20, 10, 30];

procurarMinMax(array1);
console.log('--------------------------');
procurarMinMax(array2);
console.log('--------------------------');
procurarMinMax(array3);
console.log('--------------------------');
procurarMinMax(array4);
console.log('--------------------------');
procurarMinMax(array5);
console.log('--------------------------');
procurarMinMax(array6);
console.log('--------------------------');
procurarMinMax(array7);
console.log('--------------------------');
