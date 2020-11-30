document.addEventListener("DOMContentLoaded", function (){
  
  let qtt = document.querySelectorAll(".qtt");
  let prixUnite = document.querySelectorAll(".prixUnite");
  let retrait = document.querySelectorAll(".retrait");
  let ajout = document.querySelectorAll(".ajout");
  let prix = document.querySelectorAll(".prix");
  let sommeTotal = document.querySelector('.total');
  let longueurtable = document.querySelectorAll('tr.mapizza');
  let sum = document.querySelector(".summarize");
  let pizza = document.querySelectorAll('.pizza');
  let commande = document.querySelector('.commande');  
  const liste = [];
  
  
  for (let i = 0 ; i < longueurtable.length ; i++){ 
      ajout[i].addEventListener("click", function(){
      qtt[i].innerHTML++ ;
      prix[i].innerHTML = prixUnite[i].innerHTML * qtt[i].innerHTML ;
        var montoto1 = 0;
          prix.forEach((total2)=>{
          montoto1 = montoto1 + Number(total2.innerHTML);
          
        });  
        
        function recap(i){
          if(qtt[i].innerHTML>0){
          liste[i] = pizza[i].innerHTML + "-" + qtt[i].innerHTML+"-";
          }else{
          liste[i]=""
          }
          sum.innerHTML = liste.join("-");
        };
        sommeTotal.innerHTML = "Total :" + montoto1 + "€";
        commande.classList.add("paye");
          recap(i);
      });
      retrait[i].addEventListener("click", function(){
          if( prix[i].innerHTML > 0 ){
          qtt[i].innerHTML--;
          prix[i].innerHTML = prix[i].innerHTML - prixUnite[i].innerHTML;
            var montoto2 = 0;
            prix.forEach((total2) =>{
            montoto2 = montoto2 - Number(-total2.innerHTML);
            });
            sommeTotal.innerHTML = "Total :" + montoto2 + "€"
      }});
  }
  });
  