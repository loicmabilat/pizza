"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var table = document.querySelectorAll("table");
var qtt = document.querySelectorAll(".qtt");
var prixUnite = document.querySelectorAll(".prixUnite");
var retrait = document.querySelectorAll(".retrait");
var ajout = document.querySelectorAll(".ajout");
var prix = document.querySelectorAll(".prix");
var sommeTotal = document.querySelectorAll('.total');

var _loop = function _loop(i) {
  ajout[i].addEventListener("click", function () {
    qtt[i].innerHTML++;
    prix[i].innerHTML = prixUnite[i].innerHTML * qtt[i].innerHTML;
    sommeTotal.innerHTML = parseInt(sommeTotal.innerHTML) + parseInt(prix[i].innerHTML);
    console.log(prix[i].innerHTML);
    console.log(_typeof(sommeTotal.innerHTML));
  });
  retrait[i].addEventListener("click", function () {
    if (prix > 0) {
      qtt[i].innerHTML--;
      prix[i].innerHTML = prixUnite[i].innerHTML * qtt[i].innerHTML;
    }

    ;
    sommeTotal.innerHTML = parseInt(sommeTotal.innerHTLM) + parseInt(prix[i].innerHTML);
  });
};

for (var i = 0; i <= table.length; i++) {
  _loop(i);
}