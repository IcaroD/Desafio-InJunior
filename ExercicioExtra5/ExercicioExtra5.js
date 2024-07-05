/* 
    No Console do Navegador
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

console.log("Primeiro ponto:")
// Primeiro ponto

const cont_category = booksByCategory.length
console.log("O número de categorias é " + cont_category)

booksByCategory.forEach((theme) => console.log("O número de livros na categoria " + theme.category + " é de " + theme.books.length))

console.log("Segundo ponto:")
// Segundo ponto

var qte_author = 0
booksByCategory.forEach((theme) => {
    theme.books.forEach((book) => {
        qte_author += book.author.split(" e ").length
    })
})

console.log("Quantidade total de autores é de " + qte_author)

console.log("Terceiro ponto:")
// Terceiro ponto

console.log("livros do autor Augusto Cury:")
booksByCategory.forEach((theme) => {
    theme.books.forEach((book) => {
        let authors = book.author.split(" e ") 
        if (authors.includes("Augusto Cury")){
            console.log(book.title)
        }
    })
})

console.log("Quarto ponto:")
// Quarto ponto

function pesquisarAutor(nomeDoAutor) {
    console.log(`livros do autor ${nomeDoAutor}:`)
    var books = []
    booksByCategory.forEach((theme) => {
        theme.books.forEach((book) => {
            let authors = book.author.split(" e ") 
            if (authors.includes(nomeDoAutor)){
                books.push(book.title)
            }
        })
    })
    return books
}

var nome = prompt("Digite um nome de autor:")
const listaDeLivros = pesquisarAutor(nome)
console.log(listaDeLivros)