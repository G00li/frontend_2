interface Carro{
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  preco: number;
};

const carro: Carro = {
  marca: "Ford",
  modelo: "Focus",
  ano: 2020,
  cor: "Preto",
  preco: 100000,
};

console.log("Carro comprado: ", carro);

type PaymentMethod = "card" | "Mbway" | "paypal";

interface Payment {
  id: number;
  method: PaymentMethod;
  value: number;
  details: string; 
  car: Carro
}

const payment: Payment = {
  id: 1,
  method: "card",
  value: 100,
  details: "Bought a book from Amazon",
  car: carro
};

console.log("Pagamento: ", payment);

const verificacao = () => {
  return `This purchase was made with ${payment.method}`
}
console.log(verificacao());
