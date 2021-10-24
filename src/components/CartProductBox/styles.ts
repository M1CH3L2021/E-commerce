import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 73rem;
  padding-right: 1.6rem;
  background: var(--white);
  color: var(--gray-text);
  border-radius: .8rem;
  filter: drop-shadow(0 0 8px rgba(0,0,0,.2));

  display: flex;
  gap: 3rem;

  img {
    height: 21rem;
    border-radius: .8rem 0 0 .8rem;
  }

  div.info {
    padding: 2rem 0%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 1.2rem;
      }

      button {
        border: none;
        background: transparent;
        
        img {
          height: 2.4rem;
          width: 2.4rem;
        }

        &:hover {
          filter: brightness(1.1);
        }
      }
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
    }

    div.amount {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      div {
        display: flex;
        flex-direction: row;
        gap: .8rem;

        button {
          height: 3rem;
          width: 3rem;
          border-radius: .5rem;
          border: none;
          background: var(--gray-bg);
          font-size: 2rem;

          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            filter: brightness(.9);
          }
        }

        input {
          pointer-events: none;
          outline: none;
          user-select: none;

          height: 3rem;
          width: 4rem;
          border: none;
          border-radius: .5rem;
          text-align: center;
          box-shadow: 0 0 8px 0 rgba(0,0,0,.2);

          &::-webkit-inner-spin-button { 
            -webkit-appearance: none;
          }
        }
      }

      span {
        font-size: 1.6rem;
        font-weight: 600;
        color: var(--black);
      }
    }
  }
`;
