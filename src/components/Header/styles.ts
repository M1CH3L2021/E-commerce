import styled from 'styled-components';

export const Container = styled.header`
  width:100%;
  padding: 0 4%;
  background: var(--white);

  div.center {
    height: 8rem;
    width: 100%;
    max-width: 128rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      text-decoration: none;
      font-size: 4rem;
      color: var(--gray-logo);
      font-family: "Saira Stencil One";
      font-weight: bold;
      cursor: pointer;

      transition: filter .3s;

      &:hover {
        filter: brightness(.9);
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 3.2rem;
      

      input {
        height: 4rem;
        width: 35rem;
        padding-left: 1rem;
        
        background: var(--gray-bg);
        border-radius: .8rem;
        border: none;
        outline:none;
        font-size: 1.4rem;
      }

      .cart-button {
        position: relative;
        background: transparent;
        border: none;

        display: flex;
        align-items: center;

        transition: filter .3s;

        &:hover {
          filter: brightness(.8);
        }

        .cart-amount {
          position: absolute;
          bottom: -25%;
          right: -25%;
          height: 1.7rem;
          width: 1.7rem;
          border-radius: 50%;
          background: #DE3838;
          color: var(--white);
          font-size: 1.2rem;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    div.center {
      height: auto;
      padding: 1.5rem 0;
      flex-flow: column;
      justify-content: center;
      gap: 1.5rem;

      div{
        width: 100%;
        justify-content: center;
      }

      input {
        max-width: 80%;
      }
    }
  }
`;
