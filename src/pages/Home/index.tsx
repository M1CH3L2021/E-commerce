import { useEffect, useState } from 'react';
import { ProductBox } from './../../components/ProductBox';
import { api } from '../../services/api';

import { Container } from './styles';

interface SelectedFilter {
  filter: 'todos' | 'camiseta' | 'caneca'
}

interface Products {
  product: Products
  id: number
  image: string
  name: string
  type: string
  price: number
  description: string
  stock: number
}

export function Home() {
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilter>({ filter: 'todos' })
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    const loadData = async () => {
      await api.get('/products')
      .then(response => setProducts(response.data as Products[]))
    }

    loadData()
  }, [])

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