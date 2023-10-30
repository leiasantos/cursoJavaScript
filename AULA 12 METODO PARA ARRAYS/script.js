
const pessoa = [" Léia ", " Santos ", 36, " Estudante de engenharia da computação"];

pessoa.pop(); // Remove um elemento no final do array.

pessoa.push("Solteira"); // adiciona um elemento no array

//pessoa.shift(); // Remove um elemento no início do array.


pessoa.splice(2,0,"Silva") //  permite adicionar, atualizar e remover elementos em um array. 


 document.getElementById("teste").innerHTML = pessoa.join(" * ");


 // concatenação de arrays

 const lista1 = ["Banana "," Laranja "," Maça "," Jaca "," Morango "];
 const lista2 = [" Alface "," Cenoura "," Cebola "," Brocolis "];

 const superLista = lista1.concat(lista2);

 document.getElementById("lista").innerHTML = superLista;


 //  Cria uma cópia rasa de um array.

 const jogadores = [" Rivelino ", " Pelé ", " Messi "," Maradona "];
 const craques = jogadores.slice(2);

 const jogOrdem = jogadores.sort(); // ordem alfabetica

// ordenação númerica
 const numeros = [100,90,80,70,60,50,40,30,20,10];
 numeros.sort(function(a,b){return a - b});

 // pegar maior número de um array
 function MaiorNumero(array){
    return Math.max.apply(null,array);
 }

 // pegar menor número de um array
 function MenorNumero(array){
    return Math.min.apply(null,array);
 }

 // filtragem de números

 const maior20 = numeros.filter(filtragem);
 function filtragem(value, index, array){
    return value > 20;
 }
 
 document.getElementById("jogadores").innerHTML = craques;
 document.getElementById("ordem").innerHTML = jogOrdem;
 document.getElementById("numeros").innerHTML = numeros;
 document.getElementById("numeroMaior").innerHTML = MaiorNumero(numeros);
 document.getElementById("numeroMenor").innerHTML = MenorNumero(numeros);
 document.getElementById("filtragem").innerHTML = maior20