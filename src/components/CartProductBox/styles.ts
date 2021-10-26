import styled from 'styled-components';

export const Container = styled.div`
  height: 21rem;
  width: 73rem;
  padding-right: 1.6rem;
  background: var(--white);
  color: var(--gray-text);
  border-radius: .8rem;
  filter: drop-shadow(0 0 8px rgba(0,0,0,.2));

  display: flex;
  gap: 3rem;

  img {
    width: 25rem;
    object-fit: cover;
    border-radius: .8rem 0 0 .8rem;
  }

  div.info {
    width: 100%;
    padding: 2rem 0%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .top {
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

        transition: filter .3s;
        
        img {
          height: 2.4rem;
          width: 2.4rem;
        }

        &:hover {
          filter: brightness(1.5);
        }
      }
    }

    p {
      margin-bottom: 2.5rem;
      font-size: 1.2rem;
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

          transition: filter .3s;

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

  @media screen and (max-width: 1170px) {
    & {
      width: 100%;
    }
  }

  @media screen and (max-width: 650px) {
    & {
      height: max-content;
      padding-right: 0;
      flex-flow: column;
      gap: 0;

      > img {
        width: 100%;
        border-radius: .8rem .8rem 0 0;
      }

      > div.info {
        padding: 2rem;
      }
    }
  }
`;
