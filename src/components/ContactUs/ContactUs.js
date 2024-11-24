import React from 'react';
import './ContactUs.css';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const whatsappNumber = '918129284448';
    const message = 'Hello Urban Craft! I’m interested in learning more about your eco-friendly building solutions.';
    const handleWhatsAppRedirect = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
    return (
        <section className='contact-us-wrapper' id='contact-us'>
            <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 3 } }}
                    viewport={{ once: false }}
            >
                <h3>Ready to Build with Urban Craft?</h3>
                <p>Take the first step towards creating a modern, eco-friendly space that you’ll love. Urban Craft is here to help you every step of the way. Let’s make your project a success together!</p>
            </motion.div>
            <motion.div
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0, transition: { duration: 3 } }}
                   viewport={{ once: false }}
            >
                <button onClick={handleWhatsAppRedirect}>CONTACT US</button>
            </motion.div>
        </section>
    );
}

export default ContactUs;
