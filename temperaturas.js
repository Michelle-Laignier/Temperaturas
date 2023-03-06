let celsius = document.querySelector("#id-celsius")
let fahrenheit = document.querySelector("#id-fahrenheit")
let buttonC = document.querySelector(".button-c")
let buttonF = document.querySelector(".button-f")
let divC = document.querySelector(".div-c")
let divF = document.querySelector(".div-f")

function celsiusParaFahrenheit () {
    let valorFahrenheit = (celsius.value * 9/5) + 32
    let temperaturaFahrenheit = valorFahrenheit.toFixed(2)

    let fraseC = document.createElement("p")
    fraseC.classList.add("fraseC");
    divC.appendChild(fraseC);
    fraseC.textContent = "A temperatura em Fahrenheit é: " + temperaturaFahrenheit + "ºF"
}

buttonC.addEventListener("click", celsiusParaFahrenheit)

//------------------------------------------------------------------------------------------
function fahrenheitParaCelsius () {
    let valorCelsius = (fahrenheit.value - 32) * 5/9
    let temperaturaCelsius = valorCelsius.toFixed(2)

    let fraseF = document.createElement("p")
    fraseF.classList.add("fraseF")
    divF.appendChild(fraseF)
    fraseF.textContent = "A temperatura em Celsius é: " + temperaturaCelsius + "ºC"
}

buttonF.addEventListener("click", fahrenheitParaCelsius);

// celsius para Fahrenheit
// (celsius * 9/5) + 32

// Fahrenheit para celsius
// (fahrenheit - 32) * 5/9