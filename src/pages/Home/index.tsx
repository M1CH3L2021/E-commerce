import { useProducts } from '../../hooks/useProducts';
import Loader from "react-loader-spinner"
import { ProductBox } from './../../components/ProductBox';

import { Container } from './styles';

export function Home() {
  const { products, selectedFilter, changeFilter, searchedProducts, userIsSearchingAProduct } = useProducts()

  return (
    <Container selectedFilter={selectedFilter}>

      <ul>
        <li className="all" onClick={(event) => changeFilter('todos')}>Todos os produtos</li>
        <li className="shirts" onClick={() => changeFilter('camiseta')}>Camisetas</li>
        <li className="mugs" onClick={() => changeFilter('caneca')}>Canecas</li>
      </ul>

      {products.length === 0
        ? (
          <div className="loader-container" >
            <Loader
              type="TailSpin"
              color="#FFA585"
              height={100}
              width={100}
              timeout={1000 * 10} // 10 seconds
            />
          </div>
        )
        : searchedProducts.length !== 0
          ? (
            <section>
              {searchedProducts.map((product) => (
                <ProductBox
                  key={product.id}
                  product={product}
                />
              ))
              }
            </section>
          )
          : userIsSearchingAProduct
            ? (
              <section>
                <h1>Ops! O produto que você está procurando não existe : (</h1>
              </section>
            )
            : (
              <section>
                {selectedFilter === 'todos' &&
                  products.map(product => (
                    <ProductBox
                      key={product.id}
                      product={product}
                    />
                  ))
                }

                {selectedFilter === 'camiseta' &&
                  products.map(product => {
                    if (product.type === 'camiseta')
                      return (
                        <ProductBox
                          key={product.id}
                          product={product}
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
                          product={product}
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