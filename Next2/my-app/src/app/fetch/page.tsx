'use client'

import { useState, useEffect } from 'react'
import { createProduct, getAllProducts, updateProduct, type Product } from '@/services/api'

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  })
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const data = await getAllProducts()
      setProducts(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
      setProducts([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const productData = {
        ...formData,
        price: Number(formData.price),
        id: editingProduct ? editingProduct.id : String(Date.now())
      }
      
      if (editingProduct) {
        await updateProduct(editingProduct.id, productData)
        alert('Produto atualizado com sucesso!')
      } else {
        await createProduct(productData)
        alert('Produto criado com sucesso!')
      }
      
      // Limpar formulário e estado de edição
      setFormData({
        name: '',
        price: '',
        description: '',
        image: ''
      })
      setEditingProduct(null)
      
      // Atualizar lista de produtos
      fetchProducts()
    } catch (error) {
      alert(editingProduct ? 'Erro ao atualizar produto' : 'Erro ao criar produto')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleProductClick = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      price: String(product.price),
      description: product.description,
      image: product.image
    })
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 text-black">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-2xl font-bold mb-6">
          {editingProduct ? 'Editar Produto' : 'Cadastrar Novo Produto'}
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome do Produto</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preço</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Descrição</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">URL da Imagem</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {editingProduct ? 'Atualizar Produto' : 'Cadastrar Produto'}
          </button>

          {editingProduct && (
            <button
              type="button"
              onClick={() => {
                setEditingProduct(null)
                setFormData({
                  name: '',
                  price: '',
                  description: '',
                  image: ''
                })
              }}
              className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600 mt-2"
            >
              Cancelar Edição
            </button>
          )}
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-black">
        <h2 className="text-xl font-bold mb-4">Produtos Cadastrados</h2>
        {isLoading ? (
          <p className="text-center">Carregando produtos...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => handleProductClick(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-green-600 font-medium">
                  € {Number(product.price).toFixed(2)}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Nenhum produto cadastrado.</p>
        )}
      </div>
    </div>
  )
}
