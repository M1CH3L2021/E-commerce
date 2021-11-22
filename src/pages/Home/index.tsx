import { useProducts } from '../../hooks/useProducts';
import Loader from "react-loader-spinner"
import { ProductBox } from './../../components/ProductBox';

import { Container } from './styles';

export function Home() {
  const { products, selectedFilter, changeFilter, searchedProducts, isUserSearchingAProduct } = useProducts()

  return (
    <Container selectedFilter={selectedFilter}>

      <ul>
        <li className="all" onClick={() => changeFilter('todos')}>Todos os produtos</li>
        <li className="shirts" onClick={() => changeFilter('camiseta')}>Camisetas</li>
        <li className="mugs" onClick={() => changeFilter('caneca')}>Canecas</li>
      </ul>

      {products.length === 0 ? (
        <div className="loader-container" >
          <Loader
            type="TailSpin"
            color="#FFA585"
            height={100}
            width={100}
            timeout={1000 * 10} // 10 seconds
          />
        </div>
      ) : searchedProducts.length !== 0 ? (
            <section>
              {searchedProducts.map(product => (
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
            </section>
          ) : isUserSearchingAProduct ? (
              <section>
                <h1>Ops! O produto que você está procurando não existe : (</h1>
              </section>
            ) : (
            <section>
              {selectedFilter === 'todos' &&
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

              {selectedFilter === 'camiseta' &&
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

              {selectedFilter === 'caneca' &&
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
          )
      }

    </Container>
  );
};