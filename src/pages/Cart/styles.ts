import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 4rem 4%;

  display: flex;
  gap: 3rem;

  main {
    display: flex;
    flex-flow: column;
    gap: 1.6rem;

    h1 {
      font-size: 2.4rem;
      font-weight: 500;
    }

    h2 {
      margin: .6rem 0 2.3rem;
      font-size: 1.6rem;
      font-weight: 300;

      span {
        font-weight: 600;
      }
    }
  }

  aside {
    width: 30%;
    min-height: 63rem;
    max-width: 35rem;
    padding: 2rem;
    background: var(--white);
    color: var(--gray-text);
    border-radius: .8rem;
    filter: drop-shadow(0 0 8px rgba(0,0,0,.2));

    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .abstract {
      display: flex;
      flex-flow: column;

      h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--black);
        margin-bottom: 3rem;
      }

      hr {
        border: none;
        border-bottom: 1px solid var(--gray-bg);
      }

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          color: var(--gray-text);
          font-size: 1.6rem;
        }

        &:nth-child(3) {
          margin: 1.2rem 0 2.4rem;
        }

        &.total {
          margin: .8rem 0 4rem;
          color: var(--black);
          font-weight: 600;
        }
      }

      button {
        width: 100%auto;
        height: 4.4rem;
        margin-bottom: 4rem;
        background: #51B853;
        border: none;
        border-radius: .4rem;

        font-size: 1.6rem;
        font-weight: 500;
        color: var(--white);

        transition: filter .3s;

        &:hover {
          filter: brightness(.9);
        }
      }
    }

    ul {
      display: flex;
      flex-flow: column;
      gap: 1.2rem;

      li {
        font-size: 1.4rem;
        font-weight: 500;
        list-style: none;

        a {
          text-transform: uppercase;
          color: var(--gray-text);

          transition: filter .3s;

          &:hover {
            filter: brightness(1.5);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1170px) {
    & {
      flex-flow: column;

      aside {
        width: 100%;
        max-width: 100%;
        min-height: auto;

        button {
          width: 100%;
          max-width: 30rem;
          margin: 0 auto;
          margin-bottom: 4rem;
        }
      }
    }
  }
`;