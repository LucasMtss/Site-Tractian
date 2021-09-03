import automation from '../../assets/images/industry.svg';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Container, ContainerImage, ContainerTexts } from './styles';
import { useEffect } from 'react';

const Apresentation = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 2000, delay: 350 });
  }, []);

  return (
    <Container>
      <ContainerImage data-aos='fade-right'>
        <Image
          src={automation}
          alt='automação industrial'
          layout='responsive'
          height={300}
          width={450}
        />
      </ContainerImage>
      <ContainerTexts data-aos='fade-left'>
        <span>Monitoramento de máquinas Tractian:</span>
        <h1>O sistema preditivo mais completo do mercado</h1>
        <span>
          Evite falhas nas suas máquinas e torne o tempo de inatividade uma
          coisa do passado com sistema preditivo da TRACTIAN.
        </span>

        <div className='container-buttons'>
          <div className='skew'>
            <div className='no-skew'>
              <div className='no-skew'>Demonstração</div>
            </div>
          </div>
          <div className='client'>
            <span>Já é cliente?</span>
            <a href=''>Acesse aqui</a>
          </div>
        </div>
      </ContainerTexts>
    </Container>
  );
};

export default Apresentation;
