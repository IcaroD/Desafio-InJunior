for (var i = 0; i < 5; i++) {
    var valor = parseInt(prompt(`Digite um número inteiro ${i + 1}/5:`))
    if (valor % 5 == 0 && valor % 3 == 0) {
        alert("fizzbuzz")
    }
    else if (valor % 3 == 0) {
        alert("fizz")
    }
    else if (valor % 5 == 0) {
        alert("buzz")
    }
}