import styled from 'styled-components';

interface ContainerProps {
  selectedFilter: {
    filter: 'all' | 'shirts' | 'mugs'
  }
}

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 4%;

  ul {
    display: flex;
    gap: 4rem;
    margin: 6rem 0 8rem;

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
        font-weight: ${(props: ContainerProps) => props.selectedFilter.filter === 'all' ? 600 : 400};
        border-bottom: ${(props: ContainerProps) => props.selectedFilter.filter === 'all' ? '.4rem solid #FFA585' : 'none'};
      }

      &.shirts {
        font-weight: ${(props: ContainerProps) => props.selectedFilter.filter === 'shirts' ? 600 : 400};
        border-bottom: ${(props: ContainerProps) => props.selectedFilter.filter === 'shirts' ? '.4rem solid #FFA585' : 'none'};
      }

      &.mugs {
        font-weight: ${(props: ContainerProps) => props.selectedFilter.filter === 'mugs' ? 600 : 400};
        border-bottom: ${(props: ContainerProps) => props.selectedFilter.filter === 'mugs' ? '.4rem solid #FFA585' : 'none'};
      }
    }
  }

  section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.2rem 2.2rem;


  }
`;
