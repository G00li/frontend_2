// interface Carro{
//   marca: string;
//   modelo: string;
//   ano: number;
//   cor: string;
//   preco: number;
// };
const payment = {
    id: 1,
    method: "card",
    value: 100,
    details: "Bought a book from Amazon",
};
console.log(payment);
const verificacao = () => {
    return `This purchase was made with ${payment.method}`;
};
console.log(verificacao());
