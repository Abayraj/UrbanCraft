import React from "react";
import "./AwardSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import FirstImage from "/src/asset/images/Award_section_images/award-one.jpeg";
import SecondImage from "/src/asset/images/Award_section_images/award-certificate.jpeg";

const AwardSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 }
    })
  };

  return (
    <section className="award-section">
      <div className="award-container">
        <div className="award-content">
          <motion.div
            className="award-badge"
            initial="hidden"
            whileInView="visible"
            custom={0}
            variants={variants}
            viewport={{ once: true }}
          >
            🏆 National Recognition
          </motion.div>

          <motion.h2
            className="award-heading"
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={variants}
            viewport={{ once: true }}
          >
            Excellence Recognized
          </motion.h2>

          <motion.p
            className="award-highlight"
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={variants}
            viewport={{ once: true }}
          >
            UrbanCraft has been awarded:
          </motion.p>

          <motion.div
            className="award-title"
            initial="hidden"
            whileInView="visible"
            custom={3}
            variants={variants}
            viewport={{ once: true }}
          >
            "Indian Iconic Nation Builder of the Year – Excellence in Sanitation & Prefab Infrastructure"
            <div className="award-subtitle">Pride India Awards 2025</div>
          </motion.div>

          <motion.p
            className="award-description"
            initial="hidden"
            whileInView="visible"
            custom={4}
            variants={variants}
            viewport={{ once: true }}
          >
            This honor celebrates our dedication to redefining public sanitation and sustainable prefab infrastructure across India.
          </motion.p>

          <motion.div
            className="award-thanks"
            initial="hidden"
            whileInView="visible"
            custom={5}
            variants={variants}
            viewport={{ once: true }}
          >
            A heartfelt thank you to our visionary team, partners, and supporters.
          </motion.div>
        </div>

        <motion.div
          className="award-slider"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            className="award-swiper"
          >
            {[FirstImage, SecondImage].map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="award-image-wrapper">
                  <img src={img} alt={`award-${idx}`} loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardSection;
