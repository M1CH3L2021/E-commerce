import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import shoppingBagIcon from '../../assets/shopping-bag.svg'

export function Header() {
  const [inputValue, setInputValue] = useState('')
  const [isThereProductInCart, setIsThereProductInCart] = useState(false)

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
            onChange={(event) => setInputValue(event.target.value)}
          />
          <Link to="/Cart" className="cart-button">
            <img src={shoppingBagIcon} alt="sacola" />
            {isThereProductInCart && <div className="cart-amount"></div>}
          </Link>
        </div>

      </div>
    </Container>
  );
};