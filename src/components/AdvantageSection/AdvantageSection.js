import React from "react";
import "./AdvantageSection.css"
import FirstImage from "/src/asset/images/Advantage_section_cards_img/engineering.svg"
import SecondImage from "/src/asset/images/Advantage_section_cards_img/star.svg"
import ThirdImage from "/src/asset/images/Advantage_section_cards_img/home.svg"
import { motion } from "framer-motion";



const AdvantageSection = () => {

    return (
        <section className="section-adv-wrapper">
            <div className="adv-heading">
                <div>
                    <motion.h4
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 2,
                            y: 0,
                            transition: {
                                duration: 2,
                            },
                        }}

                    >OUR ADVANTAGE</motion.h4>
                    <motion.h3
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
                    >Providing The Best Service To Build Your Dream</motion.h3>
                </div>
            </div>
            <div className="adv-cards-wrapper">
                <div className="adv-cards">
                    <div className="adv-cards-img-container">
                        <motion.img src={FirstImage} alt=""
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            whileInView={{
                                opacity: 2,
                                x: 0,
                                transition: {
                                    duration: 3,
                                },
                            }}

                        />
                    </div>
                    <div className="adv-text">
                        <h2>Professional Workers</h2>
                        <p>"Our team of highly trained professionals combines years of experience with a commitment to delivering top-tier results every time."</p>
                    </div>
                </div>
                <div className="adv-cards">
                    <div className="adv-cards-img-container">
                        <motion.img src={SecondImage} alt="" 
                                 initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 2,
                                    y: 0,
                                    transition: {
                                        duration: 3,
                                    },
                                }}
                        />
                    </div>
                    <div className="adv-text">
                        <h2>Guaranteed Quality</h2>
                        <p>"With expert precision and attention to detail, our workers ensure that every project is completed to the highest quality standards."</p>
                    </div>
                </div>
                <div className="adv-cards">
                    <div className="adv-cards-img-container">
                        <motion.img src={ThirdImage} alt=""
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            whileInView={{
                                opacity: 2,
                                x: 0,
                                transition: {
                                    duration: 3,
                                },
                            }}
                        />
                    </div>
                    <div className="adv-text">
                        <h2>Experienced Craftsmanship</h2>
                        <p>"Leveraging their expertise and dedication, our workers consistently provide reliable, flawless results on every project."</p>
                    </div>
                </div>
            </div>

        </section>
    )


}


export default AdvantageSection;