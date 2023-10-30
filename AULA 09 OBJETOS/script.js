

let carro = {
    marca: "Ford", 
    modelo: "Ka", 
    ano: 2015, 
    placa: "ABC-123",

    buzina: function(){
        alert('biiiiiiiiiiiiiiiiiiiiiii')
    },
    completo : function(){
        return "A marca é  " + this.marca + "e o modelo é : " + this.modelo;
    }

};
/*
console.log(carro);
console.log(carro.ano);
console.log(carro.modelo);
console.log(carro.ano);

carro.buzina();*/

console.log(carro.completo());