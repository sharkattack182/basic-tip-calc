var submit = document.getElementById("submit");
var price = document.getElementById("price");
var tip = document.getElementById("tip");
var tipAMT = document.getElementById("tipAMT");
var total = document.getElementById("total");

submit.onclick = function () {
  event.preventDefault();
  console.log("clicked");
  let priceVal = price.value;
  let tipVal = tip.value;

  var tipAmount = priceVal * (tipVal / 100);

  tipAMT.innerHTML = tipAmount;
  total.innerHTML = parseInt(priceVal) + parseInt(tipAmount);
};
