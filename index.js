window.onload = function() {
  
    let imagen = document.getElementsByName("tipoCarta");
    let numero = document.getElementById("Numero");

    let cardnumber = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    let tipoCarta = ["https://dliziasexpress.webnode.cr/_files/200000101-b76c1b76c3/200/ScreenHunter_129%20Mar.%2008%2020.43.jpg",
     "https://dliziasexpress.webnode.cr/_files/200000100-143191431b/200/ScreenHunter_128%20Mar.%2008%2020.43.jpg",
      "https://dliziasexpress.webnode.cr/_files/200000099-3c4983c49b/200/ScreenHunter_127%20Mar.%2008%2020.43.jpg",
       "https://dliziasexpress.webnode.cr/_files/200000098-40abf40ac2/200/ScreenHunter_126%20Mar.%2008%2020.43.jpg"];

    
    var tipoCartaSelec = Math.floor(Math.random(tipoCarta.length)*4);
    let tipo = imagen.querySelector("img scr");
    tipo.innerHTML = tipoCarta[tipoCartaSelec];


    var cardselec = Math.floor(Math.random(cardnumber.length)*14);
    let num = numero.querySelector("h1");
    num.innerHTML = cardnumber[cardselec];






    


};