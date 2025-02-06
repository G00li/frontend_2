const cliente = {
    name: "Joao",
    age: 20,
};
const product = {
    name: "Leite",
    description: "Caixa de leite integral",
    value: 2.5,
};
const cart = {
    product: product,
    user: cliente,
    quantity: 0,
    amount: 0,
};
console.log(cart);
