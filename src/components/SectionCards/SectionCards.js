import React from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import './secondsectionCards.css';

import CardImgone from "/src/asset/images/Cards_images/pikaso_texttoimage_prefab-homes-photos-small.jpeg";
import CardImgtwo from "/src/asset/images/Cards_images/mobileOfficeImgae.jpg.jpg";
import CardImgthree from "/src/asset/images/Cards_images/prefab-toilet.jpg";
import CardImgfour from "/src/asset/images/Cards_images/container_home.jpg"

const SectionCards = () => {
  return (
    <section className="section-two">
      <header className="header-wrapper-second-section">
        <motion.h2
         initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, 
          transition: {
            duration: 3, 
          },
        }}
        viewport={{ once: false }}
        >Prefab Building Insights From Experts</motion.h2>
        <motion.p
         initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0, 
          transition: {
            duration: 3, 
          },
        }}
        viewport={{ once: false }}
        >
          Dive into the world of prefabrication with insightful articles and expert advice. Explore the latest trends, tips, and advancements in prefab buildings from Ahmedabad's industry leaders.
        </motion.p>
      </header>
      {/* <div className='what-offer'>
      <h1 >What we offer</h1>
      </div> */}
 
      <section className="cards-wrapper">
      <div className='what-offer'>
      <motion.h1 
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
      >What We Bring to You</motion.h1>
      </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1440: {
              slidesPerView:4,
              spaceBetween: 10,
            },
            // 1920: {
            //   slidesPerView: 5,
            //   spaceBetween: 50,
            // },
            // 2560: {
            //   slidesPerView: 6,
            //   spaceBetween: 60,
            // }
          }}
        >
          <SwiperSlide>
          <figure className="img-container">
                <img src={CardImgfour} alt="Prefab Office" />
                <figcaption>Container Home</figcaption>
              </figure>
          </SwiperSlide>

          <SwiperSlide>
            
              <figure className="img-container">
                <img src={CardImgone} alt="Prefab Office" />
                <figcaption>Container Home</figcaption>
              </figure>
          </SwiperSlide>

          <SwiperSlide>
          <figure className="img-container">
                <img src={CardImgtwo} alt="Prefab Office" />
                <figcaption>Container Home</figcaption>
              </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className="img-container">
                <img src={CardImgfour} alt="Prefab Office" />
                <figcaption>Container Home</figcaption>
              </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className="img-container">
                <img src={CardImgfour} alt="Prefab Office" />
                <figcaption>Container Home</figcaption>
              </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className="img-container">
                <img src={CardImgfour} alt="Prefab Office" />
                <figcaption>Container Home</figcaption>
              </figure>
          </SwiperSlide>
          <SwiperSlide>
          <figure className="img-container">
                <img src={CardImgfour} alt="Prefab Office" />
                <figcaption>Container Home</figcaption>
              </figure>
          </SwiperSlide>

          {/* Add more SwiperSlides here as needed */}
        </Swiper>
      </section>
    </section>
  );
};

export default SectionCards;






