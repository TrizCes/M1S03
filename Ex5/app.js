/*
Para treinar os conceitos de Rest.

Crie dois arquivos:
- index.html
- app.js

No arquivo apps.js, utilizando o operador Rest, crie uma função que receba como parâmetro uma quantidade indefinida de variáveis inteiras (números inteiros).

A função deve retornar a soma de todos os parâmetros (...).
Após executada a função, o resultado deve ser exibido no console.

Exemplo:

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
// resultado deve ser 10
Obs.: Em index.html deve ser incluído o arquivo app.js, para rodar o script e executarmos a função.

*/

const somaTudo = (...numeros) => {
  let result = numeros.reduce(function (total, atual) {
    return total + atual;
  });
  return result;
};

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
console.log('___________');

/*
// verificação com diferentes numeros
const resultado2 = somaTudo(5, 5, 5);
console.log(resultado2);
console.log('___________');
*/
