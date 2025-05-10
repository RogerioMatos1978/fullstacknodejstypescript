// Criar variavel do tipo String
const message: string = "Ola Mundo";
console.log(message);
// Criar variavel do tipo Number
const idade: number = 47;
console.log(idade);
// Criar variavel do tipo String com format docString ${}
const user: string = "Rogerio";
console.log(`Usuario: ${user}`);
// Criar variavel do tipo boolean
const situation: boolean = true;
console.log(`Situação: ${situation}`);
// Criar variavel do tipo array do tipo string
const courses: string[] = ["Curso de React", "Curso de Node.js"];
console.log(`Cursos: ${courses}`);
// Criar variavel do tipo array  do tipo number
const amout: number[] = [1,2,3,4,6,10];
console.log(`Numeros: ${amout}`);
// Criar variavel do tipo array  do tipo number
const numerosArray: number[] = [1,2,3,4,6,10];
console.log(`Numeros: ${numerosArray}`);
// Criar variavel do tipo "tuple" array com tipos diferentes
var person: [string, number, boolean];
person = ["Rogerio", 120, true];
console.log(`Usuário: ${person[0]}`);
console.log(`Velocidade: ${person[1]}`);
console.log(`Usuário: ${person[2]}`);
// Criar variavel do tipo enum. Representa um consjunto de valores nomerados.
enum DiaDaSemana{
    Domingo = 1,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
let dia: DiaDaSemana;
console.log(`Número que represnta domingo: ${DiaDaSemana.Domingo}`);
console.log(`Número que represnta segunda: ${DiaDaSemana.Segunda}`);
// Criar varivael do tipo any, atribuir qualquer tipo de valor para a variavel
let data: any;
data = 10; // Atribuir um valor do tipo número
console.log(`Valor atribuido a variavel data do tipo "any": ${data}`);
data = "Rogerio Matos.";
console.log(`O Valor atribuido a variavel data do tipo "any" foi texo: ${data}`);
// Criar variavel do tipo null e undefined
let variavelNull: null = null;
let variavelUndefined: undefined = undefined;
console.log(`Variavel do tipo null: ${variavelNull}`);
console.log(`Variavel do tipo undefined: ${variavelUndefined}`);
// Criar variavel do tipo objeto
interface Cliente{
    name: string;
    quantidade: number;
}
let cliente: Cliente ={
    name: "Rogerio Matos",
    quantidade: 10
}
console.log(`Nome do Cliente: ${cliente.name}`);
console.log(`Quantidade de compras do Cliente: ${cliente.quantidade}`);
// Criar variavel utilizando union indicando um ou mais tipo
const valorDoisTipos: string | boolean = true; 
console.log(`Valor pode ser string ou boolean: ${valorDoisTipos}`);
// const valorDoisTipos: string | boolean = "Rogerio Matos";
// console.log(`Valor pode ser string ou boolean: ${valorDoisTipos}`);


