import { Link } from 'react-router-dom';

import { Container } from './styles';

interface ProductBoxProps {
  name: string
  image: string
  price: string
  type: string
  description: string
}

export function ProductBox({ name, image, price, type, description }: ProductBoxProps) {
  return (
    <Container>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <hr />
      <div>
        <span>{price}</span>
        <Link to={{
          pathname: '/Product',
          state: {
            name: name,
            image: image,
            price: price,
            type: type,
            description: description
          }
        }} className="product-button">
          Ver mais
        </Link>
      </div>
    </Container>
  );
};