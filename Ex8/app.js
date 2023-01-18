/*
Para exercitarmos rest e repetições com vetores:

Em um arquivo app.js incluído em index.html escreva uma função arrow e
 armazene-a em uma variável de nome uneDobraRetorna, 
 que aceita um array de números e qualquer outra quantidade de números como parâmetro. 
 A função deve retornar um novo vetor que começa com o vetor inicial concatenado com os 
 outros parâmetros extra dobrados de valor.

Exemplo:

const r1 = uneDobraRetorna([1, 2, 3], 4, 4)
console.log(r1) // [1, 2, 3, 8, 8]

const r2 = uneDobraRetorna([2], 10, 4, 8) 
console.log(r2) // [2, 20, 8, 16]

const r3 = uneDobraRetorna([6, 8]) 
console.log(r3) // [6, 8]
*/

const uneDobraRetorna = (array, ...array2) => {
  const newArray = array2.map(function (numero) {
    return numero * 2;
  });
  let retornar = [...array, ...newArray];
  return retornar;
};

const r1 = uneDobraRetorna([1, 2, 3], 4, 4);
console.log(r1); // [1, 2, 3, 8, 8]

const r2 = uneDobraRetorna([2], 10, 4, 8);
console.log(r2); // [2, 20, 8, 16]

const r3 = uneDobraRetorna([6, 8]);
console.log(r3); // [6, 8]
