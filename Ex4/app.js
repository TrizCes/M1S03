/*
Para exercitarmos spread com objetos:
Em um arquivo app.js incluído em index.html escreva uma função de nome mesclaObjetos, que aceita dois objetos como parâmetro e retorna um novo objeto que contem todos os pares chave-valor do primeiro e do segundo objetos.

Exemplo:

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };
const novoObjeto = mesclaObjetos(objUm, objDois);
console.log(novoObjeto);
// { a: 1, b: 2, c: 3, d: 4 }
Extra: Faça utilizando arrow function.
*/

const mesclaObjetos = (objA, objB) => {
  let objetoFinal = { ...objA, ...objB };
  return objetoFinal;
};

const objUm = { a: 1, b: 2 };
console.log(objUm);
const objDois = { c: 3, d: 4 };
console.log(objDois);
const novoObjeto = mesclaObjetos(objUm, objDois);
console.log(novoObjeto);
