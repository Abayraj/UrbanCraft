import React from 'react';
import facebook from "/src/asset/images/Footer/facebook.svg"
import whatsapp from "/src/asset/images/Footer/whatsapp.svg"
import instagram from "/src/asset/images/Footer/instagram.svg"
import { motion } from "framer-motion";
import "./footer.css"


const Footer = () => {
  const whatsappNumber = '918129284448';
  const message = 'Hello Urban Craft! I’m interested in learning more about your eco-friendly building solutions.';
  const handleWhatsAppRedirect = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <footer className='footer-wrapper'>
      <div className='left-logo-container'>
        <motion.h2 className='footer-left-text'
                 initial={{
                  opacity: 0,
                  y: 60,
              }}
              whileInView={{
                  opacity: 2,
                  y: 0,
                  transition: {
                      duration: 3,
                  },
              }}
        >Your goals our mission<br />UrbanCraft</motion.h2>
      </div>
      <div className='right-side-wrapper'>
        <motion.p className='contact-us'
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: false }}
        >Connect with Us</motion.p>
        <motion.div className='icons-right-container'
         initial={{
          opacity: 0,
          y: 60,
      }}
      whileInView={{
          opacity: 2,
          y: 0,
          transition: {
              duration: 3,
          },
      }}
        >
          <button className='icons-cricle'>
            <img src={instagram} alt='instagram' />
          </button>
          <button className='icons-cricle'>
            <img src={facebook} alt='facebook' />
          </button>
          <button onClick={handleWhatsAppRedirect} className='icons-cricle'>
            <img src={whatsapp} alt='whatsapp' />
          </button>
        </motion.div>
        <motion.div className='copyright-text'
         initial={{
          opacity: 0,
          x: 30,
      }}
      whileInView={{
          opacity: 2,
          x: 0,
          transition: {
              duration: 3,
          },
      }}

        >
          <p>&copy; {new Date().getFullYear()} UrbanCraft. All rights reserved.</p>
          <p>Image by <a  rel="noopener noreferrer" href="https://www.freepik.com" target="_blank">Freepik</a></p>
          <p>Email: info@urbancraft.com</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer;