// A função recusiva é de multiplicação, então xn = x * n
function multiplicacao(x, n){
    if (n == 0) {
        return 0
    }
    else if (n < 0) {
        return - x + multiplicacao(x, n + 1)
    }
    else {
        return x + multiplicacao(x, n - 1)
    }
}

var x = parseInt(prompt("Digite um número inteiro:"))
var n =  parseInt(prompt("Digite um número inteiro:"))

const xn = multiplicacao(x, n)

alert(`A função deu resultado de ${xn}`)