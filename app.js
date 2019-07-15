let immagineAttuale=0;
const orologio1=document.getElementById("orologio1");
const orologio2=document.getElementById("orologio2");
const orologio3=document.getElementById("orologio3");


// go forward img

function buttonLeft(){
    if(immagineAttuale == 0){
        orologio1.style.transform="translate(100%,-50%)"
        orologio2.style.transform="translate(-50%,-50%)"
        orologio3.style.transform="translate(100%,-50%)"
        immagineAttuale++;
        return;
    }
    if(immagineAttuale == 1){
        orologio1.style.transform="translate(100%,-50%)"
        orologio2.style.transform="translate(100%,-50%)"
        orologio3.style.transform="translate(-50%,-50%)"
        immagineAttuale++;
        return;
    }
    if(immagineAttuale == 2){
        orologio1.style.transform="translate(-50%,-50%)"
        orologio2.style.transform="translate(100%,-50%)"
        orologio3.style.transform="translate(100%,-50%)"
        immagineAttuale=0;
        return;
    }
}


//go back img 


function buttonRight(){
    if(immagineAttuale == 0){
        orologio1.style.transform="translate(100%,-50%)"
        orologio2.style.transform="translate(100%,-50%)"
        orologio3.style.transform="translate(-50%,-50%)"
        immagineAttuale = 2 ;
        return;
    }
    if(immagineAttuale == 1){
        orologio1.style.transform="translate(-50%,-50%)"
        orologio2.style.transform="translate(100%,-50%)"
        orologio3.style.transform="translate(100%,-50%)"
        immagineAttuale--;
        return;
    }
    if(immagineAttuale == 2){
        orologio1.style.transform="translate(100%,-50%)"
        orologio2.style.transform="translate(-50%,-50%)"
        orologio3.style.transform="translate(100%,-50%)"
        immagineAttuale--;
        return;
    }   
 }

 //bottone che aggiunge alla cart per comprare 

 function buttonbuy(){
    console.log("Buy bottone cliccato");
}

 // query descrizione.json
 