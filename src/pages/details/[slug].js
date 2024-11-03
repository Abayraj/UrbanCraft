import React from 'react';
import cardData from '../../constants/cardData';
import '../details/slug.css';
import Nav from './../../components/Navbar/nav';
import Footer from '../../components/Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay } from 'swiper/modules'; 


import 'swiper/css';
import 'swiper/css/autoplay';
import ContactUs from '../../components/ContactUs/ContactUs';

const Details = ({ params }) => {
    const { slug } = params;
  
    const selectedCard = cardData.find(card => card.slug === slug);
    console.log(selectedCard);

    if (!selectedCard) {
        return <p>Card not found</p>; 
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
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 2500, disableOnInteraction: false }} 
                        speed={1500}
                        loop={true} 
                    >
                        {selectedCard.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt={`${selectedCard.title} - ${index}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            {slug === 'modern-washrooms' && selectedCard.videos && (
                <>
                    <section className='details-section'>
                        {selectedCard.videos.length > 0 && (
                            <>
                                <div key={0}>
                                    <video className='details-video' src={selectedCard.videos[0]} type="video/mp4"  autoPlay muted loop />

                                </div>
                                <div>
                                    <h1 className='video-side-text'>Take a Closer Look<br className="line-break"/> at Our Stunning Washroom Designs!</h1>
                                </div>

                            </>
                        )}
                    </section>
                    <section className='details-section-2'>
                        {selectedCard.videos.length > 0 && (
                            <>
                                <div key={1}> 
                                    <video className='details-video'
                                     src={selectedCard.videos[1]} type="video/mp4" autoPlay muted loop/>

                                </div>
                                <div>
                               <h1 className='video-side-text'>Explore the Elegance<br className="line-break"/> of Modern Washroom Designs!</h1>
                                </div>

                            </>
                        )}

                    </section>
                </>

            )}

            <ContactUs />
            <Footer />
        </>
    );
};

export default Details;

