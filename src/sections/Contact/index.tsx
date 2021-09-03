import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Container, ContainerContact, Subtitle, Title, Button } from './styles';

const BackgroundLines = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 250 });
  }, []);

  return (
    <Container>
      <Title>Melhore seus processos</Title>
      <Subtitle>Preencha o formulário para uma demonstração.</Subtitle>
      <ContainerContact data-aos='zoom-in'>
        <div className='container-inputs'>
          <span>Nome</span>
          <input type='text' />
          <span>Cargo</span>
          <input type='text' />
          <span>Email profissional</span>
          <input type='text' />
          <span>Telefone</span>
          <input type='text' placeholder='Ex: (99) 999999999' />
        </div>
        <div className='container-monitored-points'>
          <span>Quantidade de pontos monitorados:</span>
          <div className='container-radio'>
            <input type='radio' name='monitoredPoints' value={1} id='10 a 20' />
            <label htmlFor='10 a 20'>10 a 20</label>
          </div>
          <div className='container-radio'>
            <input type='radio' name='monitoredPoints' value={2} id='21 a 30' />
            <label htmlFor='21 a 30'>21 a 30</label>
          </div>
          <div className='container-radio'>
            <input type='radio' name='monitoredPoints' value={3} id='31 a 50' />
            <label htmlFor='31 a 50'>31 a 40</label>
          </div>
          <div className='container-radio'>
            <input
              type='radio'
              name='monitoredPoints'
              value={1}
              id='mais de 50'
            />
            <label htmlFor='mais de 50'>Mais de 50</label>
          </div>
          <Button>
            <div className='skew'>
              <div className='no-skew'>
                <div className='no-skew'>Enviar</div>
              </div>
            </div>
          </Button>
        </div>
      </ContainerContact>
    </Container>
  );
};

export default BackgroundLines;
