import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  display: flex;
  margin: 2%;
  margin-top: 8rem;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1060px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-family: 'Offside', cursive;
  font-size: 2.3rem;
  margin: 1rem 0;

  span.tractian {
    font-family: 'Turret Road', cursive;
  }
`;

export const ContainerReasons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-top: 3rem;
`;

export const Reason = styled.div`
  width: 40rem;
  height: 20rem;
  border: solid 2px var(--white);
  padding: 1rem;
  display: flex;
  margin-bottom: 2rem;

  @media (max-width: 750px) {
    height: 15rem;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    height: auto;
  }

  div.container-text {
    display: flex;
    flex-direction: column;
    width: 60%;

    @media (max-width: 650px) {
      width: 100%;
      text-align: center;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;

      @media (max-width: 750px) {
        font-size: 1.6rem;
      }
    }

    span {
      font-size: 1.3rem;
      text-align: justify;

      @media (max-width: 750px) {
        font-size: 1rem;
      }
    }
  }

  div.container-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;

    @media (max-width: 650px) {
      width: 100%;
    }
  }
`;

export const Button = styled.div`
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
`;
