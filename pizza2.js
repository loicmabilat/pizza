
let pizza = document.querySelectorAll(".pizza");
let assaisonnement = document.querySelectorAll(".assaisonnement");
let prixUnite = document.querySelectorAll(".prixUnitaire");
let qte = document.querySelectorAll(".qte");
let total = document.querySelectorAll(".total");
const btnLess = document.querySelectorAll(".less");
const btnMore = document.querySelectorAll(".more");

let sumTotal = document.querySelector(".TOTAL");

for (let i = 0; i < pizza.length; i++){
  btnLess[i].addEventListener("click", function(){
    if (qte[i].innerHTML <= 0) return;   //return: mettre fin à l"execution de ma condition
    qte[i].innerHTML--;
    total[i].innerHTML = prixUnite[i].innerHTML * qte[i].innerHTML;
    sumTotal.innerHTML = total[i].innerHTML;
});
  btnMore[i].addEventListener("click", function() {
    qte[i].innerHTML++;
    total[i].innerHTML = prixUnite[i].innerHTML * qte[i].innerHTML;
    sumTotal.innerHTML = total[i].innerHTML;
});
};



const btnReset = document.getElementById("reset");

btnReset.addEventListener("click", function() {
  location.reload();
}, 
false);
