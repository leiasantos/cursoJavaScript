// operador not ^

const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

// operador plus + 

console.log();

let muitosOuPoucosDigitos = /\d+/;
console.log(muitosOuPoucosDigitos.test("123"));
console.log(muitosOuPoucosDigitos.test("123456789"));
console.log(muitosOuPoucosDigitos.test(" "));


// operador question ?


console.log();

let opcional = /Prova\s?\d?/;
console.log(opcional.test("Prova"));
console.log(opcional.test("Prova 1"));
console.log(opcional.test("Prova 2"));


// operador de precisão

console.log();

let telefone = /\d{4,5} - \d{4}/;
console.log(telefone.test("4004-5050"));
console.log(telefone.test("99999-8080"));
console.log(telefone.test("999-999"));
console.log(telefone.test("9999-9"));


// Método exec

console.log();

let teste = /\d+/.exec("O número 100");
console.log(teste);
console.log(teste.index);

// Método match

console.log();

let teste1 = "O número 100".match(/\d+/);
console.log(teste1);
console.log(teste1.index);

// choice pattern

console.log();

let frutas = /\d+ (bananas|maçãs|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));