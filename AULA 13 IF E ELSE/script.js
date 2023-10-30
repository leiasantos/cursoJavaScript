
var interruptor = "on";

if(interruptor == "on"){
   console.log('A lampada está ligada'); 
}
else{
    console.log('A lampada está desligada'); 
}

console.log("______________________")

var hora = new Date().getHours();
console.log(hora);

if(hora < 12){
    console.log('Bom dia');
}
else if(hora < 18){
    console.log('Boa tarde');
}
else{
    console.log('Boa noite');
}


function verificar(){

    let nome = document.getElementById("nome").Value;

    if(nome == " " || nome == null){
        let p = document.getElementById("teste");
       p.innerHTML = "O campo não pode estar vazio";
       p.style.color = "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "Respondido";
        p.style.color = "green";
    }

}