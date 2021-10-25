import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/productsContext';

import { Container } from './styles';
import { ProductBox } from './../../components/ProductBox/index';
interface ISelectedFilter {
  filter: 'todos' | 'camiseta' | 'caneca'
}

export function Home() {
  const [selectedFilter, setSelectedFilter] = useState<ISelectedFilter>({ filter: 'todos' })
  const { products } = useContext(ProductsContext)

  useEffect(() => {
    console.log(selectedFilter)
  }, [selectedFilter])

  return (
    <Container selectedFilter={selectedFilter}>

      <ul>
        <li className="all" onClick={() => setSelectedFilter({ filter: 'todos' })}>Todos os produtos</li>
        <li className="shirts" onClick={() => setSelectedFilter({ filter: 'camiseta' })}>Camisetas</li>
        <li className="mugs" onClick={() => setSelectedFilter({ filter: 'caneca' })}>Canecas</li>
      </ul>

      <section>
        {selectedFilter.filter === 'todos' &&
          products.map(product => {
            if (product.type === 'camiseta' || product.type === 'caneca')
              return (
                <ProductBox
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  type={product.type}
                  description={product.description}
                />
              )
          })
        }

        {selectedFilter.filter === 'camiseta' &&
          products.map(product => {
            if (product.type === 'camiseta')
              return (
                <ProductBox
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