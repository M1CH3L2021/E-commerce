import { Link } from 'react-router-dom';
import { formatPrice } from '../../util/format';

import { Container } from './styles';

interface Product {
  id: number
  name: string
  image: string
  price: number
  type: string
  description: string
}
interface ProductBoxProps {
  product: Product
  id: number
  name: string
  image: string
  price: number
  type: string
  description: string
}

export function ProductBox({ id, product, name, image, price, type, description }: ProductBoxProps) {
  return (
    <Container>
      <img src={image} alt={name} loading="lazy" />
      <h3>{name}</h3>
      <hr />
      <div>
        <span>
          {formatPrice(price)}
        </span>
        <Link to={{
          pathname: '/Product',
          state: {
            id: id,
            product: product,
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