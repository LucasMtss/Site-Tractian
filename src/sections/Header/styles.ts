import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Container = styled.div`
  width: 100vw;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  background-color: var(--black);
  z-index: 2;
`;

export const ContainerImage = styled.div`
  width: 20rem;

  @media (max-width: 600px) {
    width: 10rem;
  }
`;

export const ContainerLinks = styled.nav`
  display: flex;

  @media (max-width: 1200px) {
    display: none;
  }

  span {
    color: var(--white);
    font-size: 1.3rem;
    margin-right: 2rem;
    font-family: 'Mina', sans-serif;
    cursor: pointer;

    @media (max-width: 1300px) {
      font-size: 1.1rem;
    }
  }
`;

export const ContainerLanguage = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  @media (max-width: 405px) {
    margin-left: 0.5rem;
  }

  span {
    font-size: 1.1rem;
    margin-left: 0.9rem;

    @media (max-width: 405px) {
      margin-left: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

export const HiddenMenu = styled.nav`
  width: 20rem;
  display: ${(props) => props.theme.display};
  flex-direction: column;
  border: solid 2px var(--white);
  position: absolute;
  top: 7rem;
  right: 2rem;
  background-color: var(--black);

  @media (max-width: 360px) {
    right: 1rem;
  }

  span {
    width: 100%;
    padding: 1rem 0;
    text-align: center;
    cursor: pointer;
  }
`;

export const ContainerHiddenMenu = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
  }
`;

export const ButtonHiddenMenu = styled(GiHamburgerMenu)`
  fill: var(--white);
  cursor: pointer;
  display: none;
  margin-left: 2rem;

  @media (max-width: 1200px) {
    display: block;
  }

  @media (max-width: 375px) {
    margin-left: 1rem;
  }
`;
