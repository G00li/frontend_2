const API_URL = "https://67b8d8c9699a8a7baef57ad0.mockapi.io/api/products"

export type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
}

export const getAllProducts = async () =>{
  const response = await fetch (`${API_URL}`)
  return response.json()
}

export const getProductById = async (id: string) =>{
  const response = await fetch (`${API_URL}/${id}`)
  return response.json()
}

export const createProduct = async (product: Product) =>{
  const response = await fetch (`${API_URL}`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  return response.json()
}

export const updateProduct = async (id: string, product: Product) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  return response.json()
}
