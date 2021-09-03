import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  display: flex;
  margin: 2%;
  margin-top: 4rem;
  flex-direction: column;

  div.second {
    margin-left: 3rem;

    @media (max-width: 700px) {
      margin-left: 1rem;
    }

    @media (max-width: 500px) {
      margin-left: 0;
    }
  }
`;

export const Title = styled.h1`
  font-family: 'Offside', cursive;
  font-size: 2.3rem;
  margin: 1rem 0;
  width: 100%;
  text-align: center;

  @media (max-width: 700px) {
    margin-bottom: 2rem;
  }
`;

export const ContainerStep = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  div.container-title {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;

    div.number {
      width: 7rem;
      height: 7rem;
      border: solid 2px var(--white);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 2rem;

      @media (max-width: 700px) {
        width: 5rem;
        min-width: 5rem;
        height: 5rem;
        min-height: 5rem;
      }

      span {
        font-size: 1.8rem;

        @media (max-width: 700px) {
          font-size: 1.3rem;
        }
      }
    }

    span {
      font-size: 1.8rem;

      @media (max-width: 700px) {
        font-size: 1.5rem;
      }
    }
  }

  div.text {
    span {
      font-size: 1.4rem;

      @media (max-width: 700px) {
        font-size: 1.1rem;
      }
    }
  }
`;
