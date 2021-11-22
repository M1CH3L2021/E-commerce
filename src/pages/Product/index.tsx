import { useLocation } from 'react-router';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/format';
import { CartProduct, Product as ProductType } from '../../utils/types';

import { Container } from './styles';
import shoppingBagIcon from '../../assets/white-shopping-bag.svg'

export function Product() {
  const location = useLocation()
  const { product }: any = location.state
  const { addProductInCart } = useCart()

  function addProduct(product: CartProduct) {
    addProductInCart(product)
  }

  return (
    <Container>
      
      <img src={product.image} alt={product.name} className="product-image" loading="lazy" />

      <aside>
        <div>
          <span>{product.type}</span>
          <h1>{product.name}</h1>
          <span className="price">
            {formatPrice(product.price)}
          </span>
          <p className="freight">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
          <h3>Descrição</h3>
          <p>{product.description}</p>
        </div>

        <button onClick={() => addProduct(product)}>
          <img src={shoppingBagIcon} alt="Sacola" />
          Adicionar ao carrinho
        </button>
      </aside>

    </Container>
  );
};