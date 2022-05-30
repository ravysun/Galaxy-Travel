import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Pricings from '../components/Pricing';

function Pricing() {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING." text="Choose your trip" />
      <Pricings />
      <Footer />
    </div>
  );
}

export default Pricing;
