import { useLocation } from 'react-router';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';

import { Container } from './styles';
import shoppingBagIcon from '../../assets/white-shopping-bag.svg'

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

export function Product() {
  const location = useLocation()
  const { product, name, image, price, type, description }: any = location.state
  const { addProductInCart } = useCart()

  function addProduct(product: CartProduct) {
    addProductInCart(product)
  }

  return (
    <Container>
      
      <img src={image} alt={name} className="product-image" loading="lazy" />

      <aside>
        <div>
          <span>{type}</span>
          <h1>{name}</h1>
          <span className="price">
            {formatPrice(price)}
          </span>
          <p className="freight">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
          <h3>Descrição</h3>
          <p>{description}</p>
        </div>

        <button onClick={() => addProduct(product)}>
          <img src={shoppingBagIcon} alt="Sacola" />
          Adicionar ao carrinho
        </button>
      </aside>

    </Container>
  );
};