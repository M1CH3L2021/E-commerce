import { ReactNode } from "react";
import { CartProvider } from "../hooks/useCart";
import { ProductsProvider } from "../hooks/useProducts";

interface DataProviderProps {
  children: ReactNode
}

export function DataProvider({ children }: DataProviderProps) {
  return (
    <ProductsProvider>
      <CartProvider>
        { children }
      </CartProvider>
    </ProductsProvider>
  )
}