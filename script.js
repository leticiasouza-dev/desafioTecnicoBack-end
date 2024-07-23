// #1- usando o json abaixo, retire somente os produtos em que o preço seja maior do que 30 Reais #Explique detalhadamente por que voce decidiu essa solução e não outra
// const response = [
//     {
//         "nome": "Loja Exemplo 1",
//         "endereço": {
//             "rua": "Rua Exemplo 1",
//             "cidade": "Exemplo City 1"
//         },
//         "produtos": [
//             {"id": 1, "nome": "Produto A", "preço": 29.99},
//             {"id": 2, "nome": "Produto B", "preço": 34.99}
//         ]
//     },
//     {
//         "nome": "Loja Exemplo 2",
//         "endereço": {
//             "rua": "Rua Exemplo 2",
//             "cidade": "Exemplo City 2"
//         },
//         "produtos": [
//             {"id": 1, "nome": "Produto C", "preço": 45.50},
//             {"id": 2, "nome": "Produto D", "preço": 15.00}
//         ]
//     },
//     {
//         "nome": "Loja Exemplo 3",
//         "endereço": {
//             "rua": "Rua Exemplo 3",
//             "cidade": "Exemplo City 3"
//         },
//         "produtos": [
//             {"id": 1, "nome": "Produto E", "preço": 22.00},
//             {"id": 2, "nome": "Produto F", "preço": 39.99}
//         ]
//     },
//     {
//         "nome": "Loja Exemplo 4",
//         "endereço": {
//             "rua": "Rua Exemplo 4",
//             "cidade": "Exemplo City 4"
//         },
//         "produtos": [
//             {"id": 1, "nome": "Produto G", "preço": 55.00},
//             {"id": 2, "nome": "Produto H", "preço": 5.99}
//         ]
//     },
//     {
//         "nome": "Loja Exemplo 5",
//         "endereço": {
//             "rua": "Rua Exemplo 5",
//             "cidade": "Exemplo City 5"
//         },
//         "produtos": [
//             {"id": 1, "nome": "Produto I", "preço": 33.00},
//             {"id": 2, "nome": "Produto J", "preço": 27.50}
//         ]
//     }
// ]

// utilizei os metodos de percorrer o array e fiz a filtragem, maneira mais facil e mais prática de realizar
// const produtosFiltrados = response.map(produtos => produtos.produtos.filter(produto => produto.preço > 30))
// console.log(produtosFiltrados);

// #2-Use o JSON abaixo para capturar o preço do produto B #explique detalhadamente por que escolheu essa solução e não outra
// const responsejson = {
//     "nome": "Loja Exemplo",
//     "endereço": {
//         "rua": "Rua Exemplo",
//         "cidade": "Exemplo City"
//     },
//     "produtos": [
//         {"id": 1, "nome": "Produto A", "preço": 29.99},
//         {"id": 2, "nome": "Produto B", "preço": 19.99}
//     ]
// }

// const produtoB = responsejson.produtos.find(produto => produto.nome === "Produto B" );
// const preçoProdutoB = produtoB.preço;
// console.log(`R$${preçoProdutoB} valor do produto b`);

// console.log(produtoB)

// #3- Ordene a lista abaixo em ordem crescente
// #explique detalhadamente por que escolheu essa solução e não outra

// const lista = [5,8,3,0,8,1,9,10,20,30]
// function ordenaNumeros (a, b){
//     return a - b
// }

// const listaOrdenada = lista.sort(ordenaNumeros);
// console.log(listaOrdenada);


// #4-Retire todos os espaços em branco, crie uma nova lista e adicione esses itens nela

// const lista = ["   joao   ","   maria   ","  joana  "]
// const listaSemEspacos = lista.map(lista => lista.trim());

// console.log(listaSemEspacos)

// #5-Retire o segundo item dessa lista e imprima ela:

// const lista = [1,2,3,4,5,6];
// lista.splice(1, 1);
// console.log(lista);

// #6-substitua todos os "joao" da lista por "maria"

// const lista = ["joao", "ana", "joana","joao", "ricardo", "joao"]
// const substituicao = lista.map(nome => nome.replace("joao", 'maria'))

// console.log(substituicao)


