import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from 'react-toastify';

interface CartProviderProps {
  children: ReactNode
}

interface CartProduct {
  id: number
  image: string
  name: string
  type: string
  price: number
  description: string
  amount: number
  stock: number
}

interface CartContextData {
  cart: CartProduct[]
  addProductInCart: (product: CartProduct) => void
  removeProductFromCart: (product: CartProduct) => void
  increaseCartProductAmount: (product: CartProduct) => void
  decreaseCartProductAmount: (product: CartProduct) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProduct[]>([])

  const addProductInCart = (product: CartProduct) => {
    try {
      product.amount = 1
      const productExists = cart.find(cartProduct => cartProduct.id === product.id)
      return productExists ?
        toast.error('Produto já adicionado ao carrinho!') :
        setCart([...cart, product])
    } catch {
      toast.error('Erro ao adicionar produto ao carrinho')
    }
  }

  const removeProductFromCart = (product: CartProduct) => {
    const removedProductCart = cart.filter(cartProduct => {
      return cartProduct !== product
    })
    setCart([...removedProductCart])
  }

  const increaseCartProductAmount = (product: CartProduct) => {
    const amountMaxLimit = product.amount === product.stock
    return amountMaxLimit ?
      toast.error('Quantidade máxima no estoque atingida') :
      product.amount += 1
  }

  const decreaseCartProductAmount = (product: CartProduct) => {
    const amountMinLimit = product.amount === 1
    return amountMinLimit ?
      toast.error('Não é possível comprar menos que 1 produto') :
      product.amount -= 1
  }

  return (
    <CartContext.Provider value={{cart, addProductInCart, removeProductFromCart, increaseCartProductAmount, decreaseCartProductAmount}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}