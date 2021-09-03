import styled from 'styled-components';

export const VertcalLine = styled.div`
  height: 305rem;
  width: 3px;
  position: absolute;
  left: 2rem;
  top: 8rem;
  background: var(--white);

  @media (max-width: 1024px) {
    height: 440rem;
  }

  @media (max-width: 740px) {
    left: 1rem;
    height: 420rem;
  }

  @media (max-width: 650px) {
    left: 1rem;
    height: 410rem;
  }

  @media (max-width: 450px) {
    left: 0.5rem;
  }

  @media (max-width: 375px) {
    height: 460rem;
  }
`;

export const HorizontalLine = styled.div`
  width: 90%;
  height: 3px;
  position: absolute;
  right: 2rem;
  top: 8rem;
  background: var(--white);

  @media (max-width: 650px) {
    left: 1rem;
  }

  @media (max-width: 450px) {
    left: 0.5rem;
  }
`;
