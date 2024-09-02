import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Nav from '../components/Navbar/nav';
import { motion } from 'framer-motion';
import './index.css';
import FirstImage from "/src/asset/images/view-water-tank-storage.jpg";
import SecondImage from '/src/asset/images/close-up-two-male-architect-s-hand-blueprint.jpg'
import ThirdImage from '/src/asset/images/architect_image.jpg'
import NextIcon from '/src/asset/images/arrow_forward_icon.svg';
import PrevIcon from '/src/asset/images/arrow_backward_icon.svg';
import CustomCursor from '../components/CustomCursor/CustomCursor';
const slides = [
  { 
    id: 1, 
    image: FirstImage, 
    text: (
      <>
        Your imagination is the limit
        let’s build something extraordinary together
      </>
    ) 
  },
  { 
    id: 2, 
    image:SecondImage, 
    text: (
      <>
    Elevate your space with our premier commercial builds. Quality you can trust.
      </>
    )
  },
  { 
    id: 3, 
    image:ThirdImage, 
    text: (
      <>
     Refresh your space with our renovations. Watch us turn the old into new.
      </>
    )
  }
];

const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

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
            transition={{ duration: 2, ease: 'easeIn' }}
            style={{
              backgroundImage: `url(${slide.image})`,
          
            }}
          >
            <motion.p
              className="slide-text"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {slide.text}
            </motion.p>
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
      <CustomCursor/>

    </div>
  );
};

export default IndexPage;






