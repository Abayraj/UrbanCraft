import React from 'react';
import Nav from '../components/Navbar/nav';
import Footer from '../components/Footer/Footer.js'
import SecondCards from '../components/SectionCards/SectionCards.js'
import CustomCursor from '../components/CustomCursor/CustomCursor';
import AdvantageSection from '../components/AdvantageSection/AdvantageSection.js';
import Aboutcompany from '../components/AboutCompany/Aboutcompany';
import OurService from "../components/OurService/OurService.js"
import VideoSection from '../components/VideoSection/VideoSection.js';
import"./index.css"
import ContactUs from '../components/ContactUs/ContactUs.js';


const IndexPage = () => { 
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <VideoSection/>
      <SecondCards/>
        <AdvantageSection/> 
        <Aboutcompany />
        <OurService/>
        <ContactUs />
        <Footer/>
      </main>
      <CustomCursor/>
    </div>
  );
};

export default IndexPage;






