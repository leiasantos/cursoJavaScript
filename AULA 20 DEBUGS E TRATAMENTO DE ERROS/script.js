/*
"use strict"

opa ='teste';
*/

// Método de debug:console.log


let a = 1;
let b = 2;
let c = 3;

if(c > a){
    a = b;
    console.log(a);
}

for(let i = 5; i > 0; i--){
    b++;
    a = a + c + 1;
    c+= 2;
    console.log(a);
}

if(b == a){
    a++;  
}
else{
    a = a + b + c;
}

console.log(a);

a = a * b;

console.log("________________________");

function checarNumero(valor){
    let resultado = Number(valor);
    if(Number.isNaN(resultado)){
        return null;
    }
    else{
        return resultado
    }
}

console.log(checarNumero(5));
console.log(checarNumero('teste'));

console.log("________________________");

function numeroChecar(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        console.log("Por favor, passe só números para o programa");
    }
    else{
        return number;
    }
}

numeroChecar(5);
numeroChecar('sadh');