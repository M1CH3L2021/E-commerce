import { Link } from 'react-router-dom';
import { Product } from '../../utils/types';
import { formatPrice } from '../../utils/format';

import { Container } from './styles';

export interface ProductBoxProps {
  product: Product
}

export function ProductBox({ product }: ProductBoxProps) {
  return (
    <Container>
      <img src={product.image} alt={product.name} loading="lazy" />
      <h3>{product.name}</h3>
      <hr />
      <div>
        <span>
          {formatPrice(product.price)}
        </span>
        <Link
          className="product-button"
          to={{
            pathname: '/Product',
            state: {
              product: product,
            }
          }}
        >
          Ver mais
        </Link>
      </div>
    </Container>
  );
};