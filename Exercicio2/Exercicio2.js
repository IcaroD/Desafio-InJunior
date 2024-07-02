/* 
    No Console do Navegador
*/

function fahrenheitToCelcius(F) {
    var C = ((F - 32) / 9) * 5
    return C
}

var fahrenheit = parseFloat(prompt("Escreva a temperatura em Fahrenheit"))

var celcius = fahrenheitToCelcius(fahrenheit)

console.log("A temperatura em celcius é " + celcius)