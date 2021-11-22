import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';

import { Container } from './styles';
import shoppingBagIcon from '../../assets/shopping-bag.svg'
import { api } from '../../services/api';
import { Product } from '../../utils/types';

export function Header() {
  const [search, setSearch] = useState('')
  
  const { cart } = useCart()
  const { searchProduct } = useProducts()

  const thereIsProductInCart = cart.length !== 0

  async function handleSearchProduct(nameOfProductBeingSearched: string) {
    setSearch(nameOfProductBeingSearched)

    const { data } = await api.get(`/products?q=${nameOfProductBeingSearched}`)
    
    const products = data as Product[]
    const searchBarIsEmpty = nameOfProductBeingSearched.length === 0

    searchProduct(products, searchBarIsEmpty)
  }

  return (
    <Container>
      <div className="center">

        <Link to="/" className="logo">
          capputeeno
        </Link>

        <div>
          <input 
            type="text" 
            placeholder="Procurando por algo específico?" 
            value={search} 
            onChange={(e) => handleSearchProduct(e.target.value)}
          />
          <Link to="/Cart" className="cart-button">
            <img src={shoppingBagIcon} alt="sacola" />
            {thereIsProductInCart && <div className="cart-amount">{cart.length}</div>}
          </Link>
        </div>

      </div>
    </Container>
  );
};