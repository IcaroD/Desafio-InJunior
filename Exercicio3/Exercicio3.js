var sum = 0

for (var i = 0; i < 3; i++) {
    var nota = parseFloat(prompt("Qual é a nota número" + (i + 1)))
    sum += nota
}

media = sum / 3

if (media >= 6) {
    alert("Aprovado")
}
else {
    alert("Reprovado")
}