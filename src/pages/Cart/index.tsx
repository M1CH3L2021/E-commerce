import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { CartProductBox } from '../../components/CartProductBox';
import { formatPrice } from '../../util/format';

import { Container } from './styles';

export function Cart() {
  const [cartProductAmount, setCartProductAmount] = useState(1)
  const { cart } = useCart()

  const totalPrice = cart.reduce((total, product) => {
    const totalPrice = total + product.price * product.amount
    return totalPrice
  }, 0)

  return (
    <Container>
      <main>
        <h1>Seu carrinho</h1>
        <h2>
          Total ({cart.length === 1 ? `${cart.length} produto` : `${cart.length} produtos`}) {`\n`}
          <span>{formatPrice(totalPrice)}</span>
        </h2>

        {cart.map(cartProduct => {
          if (cartProduct.amount !== 0)
            return (
              <CartProductBox
                key={cartProduct.id}
                cartProductAmount={cartProductAmount}
                setCartProductAmount={setCartProductAmount}
                product={cartProduct}
                name={cartProduct.name}
                price={cartProduct.price}
                description={cartProduct.description}
                amount={cartProduct.amount}
                stock={cartProduct.stock}
                image={cartProduct.image}
              />
            )
        })}

      </main>

      {cart.length !== 0 && (
      <aside>

        <div className="abstract">
          <h1>Resumo do pedido</h1>

          <div>
            <span>Subtotal de produtos</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>

          <div>
            <span>Entrega</span>
            <span>R$ 40,00</span>
          </div>

          <hr />

          <div className="total">
            <span>Total</span>
            <span>{formatPrice(totalPrice + 40)}</span>
          </div>

          <button>Finalizar a compra</button>
        </div>

        <ul>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Reembolsos</a></li>
          <li><a href="#">Entregas e frete</a></li>
          <li><a href="#">Trocas e devoluções</a></li>
        </ul>

      </aside>
      )}

    </Container>
  );
};