/*
Um palindrome (palíndromo), segundo o dicionário Houaiss,
"diz-se de frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa", como por exemplo: osso, Ana, radar.

Ou seja, é uma palavra que quando lida de trás pra frente tem o mesmo significado.

Implemente uma função em JavaScript que receba uma string como parâmetro e retorne se determinada palavra é um palindromo ou não.

Exemplo:

const teste1 = verificaPalindromo("ana");
// true

const teste2 = verificaPalindromo("julia");
// false
Obs.: Use let e const para declarar variáveis se for necessário.
Extra: Faça com uma arrow function.

*/

const verificaPalindromo = (texto) => {
  let vetor1 = texto.toLowerCase().split('');
  let vetor2 = texto.toLowerCase().split('').reverse();

  for (let i = 0; i < vetor1.length; i++) {
    if (vetor1[i] !== vetor2[i]) {
      return false;
    } else {
      return true;
    }
  }
};

const teste1 = verificaPalindromo('Ane');
const teste2 = verificaPalindromo('Ana');
const teste3 = verificaPalindromo(`Radar`);
const teste4 = verificaPalindromo('Roma me tem amor');
const teste5 = verificaPalindromo('julia');
const teste6 = verificaPalindromo(`Beatriz`);

console.log(teste1);
console.log('-----');
console.log(teste2);
console.log('-----');
console.log(teste3);
console.log('-----');
console.log(teste4);
console.log('-----');
console.log(teste5);
console.log('-----');
console.log(teste6);
console.log('-----');
