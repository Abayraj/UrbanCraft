import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './secondsection.css';
import CardImgone from '/src/asset/images/Cards_images/pikaso_texttoimage_prefab-homes-photos-small.jpeg';
import CardImgtwo from '/src/asset/images/Cards_images/mobileOfficeImgae.jpg.jpg';
import CardImgThree from '/src/asset/images/Cards_images/prefab-toilet.jpg';

gsap.registerPlugin(ScrollTrigger);

const Secondsection = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray(".card");
    const spacer = 20;
    const minScale = 0.8;

    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    cards.forEach((card, index) => {
      const scaleVal = distributor(index, cards[index], cards);

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top`,
          scrub: true,
          markers: true,
          invalidateOnRefresh: true
        },
        ease: "none",
        scale: scaleVal
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top`,
        endTrigger: '.cards',
        end: `bottom top+=${200 + (cards.length * spacer)}`,
        pin: true,
        pinSpacing: false,
        markers: true,
        id: 'pin',
        invalidateOnRefresh: true,
      });
    });
  }, []);

  return (
    <section>
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
      <main className="card-container">
        <div className="container">
          <div className="cards">
            <article className="card">
              <figure>
                <img src={CardImgone} alt="Prefab Homes" />
                <figcaption>Prefab Homes</figcaption>
              </figure>
              <p>
                Prefab homes, or prefabricated homes, are revolutionizing the way we
                think about housing. Built from components that are manufactured
                off-site and then assembled at the final location, prefab homes
                offer a blend of affordability and efficiency.
              </p>
            </article>
            <article className="card">
              <figure>
                <img src={CardImgtwo} alt="Prefab Offices" />
                <figcaption>Prefab Offices</figcaption>
              </figure>
              <p>
                Prefab offices are transforming the way businesses approach workspace
                design and functionality. Constructed in a factory setting and
                delivered as modular units, these innovative offices offer a
                flexible, cost-effective solution for modern business needs.
              </p>
            </article>
            <article className="card">
              <figure>
                <img src={CardImgThree} alt="Portable Toilets" />
                <figcaption>Portable Toilets</figcaption>
              </figure>
              <p>
                Portable toilets offer a convenient and practical solution for
                temporary sanitation needs. Ideal for events, construction sites,
                and other temporary settings, they provide comfort and cleanliness
                where traditional facilities may not be available.
              </p>
            </article>
            <article className="card">
              <figure>
                <img src={CardImgone} alt="Additional Image" />
                <figcaption>Additional Image</figcaption>
              </figure>
              <p>
                This card provides additional information about the prefab industry.
              </p>
            </article>
            <article className="card">
              <figure>
                <img src={CardImgtwo} alt="Additional Image" />
                <figcaption>Additional Image</figcaption>
              </figure>
              <p>
                More details about prefab construction and its benefits.
              </p>
            </article>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Secondsection;


