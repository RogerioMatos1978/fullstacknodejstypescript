"use strict";
console.log("Como criar funções");
// Criar a função para receber duas variaveis do tipo string e retornar a string
function getUser(nome, ultimoNome) {
    return `${nome} ${ultimoNome}`;
}
// Chamar a função getUser e imprimir o valor
console.log(getUser("Rogerio", "Matos"));
