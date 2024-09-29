import React from "react";
import "./secondsectionCards.css";
import { motion } from "framer-motion";
import CardImgone from "/src/asset/images/Cards_images/pikaso_texttoimage_prefab-homes-photos-small.jpeg";
import CardImgtwo from "/src/asset/images/Cards_images/mobileOfficeImgae.jpg.jpg";
import CardImgthree from "/src/asset/images/Cards_images/prefab-toilet.jpg"


const SectionCards = () => {
  return (
    <section className="section-two">
      <header className="header-wrapper-second-section">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 3 } }}
          viewport={{ once: false }}
        >
          Prefab Building Insights <br />
          From Experts
        </motion.h2>
        <div>
        <motion.p
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 3 } }}
          viewport={{ once: false }}
        >
          Dive into the world of prefabrication with insightful articles and
          expert advice. Explore the latest trends, tips, and advancements in
          prefab buildings from Ahmedabad's industry leaders.
        </motion.p>
        </div>
  
      </header>
      <section
        className="cards-wrapper"
     
      >
        <motion.main 
        className="cards-grid"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 5 } }}
        viewport={{ once: false }}
        > 
          <article 
          className="card" 
          >
            <figure className="img-container">
              <img src={CardImgone} alt="prefab home" />
              <div className="text-container">
                <figcaption>Prefab Homes</figcaption>
                <p>
                  Prefab homes, or prefabricated homes, are revolutionizing the way we
                  think about housing. Built from components that are manufactured
                  off-site and then assembled at the final location, prefab homes offer
                  a blend of affordability, efficiency.
                </p>
              </div>
            </figure>


          </article>
          <article className="card">
            <figure className="img-container">
              <img src={CardImgtwo} alt="prefab office" />
              <div className="text-container">
                <figcaption>Prefab Offices</figcaption>
                <p>
                  Prefab homes, or prefabricated homes, are revolutionizing the way we
                  think about housing. Built from components that are manufactured
                  off-site and then assembled at the final location, prefab homes offer
                  a blend of affordability, efficiency.
                </p>
              </div>
            </figure>

          </article>
          <article className="card">
            <figure className="img-container">
              <img src={CardImgthree} alt="prefab toilets" />
              <div className="text-container">
                <figcaption>Portable Toilets</figcaption>
                <p>
                  Prefab homes, or prefabricated homes, are revolutionizing the way we
                  think about housing. Built from components that are manufactured
                  off-site and then assembled at the final location, prefab homes offer
                  a blend of affordability, efficiency.
                </p>
              </div>
            </figure>

          </article>
          <article className="card">
            <figure className="img-container">
              <img src={CardImgthree} alt="prefab toilets" />
              <div className="text-container">
                <figcaption>Portable Toilets</figcaption>
                <p>
                  Prefab homes, or prefabricated homes, are revolutionizing the way we
                  think about housing. Built from components that are manufactured
                  off-site and then assembled at the final location, prefab homes offer
                  a blend of affordability, efficiency.
                </p>
              </div>
            </figure>

          </article>
          
          
        </motion.main>
      </section>

    </section>
  );
};

export default SectionCards;




