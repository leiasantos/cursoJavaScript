
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      console.log("Sunday");
      break;
    case 1:
      day = "Monday";
      console.log("Monday");
      break;
    case 2:
       day = "Tuesday";
       console.log("Tuesday");
      break;
    case 3:
      day = "Wednesday";
      console.log("Wednesday");
      break;
    case 4:
      day = "Thursday";
      console.log("Thursday");
      break;
    case 5:
      day = "Friday";
      console.log("Friday");
      break;
    case 6:
      day = "Saturday";
      console.log("Saturday");
  }


function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
        case "rosa":
            document.body.style.backgroundColor = "pink";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel";

    }


}

function diaDaSemana(){
    var dia =  new Date().getDay();

    console.log(dia);

    switch (dia) {

        case 0:
            document.getElementById("date").innerHTML = "Hoje é Domingo";
            break;

        case 1:
            document.getElementById("date").innerHTML  = "Hoje é Segunda";
            break;


        case 2:
            document.getElementById("date").innerHTML  = "Hoje é Terça";
            break;


        case 3:
            document.getElementById("date").innerHTML  = "Hoje é Quarta";
            break;

        case 4:
            document.getElementById("date").innerHTML  = "Hoje é Quinta";
            break;


        case 5:
            document.getElementById("date").innerHTML  = "Hoje é Sexta";
            break;

        case 6:
            document.getElementById("date").innerHTML  = "Hoje é Sabado";
            break;
        default: document.getElementById("date").innerHTML ="Não sei que dia é ..."


    }
}


