import React from 'react';

import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
// import Trainings from '../components/Training';
import Footer from '../components/Footer';
import Form from '../components/Form';

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT." text="Contact GLX Travel" />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
