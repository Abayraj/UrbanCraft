import React from "react"
import "./Aboutcompany.css"
import { motion } from "framer-motion"
import AboutusImg from "/src/asset/images/about_us.jpg"
import LogoIcon from "/src/asset/images/logo_icon.jpg"

const AboutCompany = () => {
  return (
    <section className="about-company-section">
      <div className="about-company-content">
        <div className="img-contianer">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 4 } }}
            viewport={{ once: false }}
            src={AboutusImg}
            alt="About us - Company overview"
            className="about-company-img"
            loading="lazy"
          />
          <motion.div className="img-box"
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 4 } }}
                  viewport={{ once: false }}
          >
            <img className="img-box-black" alt="black-box" src={LogoIcon} />
          </motion.div>
          <motion.div className="img-box-white"
             initial={{ opacity: 0, x: 200 }}
             whileInView={{ opacity: 1, x: 0, transition: { duration: 4 } }}
             viewport={{ once: false }}
          >

          </motion.div>
        </div>
        <div className="company-info">
          <motion.h4
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 4 } }}
                viewport={{ once: false }}
          >who we are?</motion.h4>
          <h2>
            UrbanCraft <br/> 
            Our Journey
          </h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 4 } }}
            viewport={{ once: false }}
          >
            Urban Craft Alliance India has established itself as one of Kerala's
            most reliable providers of prefabricated buildings, serving clients
            across India. At the core of our operations is a commitment to
            quality, affordability, and customer satisfaction. Our cutting-edge
            factory is where we bring your prefab visions to life, ensuring
            efficiency and precision in every structure we build. We are more
            than just a prefab company; we are your partners in shaping the
            future. Join us on our journey to redefine construction with a
            sustainable, economical, and efficient approach.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany;
