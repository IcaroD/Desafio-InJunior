function notaEmCaractere(nota) {
    if (nota >= 90) {
        return "A"
    }
    else if (nota >= 80) {
        return "B"
    }
    else if (nota >= 70) {
        return "C"
    }
    else if (nota >= 60) {
        return "D"
    }
    else {
        return "F"
    }
}

while (true) {
    var nota = prompt("Escreva uma nota de 0 à 100 (caso queira sair loop digite sair):")
    if (nota.toUpperCase() == "SAIR") {
        break
    }

    nota = parseFloat(nota)

    if (nota < 100 && nota > 0) {
        alert(notaEmCaractere(nota))
    }
    else {
        alert("Número inválido")
    }
}