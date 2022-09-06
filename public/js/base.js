const nome = "Ana Luiza Chiamenti";
let nome2 = "";
let pessoaDefault = {
    nome: "Ana Luiza Chiamenti",
    idade: "10",
    profissão: "Estagiaria"
}

let nomes = ["Ana Luiza Chiamenti", "Maria Silva", "Pedro Silva"]



let pessoas = (
    {
        nome: "Ana Luiza Chiamenti",
        idade: "19",
        profissão: "Estagiaria"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        profissão: "UX/UI Designer"
    }
);
    

function alterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado");
    console.log(nome2);
}

function alterarNome() {
    nome2 = "Ana Luiza Chiamenti";
    console.log("Valor alterado");
    console.log(nome2)
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome: ");
    console.log(item.nome);

    console.log("Idade:");
    console.log(item.idade);

    console.log("Trabalho: ");
    console.log(item.trabalho);

}

function adicionarPessoas(pessoa) {
    pessoas.push(pessoa);
}

function impirmirPessoas() {
    console.log("------------IMPRIMIR PESSOAS---------------")
    pessoas.forEach({item}) ; {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho");
        console.log(ítem.trabalho);
    }
}

adicionarPessoas({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"

});

imprimirPessoas();
       


