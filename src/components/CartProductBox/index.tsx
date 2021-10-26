import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';

import { Container } from './styles';
import trashIcon from '../../assets/trash.svg'

interface CartProduct {
  id: number
  name: string
  image: string
  price: number
  type: string
  amount: number
  stock: number
  description: string
}
interface CartProductBoxProps {
  cartProductAmount: number
  setCartProductAmount: (cartProductAmount: number) => void
  product: CartProduct
  name: string
  price: number
  description: string
  amount?: number
  stock: number
  image: string
}

export function CartProductBox({ cartProductAmount, setCartProductAmount, product, name, price, description, amount, stock, image }: CartProductBoxProps) {
  const { removeProductFromCart, increaseCartProductAmount, decreaseCartProductAmount } = useCart()

  const decreaseAmount = (product: CartProduct) => {
    decreaseCartProductAmount(product)
    if (cartProductAmount > 1) {
      setCartProductAmount(cartProductAmount - 1)
    }
  }

  const increaseAmount = (product: CartProduct) => {
    increaseCartProductAmount(product)
    if (cartProductAmount !== stock) {
      setCartProductAmount(cartProductAmount + 1)
    }
  }

  return (
    <Container>

      <img src={image} alt={name} />

      <div className="info">
        <div className="top">
          <h3>{name}</h3>
          <button>
            <img src={trashIcon} alt="remover" loading="lazy" onClick={() => removeProductFromCart(product)}/>
          </button>
        </div>
        <p>
          {description}
        </p>
        <div className="amount">
          <div>
            <button onClick={() => decreaseAmount(product)}>-</button>
            <input type="number" readOnly value={amount}/>
            <button onClick={() => increaseAmount(product)}>+</button>
          </div>
          <span>{formatPrice(amount !== undefined ? price * amount : price)}</span>
        </div>
      </div>

    </Container>
  );
};