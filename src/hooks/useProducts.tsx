import { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { api } from "../services/api";
import { Product } from "../utils/types";

interface ProductsProviderProps {
  children: ReactNode
}

type SelectedFilter = 'todos' | 'camiseta' | 'caneca'

interface ProductsContextData {
  products: Product[]
  searchedProducts: Product[]
  searchProduct: (product: Product[], isUserSearchingAProduct: boolean) => void
  userIsSearchingAProduct: boolean
  selectedFilter: SelectedFilter
  changeFilter: (option: SelectedFilter) => void
}

const ProductsContext = createContext({} as ProductsContextData)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])
  const [userIsSearchingAProduct, setUserIsSearchingAProduct] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilter>('todos')

  useEffect(() => {
    const loadData = async () => {
      await api.get('/products')
        .then(response => setProducts(response.data as Product[]))
    }

    loadData()
  }, [])

  function searchProduct(products: Product[], searchBarIsEmpty: boolean) {
    setSelectedFilter('todos')

    setSearchedProducts([...products])
    setUserIsSearchingAProduct(searchBarIsEmpty)
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
        userIsSearchingAProduct,
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