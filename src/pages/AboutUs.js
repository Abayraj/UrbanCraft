import React from 'react';
// import { motion } from 'framer-motion';
import './AboutUs.css'; 
import Nav from "../components/Navbar/nav"

const AboutUs = () => {
  return (
    <>
    <Nav/>
    <main>
      <section className='about-us-sectionone-container'>
        <div className='section-one-text'>
          <h1>About Us</h1>
          <p>Urbancraft Alliance India: A Space for Now and Then!</p>
        </div>
        <div className='text-image-container'>
          <div className='left-text-parent'>
            <h1>Our Vison</h1>
            <p>Urbancraft Alliance India is an innovative startup at the forefront of sustainable living solutions. With a focus on modernizing washroom experiences and creating eco-friendly portable homes, 
              we are committed to addressing pressing environmental challenges while enhancing the quality of life for our customers.</p>
          </div>
          <img src="" alt=''/>
        </div>
      </section>
    </main>
    </>
  );
};

export default AboutUs;