import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './secondsection.css';

import CardImgone from '/src/asset/images/Cards_images/pikaso_texttoimage_prefab-homes-photos-small.jpeg';
import CardImgtwo from '/src/asset/images/Cards_images/mobileOfficeImgae.jpg.jpg';


// Sample data array for cards
const cardData = [
  {
    imgSrc:CardImgone,
    heading: 'Prefab Homes',
    text: 'Prefab homes, or prefabricated homes, are revolutionizing the way we think about housing. Built from components that are manufactured off-site and then assembled at the final location, prefab homes offer a blend of affordability and efficiency.'
  },
  {
    imgSrc: CardImgtwo,
    heading: 'Prefab Offices',
    text: 'Prefab offices are transforming the way businesses approach workspace design and functionality. Constructed in a factory setting and delivered as modular units, these innovative offices offer a flexible, cost-effective solution for modern business needs.'
  },
  {
    imgSrc:CardImgone,
    heading: 'Portable Toilets',
    text: 'Portable toilets offer a convenient and practical solution for temporary sanitation needs. Ideal for events, construction sites, and other temporary settings, they provide comfort and cleanliness where traditional facilities may not be available.'
  }
];

gsap.registerPlugin(ScrollTrigger);

const Secondsection = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray(".card");
    const spacer = 20;
    const minScale = 0.9;

    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    cards.forEach((card, index) => {
      const scaleVal = distributor(index, cards[index], cards);

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top`,
          scrub: true,
          markers: true, // Set to false in production
          invalidateOnRefresh: true
        },
        ease: "none",
        scale: scaleVal
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top`,
        endTrigger: '.cards',
        end: `bottom top+=${200 + (cards.length * spacer)}`, // Adjusted end position
        pin: true,
        pinSpacing: false,
        markers: false, // Set to false in production
        id: `pin-${index}`,
        invalidateOnRefresh: true,
      });
    });

    
  }, []);

  return (
    <section>
      <header className="header-wrapper-second-section">
        <h2 className='header-text'>
          Prefab Building Insights <br />
          From Experts
        </h2>
        <p>
          Dive into the world of prefabrication with insightful articles and
          expert advice. Explore the latest trends, tips, and advancements in
          prefab buildings from Ahmedabad's industry leaders.
        </p>
      </header>
      <main className="card-container">
        <div className="container">
          <div className="cards">
            {cardData.map((card, index) => (
              <article key={index} className="card">
                <figure>
                  <img src={card.imgSrc} alt={card.heading} className="card-img" />
                  <figcaption className="card-title">{card.heading}</figcaption>
                </figure>
                <section className="card-content">
                  <p className="card-text">{card.text}</p>
                </section>
              </article>
            ))}
          </div>
        </div>
      </main>

      <header className="header-wrapper-second-section">
        <h2>
          Prefab Building Insights <br />
          From Experts
        </h2>
        <p>
          Dive into the world of prefabrication with insightful articles and
          expert advice. Explore the latest trends, tips, and advancements in
          prefab buildings from Ahmedabad's industry leaders.
        </p>
      </header>
      <header className="header-wrapper-second-section">
        <h2>
          Prefab Building Insights <br />
          From Experts
        </h2>
        <p>
          Dive into the world of prefabrication with insightful articles and
          expert advice. Explore the latest trends, tips, and advancements in
          prefab buildings from Ahmedabad's industry leaders.
        </p>
      </header>
    </section>
  );
};

export default Secondsection;



