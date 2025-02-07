// // Exercicio 1: 

// class Veiculo {
//   marca: string;
//   modelo: string;
//   ano: number;

//   constructor(
//     marca: string,
//     modelo: string,
//     ano: number,
//   ){
//     this.marca = marca;
//     this.modelo = modelo;
//     this.ano = ano;
//   }

//   description (): string {
//     return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
//   }
// }

// class Carro extends Veiculo {
//   portas: number; 
//   constructor(
//     marca: string,
//     modelo: string,
//     ano: number,
//     portas: number
//   ){
//     super(marca, modelo, ano);
//     this.portas = portas;
//   }

//   description (): string {
//     return `${super.description()}, Portas: ${this.portas}`;
//   }
// }

// const carro = new Carro ("Ferrari", "Enzo", 2008, 2); 

// console.log(carro);
// console.log(carro.description());


// ----------------------------------------------------------------------------------------------------------------------------

// // Exercicio 2:

// type Player = {
//   name: string; 
//   age: number; 
//   game: string; 
// }

// const playerPartial: Partial<Player> = {
//   name: "Ronaldo",
//   game: "Freefire"
// }

// console.log("Partial ", playerPartial);

// const playerReadonly: Readonly<Player> = {
//   name: "Messi",
//   age: 30,
//   game: "Freefire"
// }

// // playerReadonly.name = "Ronaldo";

// const playerPick: Pick<Player, "name" | "age"> = {
//   name: "Cristiano",
//   age: 30
// }
// console.log("Player Pick: ", playerPick);

// const playerOmit: Omit<Player, "game"> = {
//   name: "Menino Ney", 
//   age: 30
// }

// console.log("Player Omit: ", playerOmit);

// ----------------------------------------------------------------------------------------------------------------------------
// // Exercicio 3:

class Generico<T> {
  valor: T[] = [];

  add(valor: T): void {
    this.valor.push(valor);
  }

  getAll(): T[] {
    return this.valor 
  }

  remove(task: T): void {
    const index = this.valor.indexOf(task); 
    if (index > -1) {
      this.valor.splice(index, 1);
      console.log(`Valor ${task} removido com sucesso!`); 
    }
    else{
      console.log(`Valor ${task} não encontrado!`);
    }
  }

}

const numGenerico = new Generico<number>();

numGenerico.add(1);
numGenerico.add(2);
numGenerico.add(3);
numGenerico.add(4);
numGenerico.add(5);

console.log(numGenerico.getAll());

// numGenerico.remove(3);
// console.log(numGenerico.remove(3));
numGenerico.remove(3);

console.log("-----------------------------");

console.log(numGenerico.getAll());

