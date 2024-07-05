var conta = {
    receitas: [],
    depesas: []
}

function saldo() {
    var ganho = conta.receitas.reduce((acc, receita) => acc + receita, 0)
    var perda = conta.depesas.reduce((acc, depesa) => acc + depesa, 0)
    var total = ganho - perda
    situacao = "positivo"
    if (total < 0) {
        situacao = "negativo"
    }
    alert(`A família está com saldo ${situacao}\nValor do saldo: ${total}`)
}

conta.receitas = [2000, 300, 200]
conta.depesas = [3000, 500, 100]

saldo()