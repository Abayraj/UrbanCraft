
import React, { useState } from "react"
import "./OurService.css"
import ServiceImage from "/src/asset/images/builders.jpg"
import ArrowUp from "/src/asset/images/arrow_up.svg"
import ArrowDown from "/src/asset/images/arrow_down.svg"
import faqs from "../../constants/faqs"
import { motion } from "framer-motion";
const OurService = () => {

    // Function to toggle the open/close state of each accordion
    const [open, setOpen] = useState(-1);
    return (
        <section className="construction-services">
            <div className="services-wrapper">
                <article className="service-item">
                    <header>
                        <h2>Our Construction<br />Services</h2>
                    </header>
                    <p>
                        We offer a wide range of construction services, including house construction, prefab structures, cafe construction, container homes, office refurbishment, commercial construction, renovation and remodeling, site development, infrastructure projects, and interior design. Whether you need to build a new home, create an inviting cafe, or revamp your office space, our team is equipped to deliver exceptional quality and results tailored to your needs.
                    </p>

                    <button>contact us</button>
                    <img src={ServiceImage} alt="f" />
                </article>
                <aside className="side-content">
                    <h3>Construction of all kinds of house</h3>
                    <p>
                        We offer a wide range of construction services, including house construction, prefab structures, cafe construction, container homes, office refurbishment, commercial construction, renovation and remodeling, site development, infrastructure projects, and interior design. Whether you need to build a new home, create an inviting cafe, or revamp your office space, our team is equipped to deliver exceptional quality and results tailored to your needs.
                    </p>
                    <ul className="styled-list">
                        <li>Prefab Construction Homes</li>
                        <li>Home Renovation and Remodeling</li>
                        <li>Commercial Building Construction</li>
                        <li>Container Home Construction</li>
                        <li>Design Services</li>
                        <li>Cafe and Restaurant Construction</li>
                    </ul>
                    {/* Accordion Section for Q&A */}
                    <section className="accordion-wrapper">
                        <h1>Frequently Asked Questions?</h1>
                        {faqs.map((data, index) => (
                            <div key={data.id} className="faq-container">
                                <hr/>
                                <div className="question-wrapper">
                                    <h5 className="question" onClick={() => setOpen(open === index ? -1 : index)}>
                                        {data.question}
                                    </h5>
                                    <button onClick={() => setOpen(open === index ? -1 : index)} className="icons">
                                        <img className="arrow" src={open === index ? ArrowUp : ArrowDown} alt="toggle arrow" />
                                    </button>
                                </div>
                                {open === index && (
                                    <motion.div
                                        className="answer-wrapper"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <p className="answer">{data.answer}</p>
                                    </motion.div>
                                )}
                            </div>
                            
                        ))}
                              <hr/>
                    </section>
                </aside>
            </div>

        </section>

    )
}

export default OurService