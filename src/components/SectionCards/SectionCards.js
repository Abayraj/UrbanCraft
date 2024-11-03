// src/components/SectionCards.js
import React from 'react';
import './secondsectionCards.css';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'gatsby';
import cardData from '../../constants/cardData';


const SectionCards = () => {
  return (
    <section className="section-two">
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
             <Link key={index} to={`/details/${card.slug}`}>
                <figure className="img-container">
                  <img src={card.image} alt={card.title} className="card_image" />
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