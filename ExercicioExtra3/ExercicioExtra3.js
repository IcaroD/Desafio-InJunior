const valores = []
const original = []
for (var i = 0; i < 5; i++) {
    var valor = parseInt(prompt(`Digite um valor inteiro ${i + 1}/5:`))
    valores.push(valor)
    original.push(valor)
}

alert(`Ordem crescente: ${valores.sort((a, b) => a-b)}\n\nSequência Original ${original}`)