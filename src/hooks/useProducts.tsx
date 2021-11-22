import { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { api } from "../services/api";
import { Product } from "../Types";

interface ProductsProviderProps {
  children: ReactNode
}

type SelectedFilter = 'todos' | 'camiseta' | 'caneca'

interface ProductsContextData {
  products: Product[]
  searchedProducts: Product[]
  searchProduct: (product: Product[], isUserSearchingAProduct: boolean) => void
  isUserSearchingAProduct: boolean
  selectedFilter: SelectedFilter
  changeFilter: (option: SelectedFilter) => void
}

const ProductsContext = createContext({} as ProductsContextData)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])
  const [isUserSearchingAProduct, setIsUserSearchingAProduct] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilter>('todos')

  useEffect(() => {
    const loadData = async () => {
      await api.get('/products')
        .then(response => setProducts(response.data as Product[]))
    }

    loadData()
  }, [])

  function searchProduct(product: Product[], isSearchBarEmpty: boolean) {
    setSelectedFilter('todos')
    setSearchedProducts([...product])
    setIsUserSearchingAProduct(isSearchBarEmpty)
    console.log(isSearchBarEmpty)
  }

  function changeFilter(option: SelectedFilter) {
    setSelectedFilter(option)
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        searchedProducts,
        searchProduct,
        isUserSearchingAProduct,
        selectedFilter,
        changeFilter
      }}
    >
      { children }
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  return useContext(ProductsContext)
}