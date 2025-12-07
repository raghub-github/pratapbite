import Header from '../components/Header';
import Marquee from '../components/Marquee';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Delivery from '../components/Delivery';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Marquee />
      <Hero />
      <Features />
      <Delivery />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}
