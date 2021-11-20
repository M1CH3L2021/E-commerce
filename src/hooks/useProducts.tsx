import { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { api } from "../services/api";
import { Product } from "../Types";

interface ProductsProviderProps {
  children: ReactNode
}

interface ProductsContextData {
  products: Product[]
}

const ProductsContext = createContext({} as ProductsContextData)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const loadData = async () => {
      await api.get('/products')
        .then(response => setProducts(response.data as Product[]))
    }

    loadData()
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      { children }
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  return useContext(ProductsContext)
}