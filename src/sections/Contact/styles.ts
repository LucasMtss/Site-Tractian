import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  display: flex;
  margin: 2%;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Offside', cursive;
  font-size: 2.3rem;
  margin: 1rem 0;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-family: 'Offside', cursive;
  font-size: 1.4rem;
  margin: 1rem 0 4rem;
  text-align: center;
  font-weight: 400;
`;

export const ContainerContact = styled.div`
  border: solid 3px var(--white);
  padding: 1.5rem 2rem;
  display: flex;
  width: 60rem;
  justify-content: space-between;

  @media (max-width: 1100px) {
    width: 50rem;
  }

  @media (max-width: 900px) {
    width: 40rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }

  div.container-inputs {
    display: flex;
    flex-direction: column;
    width: 60%;

    @media (max-width: 700px) {
      width: 100%;
    }

    span {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    input {
      border: solid 2px var(--white);
      border-radius: 2px;
      width: 90%;
      background-color: transparent;
      color: var(--white);
      font-size: 1.3rem;
      padding: 0.5rem 1rem;
      margin-bottom: 1.5rem;
      font-family: 'Offside', cursive;

      @media (max-width: 700px) {
        width: 100%;
      }
    }
  }

  div.container-monitored-points {
    width: 30%;
    display: flex;
    flex-direction: column;

    @media (max-width: 700px) {
      width: 100%;
    }

    span {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    div.container-radio {
      display: flex;

      input {
        width: 1rem;
        height: 1rem;
        margin-right: 1rem;
      }
      label {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        font-family: 'Offside', cursive;
      }
    }
  }
`;

export const Button = styled.div`
  margin-top: 2rem;
  display: flex;

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
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
    width: 12rem;

    @media (max-width: 380px) {
      width: 8rem;
    }

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
`;
