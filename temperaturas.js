let celsius = 28
let fahrenheit = 10

function celsiusParaFahrenheit () {
    let valorFahrenheit = (celsius * 9/5) + 32
    let temperaturaFahrenheit = valorFahrenheit.toFixed(2)
    console.log("A temperatura em Fahrenheit é: " + temperaturaFahrenheit + "ºF");
}
celsiusParaFahrenheit()

function fahrenheitParaCelsius () {
    let valorCelsius = (fahrenheit - 32) * 5/9
    let temperaturaCelsius = valorCelsius.toFixed(2)
    console.log("A temperatura em Celsius é: " + temperaturaCelsius + "ºC");
}
fahrenheitParaCelsius()

// celsius para Fahrenheit
// (celsius * 9/5) + 32

// Fahrenheit para celsius
// (fahrenheit - 32) * 5/9