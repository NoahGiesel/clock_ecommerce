let immagineAttuale=0;

let clock = 0 ;  

let contatoreNotifica = 0 ; 


const orologio1=document.getElementById("orologio1");
const orologio2=document.getElementById("orologio2");
const orologio3=document.getElementById("orologio3");


const titolo =document.getElementById("titolo");
const materiale =document.getElementById("materiale");
const descrizione =document.getElementById("descrizione");
const prezzo =document.getElementById("prezzo");


const notifica = document.getElementById("notifica") ; 




// go forward img

function buttonLeft(){

    if(clock == 2) {
        clock = 0; 
        descrizioneFetch(clock);

    }else {
        clock++ ; 
        descrizioneFetch(clock);

    }
  


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

 
    if(clock == 0) {
        clock = 2; 
        descrizioneFetch(clock);

    }else {
        clock-- ; 
        descrizioneFetch(clock);

    }



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

 //bottone che aggiunge alla cart per comprare  e notifica incrementa

 function buttonBuy(){
    contatoreNotifica++;
    notifica.innerHTML = contatoreNotifica;
}








 // query descrizione.json
 

 const descrizioneFetch = input => {

    fetch("descrizione.json")
    .then(response => response.json())
    .then(data => {
            
            titolo.innerHTML = data[input].titolo;
            materiale.innerHTML = data[input].materiale;
            descrizione.innerHTML = data[input].descrizione;
            prezzo.innerHTML = data[input].prezzo;
        
        })

  
 }


 descrizioneFetch(clock);

