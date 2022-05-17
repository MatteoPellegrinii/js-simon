const content = document.querySelector(".content");
const addBtn = document.querySelector(".add");

let Ncasuali = [];

addBtn.addEventListener("click", function(){

    for (let i = 0; Ncasuali.length < 5; i++) {

        let numeri = Math.floor(Math.random()*10)+1;
        Ncasuali.push(numeri);

        
    }
    content.append(parseInt(numeri));
    
    setTimeout(myFunction, 5000);

});

function myFunction(){
    let risposta = parseInt(prompt("Quali sono i numeri inseriti?"))
    console.log(risposta);
    return risposta;

    if (risposta = numeri) {
        
    }
}






