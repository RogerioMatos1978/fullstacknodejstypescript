"use strict";
// Criar variavel do tipo String
const message = "Ola Mundo";
console.log(message);
// Criar variavel do tipo Number
const idade = 47;
console.log(idade);
// Criar variavel do tipo String com format docString ${}
const user = "Rogerio";
console.log(`Usuario: ${user}`);
// Criar variavel do tipo boolean
const situation = true;
console.log(`Situação: ${situation}`);
// Criar variavel do tipo array do tipo string
const courses = ["Curso de React", "Curso de Node.js"];
console.log(`Cursos: ${courses}`);
// Criar variavel do tipo array  do tipo number
const amout = [1, 2, 3, 4, 6, 10];
console.log(`Numeros: ${amout}`);
// Criar variavel do tipo array  do tipo number
const numerosArray = [1, 2, 3, 4, 6, 10];
console.log(`Numeros: ${numerosArray}`);
// Criar variavel do tipo "tuple" array com tipos diferentes
var person;
person = ["Rogerio", 120, true];
console.log(`Usuário: ${person[0]}`);
console.log(`Velocidade: ${person[1]}`);
console.log(`Usuário: ${person[2]}`);
// Criar variavel do tipo enum. Representa um consjunto de valores nomerados.
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Domingo"] = 1] = "Domingo";
    DiaDaSemana[DiaDaSemana["Segunda"] = 2] = "Segunda";
    DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 3] = "Ter\u00E7a";
    DiaDaSemana[DiaDaSemana["Quarta"] = 4] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 5] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 6] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 7] = "Sabado";
})(DiaDaSemana || (DiaDaSemana = {}));
let dia;
console.log(`Número que represnta domingo: ${DiaDaSemana.Domingo}`);
console.log(`Número que represnta segunda: ${DiaDaSemana.Segunda}`);
// Criar varivael do tipo any, atribuir qualquer tipo de valor para a variavel
let data;
data = 10; // Atribuir um valor do tipo número
console.log(`Valor atribuido a variavel data do tipo "any": ${data}`);
data = "Rogerio Matos.";
console.log(`O Valor atribuido a variavel data do tipo "any" foi texo: ${data}`);
