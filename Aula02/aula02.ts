let nome: string = "Joao"

console.log(nome);

function soma (a: number, b: number):number {
    return a + b;
}



interface Pessoa { // São extensíveis
    nome: string;
    idade: number;
}

const user: Pessoa = {
    nome: "Joao",
    idade: 20
}

console.log(user);
