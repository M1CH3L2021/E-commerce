import { Container } from './styles';
import { CartProductBox } from '../../components/CartProductBox';

export function Cart() {
  return (
    <Container>
      <main>
        <h1>Seu carrinho</h1>
        <h2>Total (3 produtos) <span>R$ 161,00</span></h2>

        <CartProductBox />
        <CartProductBox />

      </main>

      <aside>

        <div className="abstract">
          <h1>Resumo do pedido</h1>

          <div>
            <span>Subtotal de produtos</span>
            <span>R$ 161,00</span>
          </div>

          <div>
            <span>Entrega</span>
            <span>R$ 40,00</span>
          </div>

          <hr />

          <div className="total">
            <span>Total</span>
            <span>R$ 201,00</span>
          </div>

          <button>Finalizar a compra</button>
        </div>

        <ul>
          <li><a href="">Ajuda</a></li>
          <li><a href="">Reembolsos</a></li>
          <li><a href="">Entregas e frete</a></li>
          <li><a href="">Trocas e devoluções</a></li>
        </ul>

      </aside>
    </Container>
  );
};