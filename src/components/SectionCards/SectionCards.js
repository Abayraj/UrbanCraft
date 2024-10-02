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
      <section className="cards-wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
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
              spaceBetween: 30,
            },
            1440: {
              slidesPerView:4,
              spaceBetween: 40,
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            2560: {
              slidesPerView: 6,
              spaceBetween: 60,
            }
          }}
        >
          <SwiperSlide>
            <article className="card">
              <figure className="img-container">
                <img src={CardImgone} alt="Prefab Home" />
                <div className="text-container">
                  <figcaption>Prefab Homes</figcaption>
                  <p>
                    Prefab homes are revolutionizing housing. Built from components manufactured off-site, they offer a blend of affordability and efficiency.
                  </p>
                </div>
              </figure>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="card">
              <figure className="img-container">
                <img src={CardImgtwo} alt="Prefab Office" />
                <div className="text-container">
                  <figcaption>Prefab Offices</figcaption>
                  <p>
                    Prefab offices offer cost-effective and fast solutions for modern workspaces. Built quickly, they save both time and money.
                  </p>
                </div>
              </figure>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="card">
              <figure className="img-container">
                <img src={CardImgthree} alt="Prefab Toilets" />
                <div className="text-container">
                  <figcaption>Portable Toilets</figcaption>
                  <p>
                    Portable prefab toilets offer quick setup, hygiene, and versatility in areas where sanitation is required temporarily or permanently.
                  </p>
                </div>
              </figure>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="card">
              <figure className="img-container">
                <img src={CardImgthree} alt="Prefab Toilets" />
                <div className="text-container">
                  <figcaption>Portable Toilets</figcaption>
                  <p>
                    Portable prefab toilets offer quick setup, hygiene, and versatility in areas where sanitation is required temporarily or permanently.
                  </p>
                </div>
              </figure>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="card">
              <figure className="img-container">
                <img src={CardImgthree} alt="Prefab Toilets" />
                <div className="text-container">
                  <figcaption>Portable Toilets</figcaption>
                  <p>
                    Portable prefab toilets offer quick setup, hygiene, and versatility in areas where sanitation is required temporarily or permanently.
                  </p>
                </div>
              </figure>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="card">
              <figure className="img-container">
                <img src={CardImgthree} alt="Prefab Toilets" />
                <div className="text-container">
                  <figcaption>Portable Toilets</figcaption>
                  <p>
                    Portable prefab toilets offer quick setup, hygiene, and versatility in areas where sanitation is required temporarily or permanently.
                  </p>
                </div>
              </figure>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="card">
              <figure className="img-container">
                <img src={CardImgthree} alt="Prefab Toilets" />
                <div className="text-container">
                  <figcaption>Portable Toilets</figcaption>
                  <p>
                    Portable prefab toilets offer quick setup, hygiene, and versatility in areas where sanitation is required temporarily or permanently.
                  </p>
                </div>
              </figure>
            </article>
          </SwiperSlide>

          {/* Add more SwiperSlides here as needed */}
        </Swiper>
      </section>
    </section>
  );
};

export default SectionCards;






