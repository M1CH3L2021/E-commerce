import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../Types';

import { Container } from './styles';
import shoppingBagIcon from '../../assets/shopping-bag.svg'

export function Header() {
  const [inputValue, setInputValue] = useState('')
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])
  const { cart } = useCart()
  const { products } = useProducts()

  const isThereProductInCart = cart.length === 0 ? false : true

  function handleSearchProduct(nameOfProductBeingSearched: string) {
    setInputValue(nameOfProductBeingSearched)

    const product = products.filter(product => {
      const productName = product.name.toLowerCase()
      return productName.includes(nameOfProductBeingSearched.toLowerCase())
    })

    setSearchedProducts([...product])
    console.log(searchedProducts)
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
            value={inputValue} 
            onChange={(event) => handleSearchProduct(event.target.value)}
          />
          <Link to="/Cart" className="cart-button">
            <img src={shoppingBagIcon} alt="sacola" />
            {isThereProductInCart && <div className="cart-amount">{cart.length}</div>}
          </Link>
        </div>

      </div>
    </Container>
  );
};