type User = {
  name: string;
  age: number;
}

type Product = {
  name: string;
  description: string;
  value: number;
}

type Cart = {
  product: Product;
  user: User;
  quantity: number;
  amount: number;
}


const cliente: User = {
  name: "Joao",
  age: 20,
}

const product: Product = {
  name: "Leite",
  description: "Caixa de leite integral",
  value: 2.5,
}

const  cart: Cart = {
  user: cliente,
  product: product,
  quantity: 0,
  amount: 0,
}

console.log(cart);