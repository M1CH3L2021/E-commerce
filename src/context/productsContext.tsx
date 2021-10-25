import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface ProductsProviderProps {
  children: ReactNode
}

interface Products {
  id: number
  image: string
  name: string
  type: string
  price: string
  description: string
  amount: number
}

interface ProductsContextData {
  products: Products[]
}

export const ProductsContext = createContext<ProductsContextData>({} as ProductsContextData)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    const loadData = async () => {
      api.get('/products')
      .then(response => setProducts(response.data as Products[]))
    }

    loadData()
  }, [])

  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  )
}