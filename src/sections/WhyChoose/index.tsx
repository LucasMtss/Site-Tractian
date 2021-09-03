import React, { useEffect } from 'react';
import Image from 'next/image';

import automacao from '../../assets/images/icons/automacao.svg';
import manutencaoPreventiva from '../../assets/images/icons/manutencaoPreventiva.svg';
import monitoramentoOnline from '../../assets/images/icons/monitoramentoOnline.svg';
import setup from '../../assets/images/icons/setup.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Button, Container, ContainerReasons, Reason, Title } from './styles';

const WhyChoose = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 350 });
  }, []);

  return (
    <Container>
      <Title>
        Por que escolher a <span className='tractian'>Tractian</span> ?
      </Title>
      <ContainerReasons>
        <Reason data-aos='fade-down-right'>
          <div className='container-text'>
            <h1>Manutenção preditiva</h1>
            <span>
              Detecção automática de falhas, saúde do ativo em tempo real,
              confiabilidade e insights automáticos.
            </span>
          </div>
          <div className='container-icon'>
            <Image
              src={manutencaoPreventiva}
              alt='Manutençao preditiva'
              height={150}
              width={150}
            />
          </div>
        </Reason>
        <Reason data-aos='fade-down-left'>
          <div className='container-text'>
            <h1>Automação de OS</h1>
            <span>
              Automatize a geração de ordens de serviço com base em horas ou em
              dias e melhore a sua preventiva.
            </span>
          </div>
          <div className='container-icon'>
            <Image
              src={automacao}
              alt='Automação de OS'
              height={150}
              width={150}
            />
          </div>
        </Reason>
        <Reason data-aos='fade-up-right'>
          <div className='container-text'>
            <h1>Monitoramento online</h1>
            <span>
              Sensor Tractian coleta dados de vibração, temperatura, horímetro e
              consumo de energia em tempo real.
            </span>
          </div>
          <div className='container-icon'>
            <Image
              src={monitoramentoOnline}
              alt='Monitoramento online'
              height={150}
              width={150}
            />
          </div>
        </Reason>
        <Reason data-aos='fade-up-left'>
          <div className='container-text'>
            <h1>Setup instantâneo</h1>
            <span>
              Solução Plug & Play, sem necessidade de gateways ou roteadores,
              comunicação via 2G/3G independente.
            </span>
          </div>
          <div className='container-icon'>
            <Image
              src={setup}
              alt='Setup instantâneo'
              height={150}
              width={150}
            />
          </div>
        </Reason>
      </ContainerReasons>
      <Button>
        <div className='skew'>
          <div className='no-skew'>
            <div className='no-skew'>Começar agora</div>
          </div>
        </div>
      </Button>
    </Container>
  );
};

export default WhyChoose;
