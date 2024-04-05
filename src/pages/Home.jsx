import Hero from '../components/Hero';
import Header from '../components/Header';
import Brands from '../components/Brands';
import MassageGun from '../components/MassageGun';
import Benefits from '../components/Benefits';
import Order from '../components/Order';
import Recovery from '../components/Recovery';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Brands/>
      <MassageGun/>
      <Benefits/>
      <Order/>
      <Recovery/>
      <Footer/>
    </div>
  )
}

export default Home