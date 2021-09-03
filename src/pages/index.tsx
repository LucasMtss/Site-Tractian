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

const Home: NextPage = () => {
  return (
    <div
      style={{
        width: '98%',
        display: 'flex',
        flexDirection: 'column',
        margin: '2%',
        marginTop: '8rem',
      }}
    >
      <Header />
      <BackgroundLines />
      <Apresentation />
      <OurClients />
      <WhyChoose />
      <Products />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
