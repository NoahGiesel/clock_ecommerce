
let immagineAttuale = 0 ; 
const orologio1 = document.getElementById("orologio1");
const orologio2 = document.getElementById("orologio2");
const orologio3 = document.getElementById("orologio3");

function buttonLeft() {  
    if(immagineAttuale == 0 ) { 
        orologio1.style.transform = "translate(100%, -50%) "
        orologio2.style.transform = "translate(-50%, -50%) "
        orologio3.style.transform = "translate(100%, -50%) "
         immagineAttuale++; 
        return;
    }

    if(immagineAttuale == 1 ) {
        orologio1.style.transform = "translate(100%, -50%) "
        orologio2.style.transform = "translate(100%, -50%) "
        orologio3.style.transform = "translate(-50%, -50%) "
         immagineAttuale++;
        return;
    }
    if(immagineAttuale == 2 ) {
        orologio1.style.transform = "translate(-50%, -50%) "
        orologio2.style.transform = "translate(100%, -50%) "
        orologio3.style.transform = "translate(100%, -50%) "
         immagineAttuale = 0;
        return;
    }
 
}
function buttonRight() { 
    console.log("cliccato right")
}