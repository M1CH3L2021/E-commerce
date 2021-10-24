import { Container } from './styles';
import shirtImg from '../../assets/camiseta.png'
import shoppingBagIcon from '../../assets/white-shopping-bag.svg'

export function Product() {
  return (
    <Container>
      
      <img src={shirtImg} alt="" />

      <aside>
        <div>
          <span>Camiseta</span>
          <h1>Camiseta not today</h1>
          <span className="price">R$ 40,00</span>
          <p className="freight">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
          <h3>Descrição</h3>
          <p>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
        </div>

        <button>
          <img src={shoppingBagIcon} alt="" />
          Adicionar ao carrinho
        </button>
      </aside>

    </Container>
  );
};