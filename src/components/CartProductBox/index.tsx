import { useState } from 'react';

import { Container } from './styles';

import shirtImg from '../../assets/camiseta.png'
import trashIcon from '../../assets/trash.svg'

export function CartProductBox() {
  const [cartProductAmount, setCartProductAmount] = useState(0)

  const decreaseCartProductAmount = () => {
    return cartProductAmount !== 0 ?
      setCartProductAmount(cartProductAmount - 1) :
      false
  }

  const increaseCartProductAmount = () => {
    setCartProductAmount(cartProductAmount + 1)
  }

  return (
    <Container>

      <img src={shirtImg} alt="" />

      <div className="info">
        <div className="top">
          <h3>Camiseta not today</h3>
          <button>
            <img src={trashIcon} alt="" />
          </button>
        </div>
        <p>
          Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.
        </p>
        <div className="amount">
          <div>
            <button onClick={decreaseCartProductAmount}>-</button>
            <input type="number" value={cartProductAmount}/>
            <button onClick={increaseCartProductAmount}>+</button>
          </div>
          <span>R$ 89,90</span>
        </div>
      </div>

    </Container>
  );
};