import {  useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductBox } from './../../components/ProductBox';

import { Container } from './styles';

interface SelectedFilter {
  filter: 'todos' | 'camiseta' | 'caneca'
}


export function Home() {
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilter>({ filter: 'todos' })
  const { products } = useProducts()

  return (
    <Container selectedFilter={selectedFilter}>

      <ul>
        <li className="all" onClick={() => setSelectedFilter({ filter: 'todos' })}>Todos os produtos</li>
        <li className="shirts" onClick={() => setSelectedFilter({ filter: 'camiseta' })}>Camisetas</li>
        <li className="mugs" onClick={() => setSelectedFilter({ filter: 'caneca' })}>Canecas</li>
      </ul>

      <section>
        {selectedFilter.filter === 'todos' &&
          products.map(product => (
            <ProductBox
              key={product.id}
              id={product.id}
              product={product}
              name={product.name}
              image={product.image}
              price={product.price}
              type={product.type}
              description={product.description}
            />
          ))
        }

        {selectedFilter.filter === 'camiseta' &&
          products.map(product => {
            if (product.type === 'camiseta')
              return (
                <ProductBox
                  key={product.id}
                  id={product.id}
                  product={product}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  type={product.type}
                  description={product.description}
                />
              )
          })
        }

        {selectedFilter.filter === 'caneca' &&
          products.map(product => {
            if (product.type === 'caneca')
              return (
                <ProductBox
                  key={product.id}
                  id={product.id}
                  product={product}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  type={product.type}
                  description={product.description}
                />
              )
          })
        }
      </section>

    </Container>
  );
};