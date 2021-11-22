export interface Product {
  id: number
  image: string
  name: string
  type: string
  price: number
  description: string
  stock: number
}

export interface CartProduct {
  id: number
  image: string
  name: string
  type: string
  price: number
  description: string
  amount: number
  stock: number
}