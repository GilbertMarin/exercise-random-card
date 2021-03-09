window.onload = function() {
  
    let imagen = document.getElementById("type");
    let numero = document.getElementById("numero");

    let cardnumber = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    let tipoCarta = ["spades", "hearts", "clubs", "diamonds"];

    
    var tipoCartaSelec = Math.floor(Math.random(tipoCarta.length)*4);
    let tipo = imagen.classList.add(tipoCarta[tipoCartaSelec]);
    


    var cardselec = Math.floor(Math.random(cardnumber.length)*14);
    let num = numero.querySelector("p");
    num.innerHTML = cardnumber[cardselec];


};