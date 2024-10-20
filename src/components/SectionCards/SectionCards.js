import React from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'gatsby';
import cardData from '../../constants/cardData'; // Make sure the path is correct
import 'swiper/css';
import 'swiper/css/autoplay';
import './secondsectionCards.css';

const SectionCards = () => {
  return (
    <section className="section-two">
      <header className="header-wrapper-second-section">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 3 } }}
          viewport={{ once: false }}
        >
          UrbanCraft Expert Insights on Innovative Building Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 3 } }}
          viewport={{ once: false }}
        >
          Join us as we explore the transformative world of construction solutions. Gain valuable knowledge from industry experts and discover best practices that can elevate your projects across India.
        </motion.p>
      </header>

      <section className="cards-wrapper">
        <div className='what-offer'>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 3 } }}
          >
            What We Bring to You
          </motion.h1>
        </div>
        
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
            1440: { slidesPerView: 4, spaceBetween: 10 },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
             <Link to="/Details" state={{ someData: { title: card.title, description: card.description } }}>
                <figure className="img-container">
                  <img src={card.image.default} alt={card.title} className="card_image" />
                  <figcaption>{card.title}</figcaption>
                </figure>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default SectionCards;


