import { useEffect, useState } from 'react';
import { Container } from './styles';
import { ProductBox } from './../../components/ProductBox/index';

interface ISelectedFilter {
  filter: 'all' | 'shirts' | 'mugs'
}

export function Home() {
  const [selectedFilter, setSelectedFilter] = useState<ISelectedFilter>({filter: 'all'})

  useEffect(() => {
    console.log(selectedFilter)
  }, [selectedFilter])

  return (
    <Container selectedFilter={selectedFilter}>

      <ul>
        <li className="all" onClick={() => setSelectedFilter({filter: 'all'})}>Todos os produtos</li>
        <li className="shirts" onClick={() => setSelectedFilter({filter: 'shirts'})}>Camisetas</li>
        <li className="mugs" onClick={() => setSelectedFilter({filter: 'mugs'})}>Canecas</li>
      </ul>

      {selectedFilter.filter === 'shirts' && 
        <section>
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </section>
      }
      
    </Container>
  );
};