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

export const ContainerImage = styled.div`
  width: 50rem;

  @media (max-width: 860px) {
    width: 40rem;
  }
  @media (max-width: 690px) {
    width: 30rem;
  }
  @media (max-width: 520px) {
    width: 20rem;
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 30rem;
  text-align: end;

  @media (max-width: 1060px) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 550px) {
    width: 90%;
  }

  h1 {
    font-family: 'Share Tech', sans-serif;
    font-size: 3rem;
    margin: 1rem 0;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }

  span {
    font-size: 1.5rem;

    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  .container-buttons {
    margin-top: 2rem;
    display: flex;

    @media (max-width: 450px) {
      flex-direction: column;
      align-items: center;
    }

    div.skew {
      transform: skew(-40deg);
      background-color: transparent;
      border: solid 2px var(--white);
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      color: var(--white);
      margin-right: 2rem;
      cursor: pointer;
      transition: all 400ms;

      :hover {
        background-color: var(--white);
        color: var(--black);
      }
    }

    div.no-skew {
      transform: skew(22deg);
      font-family: 'Share Tech', sans-serif;
      text-align: center;
      font-size: 1.5rem;
      overflow: hidden;

      @media (max-width: 500px) {
        font-size: 1.2rem;
      }
    }

    div.client {
      display: flex;
      flex-direction: column;

      @media (max-width: 450px) {
        margin-top: 1rem;
      }

      span {
        font-size: 1.2rem;
      }

      a {
        color: var(--blue);
      }
    }
  }
`;
