import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import './AboutUs.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import aboutUsData from '../constants/aboutUsData';
import wash from '../asset/images/About_us/hand.svg'
import home from '../asset/images/About_us/home.svg'
import container from '../asset/images/About_us/black_container.jpeg'
import waste_mangaement from '../asset/images/About_us/waste_mangaement.svg'
import prefab from '../asset/images/About_us/prefab.svg'
import logo from '../asset/images/urbancraft_logo_black.png'
import Footer from '../components/Footer/Footer';
import ContactUs from '../components/ContactUs/ContactUs';


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
            <img className='logo' src={logo} alt='' />
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
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 3 } }}
              viewport={{ once: false }}
            >OUR VISION</motion.h2>
            <motion.p
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                   viewport={{ once: false }}
            >
              Urbancraft Alliance India is an innovative startup at the forefront of sustainable living solutions.
              With a focus on modernizing washroom experiences and creating eco-friendly portable homes, we are
              committed to addressing pressing environmental challenges while enhancing the quality of life for
              our customers.
            </motion.p>
            <button className='btn-cu'>Contact Us</button>
          </div>
          <div className='section-third-card-wrapper'>
            <motion.div className='section-third-card'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 3 } }}
              viewport={{ once: false }}
            >
              <img src={wash} alt='hand-image' />
              <div className='card'>
                <h4>Sustainable Washrooms</h4>
                <p>
                  We tackle common washroom problems with cutting-edge designs that prioritize hygiene,
                  water conservation, and energy efficiency.
                </p>
              </div>
            </motion.div>
            <motion.div className='section-third-card'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 3 } }}
              viewport={{ once: false }}
            >
              <img src={home} alt='home-image' />
              <div className='card'>
                <h4>Container Homes</h4>
                <p>
                  Urbancraft Alliance is revolutionizing the concept of housing with stylish, modular
                  container homes that are cost-effective and quick to assemble.
                </p>
              </div>
            </motion.div>
            <motion.div className='section-third-card'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 3 } }}
              viewport={{ once: false }}
            >
              <img src={prefab} alt='prefab-home' />
              <div className='card'>
                <h4>Prefab Structures</h4>
                <p>
                  Prefabricated buildings offer faster build times, reduced labor costs, and minimized waste
                  while providing flexibility in design.
                </p>
              </div>
            </motion.div>
            <motion.div className='section-third-card' 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 3 } }}
              viewport={{ once: false }}
            >
              <img src={waste_mangaement} alt='waste-management-image' />
              <div className='card'>
                <h4>Waste Management & Sanitation</h4>
                <p>
                  Our focus on effective waste management ensures sustainability while protecting public health
                  through innovative solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className='section-fourth-wrapper'>
          <div>
            <h2>Join Us on Our Journey</h2>
            <p>
              At Urbancraft Alliance India, we’re more than a company—we’re a movement toward a sustainable future. Whether you’re an individual, family, or business, we invite you to explore our innovative solutions and join us in making a lasting difference for the planet.
            </p>
          </div>
          <div className='img-container'>
            <img className='container-img' src={container} alt='container-home' />
            <div className='img-text'>
              <blockquote>
                <p>Whatever good things we build end up building us.</p>
                <footer class="author-name">— Jim Rohn</footer>
              </blockquote>
            </div>
          </div>
        </section>

      </main>
      <ContactUs />
      <Footer />
    </>
  );
};

export default AboutUs;