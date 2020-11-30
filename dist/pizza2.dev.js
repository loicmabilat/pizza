"use strict";

var pizza = document.querySelectorAll(".pizza");
var assaisonnement = document.querySelectorAll(".assaisonnement");
var prixUnite = document.querySelectorAll(".prixUnitaire");
var qte = document.querySelectorAll(".qte");
var total = document.querySelectorAll(".total");
var btnLess = document.querySelectorAll(".less");
var btnMore = document.querySelectorAll(".more");
var sumTotal = document.querySelector(".TOTAL");

var _loop = function _loop(i) {
  btnLess[i].addEventListener("click", function () {
    if (qte[i].innerHTML <= 0) return; //return: mettre fin à l"execution de ma condition

    qte[i].innerHTML--;
    total[i].innerHTML = prixUnite[i].innerHTML * qte[i].innerHTML;
    sumTotal.innerHTML = total[i].innerHTML;
  });
  btnMore[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    total[i].innerHTML = prixUnite[i].innerHTML * qte[i].innerHTML;
    sumTotal.innerHTML = total[i].innerHTML;
  });
};

for (var i = 0; i < pizza.length; i++) {
  _loop(i);
}

;
var btnReset = document.getElementById("reset");
btnReset.addEventListener("click", function () {
  location.reload();
}, false);