import { useLocation } from 'react-router';

import { Container } from './styles';
import shirtImg from '../../assets/camiseta.png'
import shoppingBagIcon from '../../assets/white-shopping-bag.svg'

export function Product() {
  const location = useLocation()
  const { name, image, price, type, description }: any = location.state


  return (
    <Container>
      
      <img src={image} alt={name} className="product-image"/>

      <aside>
        <div>
          <span>{type}</span>
          <h1>{name}</h1>
          <span className="price">{price}</span>
          <p className="freight">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
          <h3>Descrição</h3>
          <p>{description}</p>
        </div>

        <button>
          <img src={shoppingBagIcon} alt="" />
          Adicionar ao carrinho
        </button>
      </aside>

    </Container>
  );
};