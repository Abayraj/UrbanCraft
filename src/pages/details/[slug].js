import React from 'react';
import cardData from '../../constants/cardData';
import '../details/slug.css';
import Nav from './../../components/Navbar/nav';
import Footer from '../../components/Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Autoplay } from 'swiper/modules'; // Import the Autoplay module

// Don't forget to import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import ContactUs from '../../components/ContactUs/ContactUs';

const Details = ({ params }) => {
    const { slug } = params; // Extract slug from URL params
    console.log(slug, "slugg");

    // Find the specific card data based on the slug
    const selectedCard = cardData.find(card => card.slug === slug);
    console.log(selectedCard);

    if (!selectedCard) {
        return <p>Card not found</p>; // Handle case if slug doesn't match any card
    }

    return (
        <>
            <Nav />
            <section className='details-item-wrapper'>
                <div>
                    <h1>{selectedCard.title}</h1>
                    <p>{selectedCard.description}</p>
                    <h1>Advantages</h1>
                    <ul>
                        {selectedCard.advantages.map((data, index) => (
                            <li key={index}>{data}</li>
                        ))}
                    </ul>
                </div>
                <div className='image-wrapper'>
                    {/* Swiper for images */}
                    <Swiper
                        modules={[Autoplay]} // Enable Autoplay module
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 2500, disableOnInteraction: false }} // Set autoplay options
                        speed={1500} // Set transition speed in milliseconds for smooth effect
                        loop={true} // Enable looping for seamless transitions
                    >
                        {selectedCard.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`${selectedCard.title} - ${index}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            
            {/* Details Section */}
            <section className='details-section'>
                <p>{selectedCard.details}</p> {/* Assuming details are in your data */}
            </section>
            <ContactUs />
            <Footer />
        </>
    );
};

export default Details;
