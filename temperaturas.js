let celsius = document.querySelector("#id-celsius")
let fahrenheit = document.querySelector("#id-fahrenheit")
let buttonC = document.querySelector(".button-c")
let buttonF = document.querySelector(".button-f")

console.log(celsius);
console.log(fahrenheit);

function celsiusParaFahrenheit () {
    let valorFahrenheit = (celsius.value * 9/5) + 32
    let temperaturaFahrenheit = valorFahrenheit.toFixed(2)
    console.log("A temperatura em Fahrenheit é: " + temperaturaFahrenheit + "ºF");
}

function fahrenheitParaCelsius () {
    let valorCelsius = (fahrenheit.value - 32) * 5/9
    let temperaturaCelsius = valorCelsius.toFixed(2)
    console.log("A temperatura em Celsius é: " + temperaturaCelsius + "ºC");
}

buttonC.addEventListener("click", () => {
    celsiusParaFahrenheit();
});

buttonF.addEventListener("click", () => {
    fahrenheitParaCelsius();
});

// celsius para Fahrenheit
// (celsius * 9/5) + 32

// Fahrenheit para celsius
// (fahrenheit - 32) * 5/9