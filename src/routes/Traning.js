import React from 'react';

import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Trainings from '../components/Training';
import Footer from '../components/Footer';

function Traning() {
  return (
    <div>
      <Navbar />
      <HeroImage heading="TRAINING." text="Pre-Flight & In-Flight Training" />
      <Trainings />
      <Footer />
    </div>
  );
}

export default Traning;
