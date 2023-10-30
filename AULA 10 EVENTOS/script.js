
function eventoClick(){
    alert('Evento click');
    document.body.style.backgroundColor = "pink";
}

function eventodbl(){
    alert('duplo click');
    document.body.style.color = "blue";

}

function mudaCor(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "#FDB44B";
  
}

function voltaCor(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "aquamarine";
  
}

/*
function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append('O mouse moveu<br>');
}*/


function limpaTexto(){
    document.getElementById("campoTexto").value = "";
}