import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TextCarousel from './components/TextCarousel';
import ProductSlider from './components/ProductSlider';
import ImageWithText from './components/ImageWithText';
import InfoSection from './components/InfoSection';
import CustomerReviews from './components/CustomerReviews';
import OffersSection from './components/OffersSection';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <HeroSection />
      <TextCarousel />
      <ProductSlider />
      <ImageWithText />
      <InfoSection />
      <CustomerReviews />
      <OffersSection />
      <TextCarousel />
      <Footer />
    </div>
  );
}

export default App
