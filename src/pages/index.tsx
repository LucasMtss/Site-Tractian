import type { NextPage } from 'next';
import Header from '../sections/Header';
import BackgroundLines from '../components/BackgroundLines';
import Apresentation from '../sections/Apresentation';
import OurClients from '../sections/OurClients';
import WhyChoose from '../sections/WhyChoose';
import Products from '../sections/Products';
import HowItWorks from '../sections/HowItWorks';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

import { Container } from './_styles';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <BackgroundLines />
      <Apresentation />
      <OurClients />
      <WhyChoose />
      <Products />
      <HowItWorks />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;
