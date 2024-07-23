class ContaBancaria{
    static ids = 0;

    constructor(id, nome, cpf,saldo){
        this.id = ++ContaBancaria.ids,
        this.nome = nome;
        this.cpf = cpf;
        this.saldo = 0;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso! Novo saldo: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log("O valor de depósito deve ser positivo.");
        }
    }
    
    // Método para realizar saque
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso! Saldo restante: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log("Saldo insuficiente ou valor de saque inválido.");
        }
    }
    
    // Método para exibir informações da conta
    exibirDadosConta() {
        console.log(`ID: ${this.id}, Nome: ${this.nome}, CPF: ${this.cpf}, Saldo: R$${this.saldo.toFixed(2)}`);
    }
    
}
// Método para realizar depósito


// Criando a interface de usuário para interagir com as contas
function main() {
const contas = [];

// Função para criar nova conta
function criarConta() {
    const nome = prompt("Digite o nome do titular:");
    const cpf = prompt("Digite o CPF do titular:");

    const novaConta = new ContaBancaria(nome, cpf);
    contas.push(novaConta);

    console.log("Conta criada com sucesso!");
    novaConta.exibirDadosConta();
}

// Função para realizar operações de saque ou depósito
function operarConta() {
    const idConta = parseInt(prompt("Digite o ID da conta:"));
    const conta = contas.find(c => c.id === idConta);

    if (conta) {
        const operacao = prompt("Digite 'd' para depósito ou 's' para saque:");

        if (operacao === 'd') {
            const valor = parseFloat(prompt("Digite o valor do depósito:"));
            conta.depositar(valor);
        } else if (operacao === 's') {
            const valor = parseFloat(prompt("Digite o valor do saque:"));
            conta.sacar(valor);
        } else {
            console.log("Operação inválida.");
        }
    } else {
        console.log("Conta não encontrada.");
    }
}

// Menu principal
while (true) {
    const escolha = prompt("Digite 1 para criar conta, 2 para operar conta, 3 para sair:");

    if (escolha === '1') {
        criarConta();
    } else if (escolha === '2') {
        operarConta();
    } else if (escolha === '3') {
        console.log("Encerrando o sistema.");
        break;
    } else {
        console.log("Escolha inválida.");
    }
}
}

// Executa a interface de usuário
main()

