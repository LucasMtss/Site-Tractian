import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Container, ContainerStep, Title } from './styles';

const HowItWorks = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 1500, delay: 350 });
  }, []);

  return (
    <Container>
      <Title>Como funciona?</Title>
      <ContainerStep data-aos='fade-right'>
        <div className='container-title'>
          <div className='number'>
            <span>1</span>
          </div>
          <span>Nós enviamos os sensores</span>
        </div>
        <div className='text'>
          <span>
            Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o
            sensor na sua empresa. Não necessita passar pelo Wi-Fi industrial e
            nem falar com a TI.
          </span>
        </div>
      </ContainerStep>
      <ContainerStep className='second' data-aos='fade-left'>
        <div className='container-title'>
          <div className='number'>
            <span>2</span>
          </div>
          <span>Cole na sua máquina</span>
        </div>
        <div className='text'>
          <span>
            Nosso sensor é colado na máquina como um bandaid. Ele é responsável
            por transmitir os dados de vibração e temperatura do equipamento
            para a plataforma.
          </span>
        </div>
      </ContainerStep>
      <ContainerStep data-aos='fade-right'>
        <div className='container-title'>
          <div className='number'>
            <span>3</span>
          </div>
          <span>Receba insights valiosos</span>
        </div>
        <div className='text'>
          <span>
            Nosso sistema centraliza informações precisas sobre suas máquinas,
            com insights e análises, como saúde do equipamento, detecção de
            anomalias e variação de espectros.
          </span>
        </div>
      </ContainerStep>
    </Container>
  );
};

export default HowItWorks;
