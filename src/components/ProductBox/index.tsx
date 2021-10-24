import { Link } from 'react-router-dom';

import { Container } from './styles';
import shirtImg from '../../assets/camiseta.png'

export function ProductBox() {
  return (
    <Container>
      <img src={shirtImg} alt="Camiseta not today" />
      <h3>Camiseta not today</h3>
      <hr />
      <div>
        <span>R$ 78,00</span>
        <Link to="/Product" className="product-button">
          Ver mais
        </Link>
      </div>
    </Container>
  );
};