
// comando base para pegar a data 
let data = new Date();
console.log(data);


//  pegar o ano atual com 4 dígitos
let ano = data.getFullYear();
console.log(ano);


// pegar o mes atual, sendo que 0 até a 11 , 0 janeiro … 11 dezembro

let mes = data.getMonth();
//console.log(mes);

const mesesDoAno = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"

]
    let mesEscrito = mesesDoAno[data.getMonth()];
    console.log(mesEscrito)

// dia do mês - 1 até 31
let diaMes = data.getDate();
console.log(diaMes)

// dia da semana

let diaSemana = data.getDay();

const diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]

let semana = diasDaSemana[data.getDay()];
console.log(semana);


// pegar a hora - de 0 até 23

let hora = data.getHours();
console.log(hora);

//  pegar minutos  de 0 até 59

let minutos = data.getMinutes();
console.log(minutos)

// pegar segundos  de 0 até 59

let segundos = data.getSeconds();
console.log(segundos);

// pegar milisegundos - de 0 até 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);


// PEGAR A DATA NO PADRÃO BRASILEIRO DIA / MES / ANO

let dataBr = data.toLocaleString('pt-BR');
console.log(dataBr);


// COMPARAR DATAS - MAIOR OU MENOR . EX: VENCIMENTOS

var hoje = new Date();
var vencimento = new Date(2023, 9, 19);

if(hoje > vencimento){
    console.log("Sua conta está vencida!");
}else{
    console.log("Ainda não está no vencimento");
}

// DIFERENÇA ENTRE DUAS DATAS EM DIAS

var dataInicial = new Date();
var dataFinal = new Date(2023,11,31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias + " dias");