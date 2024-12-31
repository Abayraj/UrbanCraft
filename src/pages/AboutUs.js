import React from 'react';
import './AboutUs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import aboutUsData from '../constants/aboutUsData';
import wash from '../asset/images/About_us/hand.svg'
import home from '../asset/images/About_us/home.svg'
import container from '../asset/images/About_us/black_container.jpeg'
import waste_mangaement from '../asset/images/About_us/waste_mangaement.svg'
import prefab from '../asset/images/About_us/prefab.svg'
import logo from '../asset/images/urbancraft_logo_black.png'
import Footer from '../components/Footer/Footer';
import ContactUs from '../components/ContactUs/ContactUs';
import { Link } from 'gatsby';


const AboutUs = () => {
  const whatsappNumber = '918129284448';
  const message = 'Hello Urban Craft! I’m interested in learning more about your eco-friendly building solutions.';
  const handleWhatsAppRedirect = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <>
      <main>
        <section className='about-us-sectionone-container'>
          <div
            className='section-one-text'
          >
            <Link to="/">
              <img className='logo' src={logo} alt='' loading="lazy"/>
            </Link>
            <h1>About Us</h1>
            {/* <p>{aboutUsData.aboutUs.introText}</p> */}
          </div>
        </section>
        <section className='section-two-wrapper'>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            loop={true}
            className='mySwiper'
          >
            {aboutUsData.sections.map((section, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className='section-two-item-wrapper'
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                  viewport={{ once: false }}
                >
                  <div className='img-container'>
                    <img className='section-two-img' src={section.image} alt={section.title} loading="lazy"/>
                  </div>
                  <div className='section-two-text-container'>
                    <h4>
                      {section.title}
                    </h4>
                    <h2>
                      {section.subtitle}
                    </h2>
                    <p>
                      {section.text}
                    </p>
                    <button>
                      {section.buttonText}
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className='section-third-wrapper'>
          <motion.div className='section-third-left-text'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 3 } }}
            viewport={{ once: false }}
          >
            <h2

            >OUR MISSION</h2>
            <p>
              Urbancraft Alliance India is an innovative startup
              dedicated to revolutionizing sustainable living
              through modernized washroom experiences, eco-
              friendly portable homes, and prefab construction
              solutions. Our unique blend of technology and
              design aims to enhance everyday living while
              tackling critical environmental challenges, making
              us a forward-thinking leader in sustainable living.
            </p>
            <button onClick={handleWhatsAppRedirect} className='btn-cu'>Contact Us</button>
          </motion.div>
          <div className='section-third-card-wrapper'>
            <motion.div className='section-third-card'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 3 } }}
              viewport={{ once: false }}
            >
              <img src={wash} alt='hand-image' loading="lazy"/>
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
              <img src={home} alt='home-image' loading="lazy"/>
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
              <img src={prefab} alt='prefab-home' loading="lazy"/>
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
              <img src={waste_mangaement} alt='waste-management-image' loading="lazy"/>
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
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 3 } }}
            viewport={{ once: false }}
          >
            <h2>Join Us on Our Journey</h2>
            <p>
              At Urbancraft Alliance India, we’re more than a company—we’re a movement toward a sustainable future. Whether you’re an individual, family, or business, we invite you to explore our innovative solutions and join us in making a lasting difference for the planet.
            </p>
          </motion.div>
          <div className='img-container'>
            <img className='container-img' src={container} alt='container-home' loading="lazy"/>
            <motion.div className='img-text'
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 4 } }}
              viewport={{ once: false }}
            >
              <motion.blockquote
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                viewport={{ once: false }}
              >
                <p>Whatever good things we build end up building us.</p>
                <footer class="author-name">— Jim Rohn</footer>
              </motion.blockquote>
            </motion.div>
          </div>
        </section>

      </main>
      <ContactUs />
      <Footer />
    </>
  );
};

export default AboutUs;