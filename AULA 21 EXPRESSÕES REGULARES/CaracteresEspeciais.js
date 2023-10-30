const pontoRegex = /./;

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

console.log();

const dRegex = /\d/; // [0-9]
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));

console.log();

const sRegex = /\s/;
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));


console.log();

const wRegex = /\w/;
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));

console.log();

let ano = /\d\d\d\d/;
console.log(ano.test("05"));
console.log(ano.test("2019"));
console.log(ano.test("opa"));

console.log();

let palavrasTresLetras = /\w\w\w/;
console.log(palavrasTresLetras.test("dia"));
console.log(palavrasTresLetras.test("ano"));
console.log(palavrasTresLetras.test("oi"));
console.log(palavrasTresLetras.test("teste"));

console.log();

