var submit = document.getElementById("submit");
var price = document.getElementById("price");
var tip = document.getElementById("tip");
var tipAMT = document.getElementById("tipAMT");
var total = document.getElementById("total");


submit.onclick = function() {
    event.preventDefault();
    console.log("clicked");
    console.log(price.value);
    console.log(tip.value)
}