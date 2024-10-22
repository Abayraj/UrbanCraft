import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion'; // Import Framer Motion
import './AboutUs.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import aboutUsData from '../constants/aboutUsData'; // Adjust the import path as necessary
import wash from '../asset/images/About_us/hand.svg'
import home from '../asset/images/About_us/home.svg'
import waste_mangaement from '../asset/images/About_us/waste_mangaement.svg'
import prefab from '../asset/images/About_us/prefab.svg'
import logo from '../asset/images/urbancraft_logo_black.png'

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 5.5 } },
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 3.5 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
  };

  return (
    <>
      <main>
        <section className='about-us-sectionone-container'>
          <motion.div
            className='section-one-text'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <img className='logo' src={logo} alt=''/>
            <h1>About Us</h1>
            {/* <p>{aboutUsData.aboutUs.introText}</p> */}
          </motion.div>
        </section>
        <section className='section-two-wrapper'>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className='mySwiper'
          >
            {aboutUsData.sections.map((section, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className='section-two-item-wrapper'
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className='img-container'>
                    <img className='section-two-img' src={section.image} alt={section.title} />
                  </div>
                  <div className='section-two-text-container'>
                    <motion.h4
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {section.title}
                    </motion.h4>
                    <motion.h2
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {section.subtitle}
                    </motion.h2>
                    <motion.p
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {section.text}
                    </motion.p>
                    <motion.button
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {section.buttonText}
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className='section-third-wrapper'>
          <div className='section-third-left-text'>
            <h2>OUR VISION</h2>
            <p>
              Urbancraft Alliance India is an innovative startup at the forefront of sustainable living solutions.
              With a focus on modernizing washroom experiences and creating eco-friendly portable homes, we are
              committed to addressing pressing environmental challenges while enhancing the quality of life for
              our customers.
            </p>
            <button className='btn-cu'>Contact Us</button>
          </div>
          <div className='section-third-card-wrapper'>
            <div className='section-third-card'>
              <img src={wash} alt='' />
              <div className='card'>
                <h4>Sustainable Washrooms</h4>
                <p>
                  We tackle common washroom problems with cutting-edge designs that prioritize hygiene,
                  water conservation, and energy efficiency.
                </p>
              </div>
            </div>
            <div className='section-third-card'>
              <img src={home} alt='' />
              <div className='card'>
                <h4>Container Homes</h4>
                <p>
                  Urbancraft Alliance is revolutionizing the concept of housing with stylish, modular
                  container homes that are cost-effective and quick to assemble.
                </p>
              </div>
            </div>
            <div className='section-third-card'>
              <img src={prefab} alt='' />
              <div className='card'>
                <h4>Prefab Structures</h4>
                <p>
                  Prefabricated buildings offer faster build times, reduced labor costs, and minimized waste
                  while providing flexibility in design.
                </p>
              </div>
            </div>
            <div className='section-third-card'>
              <img src={waste_mangaement} alt='' />
              <div className='card'>
                <h4>Waste Management & Sanitation</h4>
                <p>
                  Our focus on effective waste management ensures sustainability while protecting public health
                  through innovative solutions.
                </p>
              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;