import React, { useState } from "react";
import "./OurService.css";
import ServiceImage from "/src/asset/images/workers_image.jpeg";
import ArrowUp from "/src/asset/images/arrow_up.svg";
import ArrowDown from "/src/asset/images/arrow_down.svg";
import faqs from "../../constants/faqs";
import { motion } from "framer-motion";

const OurService = () => {
    const [open, setOpen] = useState(-1);

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 }
        })
    };

    const faqVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
        exit: { opacity: 0, height: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="construction-services">
            <div className="services-wrapper">
                <motion.article 
                    className="service-item" 
                    initial="hidden" 
                    whileInView="visible"
                    viewport={{ once: false }} // Added viewport
                    variants={itemVariants}
                    custom={0} // First item
                >
                    <header>
                        <h2>Our Construction<br />Services</h2>
                    </header>
                    <p>
                        We offer a wide range of construction services, including house construction, prefab structures, cafe construction, container homes, office refurbishment, commercial construction, renovation and remodeling, site development, infrastructure projects,<br /> and interior design. Whether you need to build a new home, create an inviting cafe, or revamp your office space, our team is equipped to deliver exceptional quality and results tailored to your needs.
                    </p>
                    <button>Contact Us</button>
                    <img loading="lazy" src={ServiceImage} alt="Construction Services" />
                </motion.article>
                <aside className="side-content">
                    <h3>Innovative Customizable Construction Solutions</h3>
                    <p>
                        From constructing modern homes and innovative container structures to transforming commercial spaces and refurbishing offices,
                        our expertise spans across a variety of construction services.
                        Whether you envision a new home, a stylish café, or a refreshed workspace, our skilled team delivers tailored solutions with
                        unmatched quality and craftsmanship, ensuring your project's success.
                    </p>
                    <ul className="styled-list">
                        {["Prefab Construction Homes", "Home Renovation and Remodeling", "Commercial Building Construction", "Container Home Construction", "Design Services", "Cafe and Restaurant Construction"].map((item, index) => (
                            <motion.li 
                                key={index}
                                custom={index}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible" // Changed from animate to whileInView
                                viewport={{ once: false }} // Added viewport
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                    <section className="accordion-wrapper">
                        <h1>Questions You May Have ?</h1>
                        {faqs.map((data, index) => (
                            <div key={data.id} className="faq-container">
                                <hr />
                                <motion.div 
                                    className="question-wrapper" 
                                    initial={{ opacity: 0, scale: 0.9 }} 
                                    whileInView={{ opacity: 1, scale: 1 }} // Changed from animate to whileInView
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: false }} // Added viewport
                                >
                                    <h5 className="question" onClick={() => setOpen(open === index ? -1 : index)}>
                                        {data.question}
                                    </h5>
                                    <button onClick={() => setOpen(open === index ? -1 : index)} className="icons">
                                        <img className="arrow" src={open === index ? ArrowUp : ArrowDown} alt="Toggle Arrow" />
                                    </button>
                                </motion.div>
                                {open === index && (
                                    <motion.div
                                        className="answer-wrapper"
                                        variants={faqVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        viewport={{ once: false }} // Added viewport
                                    >
                                        <p className="answer">{data.answer}</p>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                        <hr />
                    </section>
                </aside>
            </div>
        </section>
    );
};

export default OurService;
