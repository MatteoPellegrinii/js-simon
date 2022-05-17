const content = document.querySelector(".content");
const addBtn = document.querySelector(".add");

let Ncasuali = [];

addBtn.addEventListener("click", function(){

    
    while (Ncasuali.length < 5) {
        let i = Math.floor(Math.random()*10)+1;
        Ncasuali.push(i);
    }  
    console.log(Ncasuali);
    const numelem = document.createElement("div");
    content.append(numelem);
    numelem.append(Ncasuali);

    setTimeout(myFunction, 5000);

});


function myFunction(){
    let risposta = prompt("Qali sono i numeri inseriti?")
    console.log(risposta);
    return risposta;
    
}




