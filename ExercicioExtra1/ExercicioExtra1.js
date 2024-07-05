var positivos = 0
for (var i = 0; i < 6; i++) {
    var valor = parseFloat(prompt(`Ensira um valor ${i + 1}/6:`))
    if (valor > 0) {
        positivos++
    }
}

alert(`A quantidade de positivos é de ${positivos}`)