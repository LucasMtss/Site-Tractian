import logo from '../../assets/images/Logo.svg';
import Image from 'next/image';
import { IoEarth } from 'react-icons/io5';

import {
  ContainerLanguage,
  Container,
  ContainerLinks,
  HiddenMenu,
  ButtonHiddenMenu,
  ContainerHiddenMenu,
  ContainerImage,
} from './styles';
import React, { useState } from 'react';

const Header = (): JSX.Element => {
  const [showHiddenMenu, setShowHiddenMenu] = useState(false);

  return (
    <Container>
      <ContainerImage>
        <Image
          src={logo}
          alt='Tractian'
          layout='responsive'
          height={200}
          width={350}
        />
      </ContainerImage>
      <ContainerLinks>
        <span>Conheça o produto</span>
        <span>Sobre nós</span>
        <span>Materiais gratuitos</span>
        <span>Área do cliente</span>
        <ContainerLanguage>
          <IoEarth size={30} fill='#fff' cursor='pointer' />
          <span>PT-BR</span>
        </ContainerLanguage>
      </ContainerLinks>

      <ContainerHiddenMenu>
        <ContainerLanguage>
          <IoEarth size={30} fill='#fff' cursor='pointer' />
          <span>PT-BR</span>
        </ContainerLanguage>
        <ButtonHiddenMenu
          size={50}
          onClick={() => setShowHiddenMenu(!showHiddenMenu)}
        />
        <HiddenMenu theme={{ display: showHiddenMenu ? 'flex' : 'none' }}>
          <span>Conheça o produto</span>
          <span>Sobre nós</span>
          <span>Materiais gratuitos</span>
          <span>Área do cliente</span>
        </HiddenMenu>
      </ContainerHiddenMenu>
    </Container>
  );
};

export default Header;
