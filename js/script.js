  /////CELCIUS/////

const celcius = document.getElementById("celcius");
const cInput = document.getElementById("cInput");
const cSubmit = document.getElementById("cCalc");
const cTemp = document.getElementById("cTemp");

function fahrenheitTemp() {
    return (cInput.value - 32) / 1.8;
};

 cSubmit.addEventListener("click", function(e) {
 e.preventDefault();
  cTemp.innerHTML = fahrenheitTemp();
 cInput.value = "";
});

/////FAHRENHEIT/////

const fahrenheit = document.getElementById("fahrenheit");
const fInput = document.getElementById("fInput");
const fSubmit = document.getElementById("fCalc");
const fTemp = document.getElementById("fTemp");


function celciusTemp() {
    return (fInput.value * 1.8) + 32;
};

fSubmit.addEventListener("click", function(e) {
 e.preventDefault();
  fTemp.innerHTML = celciusTemp();
 fInput.value = "";
});


/////CLEAR/////

const clear = document.getElementById("clear");

clear.addEventListener("click", function() {
 fTemp.innerHTML = "";
 cTemp.innerHTML = "";
});
