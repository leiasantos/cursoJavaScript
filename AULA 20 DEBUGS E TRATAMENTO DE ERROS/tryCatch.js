
let b = 2;

try{

    let a  = 2 + b;
}
catch(e){
    console.log(e);
}
console.log("_______________");
console.log("Finally");

try{
    let c = a + b;
}
catch(error){
    console.log("Algo deu errado: " + error);
}
finally{
    console.log("Executou")
}

console.log("_______________");
console.log("Assertions");

function iterarArray(arr){
    if(arr.length == 0){
        throw new Error("O array precisa ter elementos");
    }
    else{
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
}