  /////CELCIUS/////

var celcius = document.getElementById("celcius");
var cInput = document.getElementById("cInput");
var cSubmit = document.getElementById("cCalc");
var cTemp = document.getElementById("cTemp");

function fahrenheitTemp() {
    return (cInput.value - 32) / 1.8;
};

 cSubmit.addEventListener("click", function(e) {
 e.preventDefault();
  cTemp.innerHTML = fahrenheitTemp();
 cInput.value = "";
});

/////FAHRENHEIT/////

var fahrenheit = document.getElementById("fahrenheit");
var fInput = document.getElementById("fInput");
var fSubmit = document.getElementById("fCalc");
var fTemp = document.getElementById("fTemp");


function celciusTemp() {
    return (fInput.value * 1.8) + 32;
};

fSubmit.addEventListener("click", function(e) {
 e.preventDefault();
  fTemp.innerHTML = celciusTemp();
 fInput.value = "";
});


/////CLEAR/////

var clear = document.getElementById("clear");

clear.addEventListener("click", function() {
 fTemp.innerHTML = "";
 cTemp.innerHTML = "";
});
