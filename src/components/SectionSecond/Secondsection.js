import React, { useEffect } from 'react';
import './secondsection.css';
import CardImgone from '/src/asset/images/Cards_images/pikaso_texttoimage_prefab-homes-photos-small.jpeg';
import CardImgtwo from '/src/asset/images/Cards_images/mobileOfficeImgae.jpg.jpg'
import CardImgThree from '/src/asset/images/Cards_images/prefab-toilet.jpg'

const Secondsection = () => {
  useEffect(() => {
    const handleMouseMove = (evt) => {
      const x = evt.clientX / window.innerWidth;
      const y = evt.clientY / window.innerHeight;

      document.documentElement.style.setProperty('--mouse-x', x - 0.5);
      document.documentElement.style.setProperty('--mouse-y', y - 0.5);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => document.removeEventListener('mousemove', handleMouseMove);
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
        <article className="card">
          <figure className="img-container">
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
          <figure className="img-container">
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
          <figure className="img-container">
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
          <figure className="img-container">
            <img src={CardImgone} alt="Portable Toilets" />
            <figcaption>Portable Toilets</figcaption>
          </figure>
          <p>
            Portable toilets offer a convenient and practical solution for
            temporary sanitation needs. Ideal for events, construction sites,
            and other temporary settings, they provide comfort and cleanliness
            where traditional facilities may not be available.
          </p>
        </article>
      </main>
    </section>
  );
};

export default Secondsection;

