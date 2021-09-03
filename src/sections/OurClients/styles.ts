import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  display: flex;
  margin: 2%;
  margin-top: 8rem;
  justify-content: space-evenly;

  @media (max-width: 1060px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const CardClient = styled.div`
  width: 30rem;
  border: solid 3px var(--white);
  padding-top: 0.5rem;
  transition: all 500ms;

  :hover {
    transform: scale(1.05);
  }

  div {
    flex: 1;
    background-color: '#E5E5E5';
  }

  @media (max-width: 600px) {
    width: 20rem;
  }
`;
