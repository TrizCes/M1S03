/*
Em um arquivo app.js (incluído em index.html) faça o seguinte:

No documento js faça uma arrow function para retornar uma mensagem (string) de "Olá, Mundo!".

Armazene esta arrow function em uma constante (const) de nome mensagemOla.

Chame a função mensagemOla e exiba o retorno desta função no console.

Ajuste a função mensagemOla para que receba um parâmetro nome e retorne a mensagem "Olá, [nome]!".

Exemplo:

const resultado = mensagemOla("Mariana");
console.log(resultado);
// "Olá, Mariana!"
Ao final, devemos ter uma função que monta uma mensagem de olá customizada com o nome informado por parâmetro.
*/

/*
const mensagemOla = (dizOi) => `Olá, mundo!`;

console.log(mensagemOla());
*/
//ARROW FUNCTION
const mensagemOla = (nome) => `Olá, ${nome}!`;
/*
//exibrir função direto no console:
console.log(mensagemOla(`Beatriz`));

//salvar resposta em variavel:
const resultado = mensagemOla(`Nice`);
console.log(resultado);
*/
const nome = prompt('Qual é o seu nome:'); //usei o prompt para deixar a atividade um pouco mais dinamica com interação na pagina html

const resposta = mensagemOla(nome);

alert(resposta);
console.log(resposta);
