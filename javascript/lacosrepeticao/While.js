const leia = require("readline-sync");

let continua = true;
let numero1, numero2, resultado;

//console.log("\n++++++++++++++++++MENU++++++++++++++++")
//continua = leia.keyInYNSstrict("\nDeseja usar calculadora de soma? ")
//console.log("++++++++++++++++++++++++++++++++++++++");

while(continua){
    numero1 = leia.questionInt("Digite o primeiro valor: ");
    numero2 = leia.questionInt("Digite o segundo valor: ");

    resultado = numero1 + numero2;
    console.log("O resultado da soma é: " + resultado)

console.log("\n++++++++++++++++++MENU++++++++++++++++");
continua = leia.keyInYNSstrict("\nDeseja continuar? ");
console.log("++++++++++++++++++++++++++++++++++++++");


}