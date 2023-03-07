let celsius = document.querySelector("#id-celsius")
let fahrenheit = document.querySelector("#id-fahrenheit")

let buttonC = document.querySelector(".button-c")
let buttonF = document.querySelector(".button-f")

let divC = document.querySelector(".div-c")
let divF = document.querySelector(".div-f")



function celsiusParaFahrenheit () {

    // calcula e converte ºcelsius pra ºfahrenheit
    let valorFahrenheit = (celsius.value * 9/5) + 32
    let temperaturaFahrenheit = valorFahrenheit.toFixed(2)

    // cria frase com o resultado
    let fraseC = document.createElement("p")
    fraseC.classList.add("fraseC");
    divC.appendChild(fraseC);
    fraseC.textContent = "A temperatura em Fahrenheit é: " + temperaturaFahrenheit + "ºF"
    
    //caso o usuário tente outra temperatura, a frase antiga é substituída por essa
    let alteraC = document.querySelector(".fraseC")
    alteraC.textContent = "A temperatura em Fahrenheit é: " + temperaturaFahrenheit + "ºF"
    fraseC.parentNode.replaceChild(alteraC, fraseC)
}

buttonC.addEventListener("click", celsiusParaFahrenheit)


//------------------------------------------------------------------------------------------
function fahrenheitParaCelsius () {

    // calcula e converte ºfahrenheit pra ºcelsius
    let valorCelsius = (fahrenheit.value - 32) * 5/9
    let temperaturaCelsius = valorCelsius.toFixed(2)

    //cria frase com o resultado
    let fraseF = document.createElement("p")
    fraseF.classList.add("fraseF")
    divF.appendChild(fraseF)
    fraseF.textContent = "A temperatura em Celsius é: " + temperaturaCelsius + "ºC"

    //caso o usuário tente outra temperatura, a frase antiga é substituída por essa
    let alteraF = document.querySelector(".fraseF")
    alteraF.textContent = "A temperatura em Celsius é: " + temperaturaCelsius + "ºC"
    fraseF.parentNode.replaceChild(alteraF, fraseF)
}

buttonF.addEventListener("click", fahrenheitParaCelsius);




// calculos:
// celsius para Fahrenheit
// (celsius * 9/5) + 32

// Fahrenheit para celsius
// (fahrenheit - 32) * 5/9
