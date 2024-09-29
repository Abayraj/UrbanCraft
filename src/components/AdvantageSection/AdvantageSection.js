import React from "react";
import "./AdvantageSection.css"
import FirstImage from "/src/asset/images/Advantage_section_cards_img/engineering.svg"
import SecondImage from "/src/asset/images/Advantage_section_cards_img/star.svg"
import ThirdImage from "/src/asset/images/Advantage_section_cards_img/home.svg"




const AdvantageSection = () => {

    return (
        <section className="section-adv-wrapper">
            <div className="adv-heading">
                <div>
                    <h4>OUR ADVANTAGE</h4>
                    <h3>Providing The Best Service To<br />Build Your Dream</h3>
                </div>
            </div>
            <div className="adv-cards-wrapper">
                <div className="adv-cards">
                    <div className="adv-cards-img-container">
                    <img src={FirstImage} alt=""/>
                    </div>
                    <div>
                        <h2>Professional Workers</h2>
                        <p>"The best, expertly trained workers, equipped with exceptional skills and experience,<br/>consistently delivering high-quality results with precision,<br/> dedication, and reliability."</p>
                    </div>
                </div>
                <div className="adv-cards">
                    <div className="adv-cards-img-container">
                    <img src={SecondImage} alt=""/>
                    </div>
                    <div>
                        <h2>Guaranteed quality</h2>
                        <p>"The best, expertly trained workers, equipped with exceptional skills and experience,<br/>consistently delivering high-quality results with precision,<br/> dedication, and reliability."</p>
                    </div>
                </div>
                <div className="adv-cards">
                    <div className="adv-cards-img-container">
                    <img src={ThirdImage} alt=""/>
                    </div>
                    <div>
                        <h2>Professional Workers</h2>
                        <p>"The best, expertly trained workers, equipped with exceptional skills and experience,<br/>consistently delivering high-quality results with precision,<br/> dedication, and reliability."</p>
                    </div>
                </div>
            </div>
        </section>
    )


}


export default AdvantageSection;