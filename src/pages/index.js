import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Nav from '../components/Navbar/nav';
import { motion } from 'framer-motion';
import './index.css';
import FirstImage from "/public/static/view-water-tank-storage.jpg";
import NextIcon from '/public/icons/arrow_forward_icon (1).svg';
import PrevIcon from '/public/icons/arrow_backward_icon (2).svg';
const slides = [
  { 
    id: 1, 
    image: FirstImage, 
    text: (
      <>
        Your imagination is the limit<br />
        let’s build something extraordinary<br /> together
      </>
    ) 
  },
  { 
    id: 2, 
    image:'', 
    text: (
      <>
        Elevate your business with our expertly crafted commercial spaces.<br />
        Discover the difference of quality construction.
      </>
    )
  },
  { 
    id: 3, 
    image: '', 
    text: (
      <>
        Revitalize your space with our renovation services.<br />
        See how we transform the old into the new.
      </>
    )
  }
];

const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // useEffect(() => {
  //   const interval = setInterval(handleNext, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  const slide = slides[currentSlide];

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <section className="slider-container">
          <button onClick={handlePrev} className="prev-btn">
          <img src={PrevIcon} alt='prev' />
          </button>

          {/* Image Slider */}
          <motion.div
            className="slide"
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{
              backgroundImage: `url(${slide.image})`,
          
            }}
          >
            <motion.div
              className="slide-text"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {slide.text}
            </motion.div>
          </motion.div>

          <button onClick={handleNext} className="next-btn">
            <img src={NextIcon} alt='next' />
          </button>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Get in touch with us for more information.</p>
          <Link to="/contact">Contact Us</Link>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Gatsby Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default IndexPage;






