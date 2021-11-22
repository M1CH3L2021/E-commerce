import styled from 'styled-components';

interface ContainerProps {
  selectedFilter: 'todos' | 'camiseta' | 'caneca'
}

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2% 7rem;

  ul {
    width: max-content;
    display: flex;
    gap: 4rem;
    margin: 6rem 0 6rem;

    li {
      list-style: none;
      color: var(--gray-text);
      font-size: 1.6rem;
      font-weight: 400;
      cursor: pointer;
      padding-bottom: .4rem;

      transition: all .3s;

      &:hover {
        filter: brightness(.8);
      }

      &.all {
        font-weight: ${(props: ContainerProps) => props.selectedFilter === 'todos' ? 600 : 400};
        border-bottom: ${(props: ContainerProps) => props.selectedFilter === 'todos' ? '.4rem solid #FFA585' : 'none'};
      }

      &.shirts {
        font-weight: ${(props: ContainerProps) => props.selectedFilter === 'camiseta' ? 600 : 400};
        border-bottom: ${(props: ContainerProps) => props.selectedFilter === 'camiseta' ? '.4rem solid #FFA585' : 'none'};
      }

      &.mugs {
        font-weight: ${(props: ContainerProps) => props.selectedFilter === 'caneca' ? 600 : 400};
        border-bottom: ${(props: ContainerProps) => props.selectedFilter === 'caneca' ? '.4rem solid #FFA585' : 'none'};
      }
    }
  }

  .loader-container {
    width: max-content;
    margin: 0 auto;
  }

  section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.2rem 2.2rem;

    h1 {
      font-size: 2.2rem
    }
  }

  @media screen and (max-width: 700px) {
    ul {
      margin: 6rem auto 6rem;
      gap: 1rem;
    }
  }

  @media screen and (max-width: 390px) {
    ul {
      flex-flow: column;
      justify-content: center;
      align-items: center;
      margin: 4rem auto 4rem;

      li {
        width: max-content;
      }
    }
  }
`;