/*
Para treinar os conceitos de Spread.

Crie dois arquivos:
- index.html
- app.js

Em app.js desenvolva uma função que receba dois arrays e realize a concatenação entre eles utilizando o operador Spread.
Apresente o resultado no console.log(novoArray).

Exemplo:

const novoArray = concatena([1, 2, 3], [4, 5, 6]);
console.log(novoArray);
// novo array deve ser [1, 2, 3, 4, 5, 6]
Obs.: Em index.html deve ser incluído o arquivo app.js, para executarmos o script com a função.
*/

const concatena = (vetor1, vetor2) => {
  let vetorFinal = [...vetor1, ...vetor2];
  return vetorFinal;
};

const arrayA = [1, 2, 3];
const arrayB = [`A`, `B`, `C`, `D`];

const novoArray = concatena(arrayA, arrayB);
console.log(novoArray);
