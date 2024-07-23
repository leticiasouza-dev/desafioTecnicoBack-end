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

// #7-criar um loop while em Python que itera sobre os itens de uma lista e imprime os itens enquanto o valor 
// de uma variável é menor ou igual a 5. Após imprimir cada item, o valor da variável é incrementado em 1
// #explique detalhadamente por que escolheu essa solução e não outra

// const lista = [1, 2, 3, 4, 5, 6];
// let valor = 0; // Inicializamos 'valor' em 0

// // Loop 'while' que continuará enquanto 'valor' for menor ou igual a 5
// while (valor <= 5) {
//     console.log(lista[valor]); // Imprime o item atual da lista usando o índice 'valor'
    
//     valor++; // Incrementa o valor após imprimir o item
// }

//#8-usando a biblioteca requests, faça uma requisição http para o endpoint https://jsonplaceholder.typicode.com/todos. 
//cada objeto dentro do json possui a chave "completed". que indica se a task foi completada ou não. 
//Faça uma função que trate a resposta e retorne a quantidade de tasks completadas, e a quantidade de 
//tasks pendentes
//#explique detalhadamente por que escolheu essa solução e não outra

// async function requicicao(){
//     const url = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const urlConvertida = await url.json();

//     let valorTaskCompletas = 0;
//     let valorTaskIncompletas = 0;

//     urlConvertida.forEach(task => {
//         if(task.completed){
//             valorTaskCompletas++;
//         } else{
//             valorTaskIncompletas++;
//         }
//     })

//     console.log(`Completas: ${valorTaskCompletas} Incompletas: ${valorTaskIncompletas}`)
// }

// requicicao()


// #9-faça uma requisição em uma API  https://jsonplaceholder.typicode.com/users e com os dados retornados 
// # faça um parsing de dados e retire  o nome, username, email, rua, numero
// #explique detalhadamente por que escolheu essa solução e não outra

// async function requisicaoApi(){
//     const url = await fetch('https://jsonplaceholder.typicode.com/users');;
//     const urlConvertida =  await url.json();

//     const nomes = [];
//     const usernames = [];
//     const emails = [];
//     const ruas = [];
//     const numeros= [];

//     urlConvertida.forEach(user => {
//         nomes.push(user.name);                  
//         usernames.push(user.username);          
//         emails.push(user.email);                
//         ruas.push(user.address.street);         
//         numeros.push(user.address.suite);       

       
//         console.log(`
//             Nome: ${user.name}
//             Username: ${user.username}
//             Email: ${user.email}
//             Rua: ${user.address.street}
//             Número: ${user.address.suite}
//         `);
//     });
// }

// requisicaoApi();


// #10-crie uma lista e adicione um item novo a ela utilizando a metodologia FIFO

// Criação de uma lista usando a metodologia FIFO
// const fila = [];

// fila.push('Primeiro');
// fila.push('Segundo');
// fila.push('Terceiro');

// Removendo o primeiro elemento da lista (início da lista)
// const elementoRemovido = fila.shift();

// #11-crie uma lista e adicione um item novo a ela utilizando a metodolofia LIFO

// Criação de uma lista usando a metodologia LIFO
// const pilha = [];

// Adicionando elementos à lista (fim da lista)
// pilha.push('Primeiro');
// pilha.push('Segundo');
// pilha.push('Terceiro');

// Removendo o último elemento da lista (fim da lista)
// const elementoRemovido = pilha.pop();