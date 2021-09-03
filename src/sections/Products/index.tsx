import React, { useEffect } from 'react';
import sensor1 from '../../assets/images/sensor1.svg';
import sensor2 from '../../assets/images/sensor2.svg';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  Container,
  ContainerDescription,
  ContainerImage,
  ContainerProduct,
} from './styles';

const Products = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 350 });
  }, []);

  return (
    <Container>
      <ContainerProduct>
        <ContainerImage data-aos='fade-right'>
          <Image
            src={sensor1}
            layout='responsive'
            width={200}
            height={200}
            alt='sensor Tractian'
          />
        </ContainerImage>
        <ContainerDescription data-aos='fade-left'>
          <h1>Monitoramento online de ponta</h1>
          <span>
            Conectamos seus ativos aos nossos sensores IoT que conseguem medir
            com precisão a temperatura, vibração, horímetro e consumo de energia
            estimado. Todas as informações são enviadas em tempo real para nossa
            plataforma, onde você tem acesso a tudo de forma fácil e online. Sem
            a necessidade de gateways ou infraestrutura própria para salvar e
            analisar esses dados.
          </span>
        </ContainerDescription>
      </ContainerProduct>
      <ContainerProduct>
        <ContainerImage data-aos='fade-right'>
          <Image
            src={sensor2}
            layout='responsive'
            width={200}
            height={200}
            alt='Sensor Smart Trac'
          />
        </ContainerImage>
        <ContainerDescription data-aos='fade-left'>
          <h1>Sensor Smart Trec</h1>
          <span>
            Bateria para 90 mil coletas de Vibração. Receptor 2G/3G/4G que
            suporta até 20 sensores. Identifica o padrão de funcionamento da sua
            máquina.
          </span>
        </ContainerDescription>
      </ContainerProduct>
    </Container>
  );
};

export default Products;
