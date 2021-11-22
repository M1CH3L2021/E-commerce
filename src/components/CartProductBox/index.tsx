import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/format';
import { CartProduct } from '../../utils/types';

import { Container } from './styles';
import trashIcon from '../../assets/trash.svg'

interface CartProductBoxProps {
  cartProductAmount: number
  setCartProductAmount: (cartProductAmount: number) => void
  product: CartProduct
}

export function CartProductBox({ cartProductAmount, setCartProductAmount, product }: CartProductBoxProps) {
  const { removeProductFromCart, increaseCartProductAmount, decreaseCartProductAmount } = useCart()

  const decreaseAmount = (product: CartProduct) => {
    decreaseCartProductAmount(product)
    if (cartProductAmount > 1) {
      setCartProductAmount(cartProductAmount - 1)
    }
  }

  const increaseAmount = (product: CartProduct) => {
    increaseCartProductAmount(product)
    if (cartProductAmount !== product.stock) {
      setCartProductAmount(cartProductAmount + 1)
    }
  }

  return (
    <Container>

      <img src={product.image} alt={product.name} />

      <div className="info">
        <div className="top">
          <h3>{product.name}</h3>
          <button>
            <img src={trashIcon} alt="remover" loading="lazy" onClick={() => removeProductFromCart(product)}/>
          </button>
        </div>
        <p>
          {product.description}
        </p>
        <div className="amount">
          <div>
            <button onClick={() => decreaseAmount(product)}>-</button>
            <input type="number" readOnly value={product.amount}/>
            <button onClick={() => increaseAmount(product)}>+</button>
          </div>
          <span>{formatPrice(product.amount !== undefined ? product.price * product.amount : product.price)}</span>
        </div>
      </div>

    </Container>
  );
};