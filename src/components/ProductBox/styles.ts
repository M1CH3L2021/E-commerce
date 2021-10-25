import styled from 'styled-components';

export const Container = styled.div`
  width: 25rem;
  padding-bottom: .8rem;

  background: rgba(255,255,255,.4);
  border-radius: .4rem;
  text-align: left;
  box-shadow: 0 0 16px 0 rgba(0,0,0,.2);

  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    border-radius: .4rem .4rem 0 0;
  }

  h3 {
    margin: .8rem 1.2rem;
    font-size: 1.6rem;
    font-weight: 300;
  }

  hr {
    margin: 0 1.2rem .8rem;
    border: none;
    border-bottom: 1px solid var(--gray-bg);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin: 0 1.2rem;
      font-size: 1.4rem;
      font-weight: 600;
    }

    .product-button {
      height: 3rem;
      margin-right: 1.2rem;
      padding: 0 1.5rem;
      background: #115D8C;
      color: white;
      border-radius: .4rem;
      font-size: 1.4rem;
      font-weight: 600;
      text-decoration: none;

      display: flex;
      align-items: center;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }

`;
