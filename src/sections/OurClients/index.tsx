import { CardClient, Container } from './styles';
import electrolux from '../../assets/images/electrolux.svg';
import ambev from '../../assets/images/ambev.svg';
import yara from '../../assets/images/yara.svg';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BackgroundLines = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 350 });
  }, []);

  return (
    <Container>
      <CardClient data-aos='flip-left'>
        <div>
          <Image
            src={electrolux}
            alt='Electrolux'
            layout='responsive'
            height={200}
            width={350}
          />
        </div>
      </CardClient>
      <CardClient data-aos='flip-up'>
        <div>
          <Image
            src={ambev}
            alt='Ambev'
            layout='responsive'
            height={200}
            width={350}
          />
        </div>
      </CardClient>
      <CardClient data-aos='flip-right'>
        <div>
          <Image
            src={yara}
            alt='Yara'
            layout='responsive'
            height={200}
            width={350}
          />
        </div>
      </CardClient>
    </Container>
  );
};

export default BackgroundLines;
