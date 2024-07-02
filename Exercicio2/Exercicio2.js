function fahrenheitToCelcius(F) {
    var C = ((F - 32) / 9) * 5
    return C
}

var fahrenheit = parseFloat(prompt("Escreva a temperatura em Fahrenheit"))

var celcius = fahrenheitToCelcius(fahrenheit)

alert("A temperatura em celcius é " + celcius)