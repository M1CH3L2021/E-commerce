import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 7rem 4%;

  display: flex;
  gap: 3rem;

  img.product-image {
    width: 50%;
    max-width: 64rem;
    height: 58rem;
    object-fit: cover;
    border-radius: .4rem;
  }

  aside {
    width: 50%;
    color: var(--gray-text);

    display: flex;
    flex-flow: column;
    justify-content: space-between;

    div {
      span:first-child {
        font-size: 1.6rem;
        text-transform: capitalize;
      }

      h1 {
        margin: 1.2rem 0 .4rem;
        font-size: 3.2rem;
        font-weight: 300;
        color: var(--black);
      }

      .price {
        font-size: 2rem;
        font-weight: 600;
        color: var(--black);
      }

      .freight {
        margin: 2.4rem 0 5.8rem;
        font-size: 1.2rem;
      }

      h3 {
        margin-bottom: .8rem;
        font-size: 1.6rem;
        font-weight: 500;
        text-transform: uppercase;
      }

      p:last-child {
        font-size: 1.4rem;
      }
    }

    button {
      height: 4.4rem;
      width: 100%;
      padding: 0 1.5rem;
      background: #115D8C;
      color: #F5F5FA;
      border: none;
      border-radius: .4rem;
      font-size: 1.6rem;
      font-weight: 500;
      text-transform: uppercase;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;

      transition: filter .3s;

      &:hover {
        filter: brightness(1.1);
      }

      img {
        height: 2.4rem;
        width: 2.4rem;
      }
    }
  }

  @media screen and (max-width: 700px) {
    & {
      flex-flow: column;
      
      img.product-image {
        width: 100%;
      }

      aside {
        width: 100%;

        p:last-child {
          margin-bottom: 5rem;
        }
      }
    }
  }
`;