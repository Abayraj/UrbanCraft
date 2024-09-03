import React from "react"
import "./secondsection.css"
import CardImgone from "/src/asset/images/Cards_images/pikaso_texttoimage_prefab-homes-photos-small.jpeg"

const Secondsection = () => {
  return (
    <section>
  `    <header className="header-wrapper-second-section">
        <h2>
          Prefab Building Insights <br />
          From Experts
        </h2>
        <p>
          Dive into the world of prefabrication with insightful articles and
          expert advice. Explore the latest trends, tips, and advancements in
          prefab buildings from Ahmedabad's industry leaders.
        </p>
      </header>`
      <main className="card-container">
        <article className="card">
          <figure className="img-container">
            <img src={CardImgone} alt="A description of the image" />
            <figcaption>Prefab Homes</figcaption>
          </figure>
          <p>Prefab homes, or prefabricated homes, are revolutionizing the way we think about housing. Built from components that are manufactured off-site and then assembled at the final location, prefab homes offer a blend of affordability, efficiency.</p>
        </article>
        <article className="card">
        <figure className="img-container">
            <img src={CardImgone} alt="A description of the image" />
            <figcaption>Prefab Offices</figcaption>
          </figure>
          <p>Prefab offices are transforming the way businesses approach workspace design and functionality. Constructed in a factory setting and delivered as modular units, these innovative offices offer a flexible, cost-effective solution for modern business needs.</p>
        </article>
        <article className="card">
        <figure className="img-container">
            <img src={CardImgone} alt="A description of the image" />
            <figcaption>Portable Toilets</figcaption>
          </figure>
          <p>Dive into the world of prefabrication with insightful articles and expert advice. Explore the latest trends, tips, and advancements in prefab buildings from Ahmedabad's industry leaders.</p>
        </article>
        <article className="card">
        <figure className="img-container">
            <img src={CardImgone} alt="A description of the image" />
            <figcaption>Portable Toilets</figcaption>
          </figure>
          <p>Dive into the world of prefabrication with insightful articles and expert advice. Explore the latest trends, tips, and advancements in prefab buildings from Ahmedabad's industry leaders.</p>
        </article>
      </main>
    </section>
  )
}

export default Secondsection
