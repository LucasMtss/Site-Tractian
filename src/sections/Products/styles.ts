import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  display: flex;
  margin: 2%;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
    margin: 2% 0;
    padding: 0;
  }
`;

export const ContainerProduct = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const ContainerImage = styled.div`
  width: 30%;

  @media (max-width: 1100px) {
    width: 20rem;
    margin: 2rem 0;
  }

  @media (max-width: 450px) {
    width: 15rem;
  }
`;

export const ContainerDescription = styled.div`
  border-radius: 5px;
  width: 65%;
  height: fit-content;
  min-height: 20rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(205, 205, 205, 1) 50%,
    rgba(30, 29, 29, 1) 100%
  );
  padding: 2rem 15rem 1rem 1rem;

  @media (max-width: 1300px) {
    padding-right: 10rem;
  }

  @media (max-width: 1150px) {
    padding-right: 5rem;
  }

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  h1 {
    font-size: 1.6rem;
    margin-left: 0.8rem;
    margin-bottom: 1rem;
    color: var(--black);
  }

  span {
    font-size: 1.2rem;
    color: var(--black);
    line-height: 2rem;

    @media (max-width: 1100px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
