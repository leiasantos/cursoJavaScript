
function soma(valor1, valor2){
    return valor1 + valor2;
}
document.getElementById("texto").innerHTML = soma(10,20);





function realParaDolar(real, contacaoDolar){
    return real * contacaoDolar;
}
let total = realParaDolar(10,5.04);
alert("O valor em real é de R$: " + total);



function alertaHello(){
   alert("Olá pessoal");
}

alertaHello();


function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
} 

var x = paraCelsius(77);

alert("A temperatura é de " + x + " graus celsius");