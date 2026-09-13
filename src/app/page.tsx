import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Countdown from '@/components/Countdown/Countdown';
import About from '@/components/About/About';
import Events from '@/components/Events/Events';
import Competitions from '@/components/Competitions/Competitions';
import Speakers from '@/components/Speakers/Speakers';
import Workshops from '@/components/Workshops/Workshops';
import Register from '@/components/Register/Register';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Events />
        <Competitions />
        <Speakers />
        <Workshops />
        <Register />
      </main>
      <Footer />
    </>
  );
}
