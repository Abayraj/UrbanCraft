import React from 'react';
import Nav from '../components/Navbar/nav';
// import SecondSection from '../components/SectionSecond/Secondsection'
import Secondsection from '../components/SectionCards/SectionCards';

import './index.css';
import FirstImage from "/src/asset/images/view-water-tank-storage.jpg";
import SecondImage from '/src/asset/images/close-up-two-male-architect-s-hand-blueprint.jpg'
import ThirdImage from '/src/asset/images/architect_image.jpg'
import CustomCursor from '../components/CustomCursor/CustomCursor';
import AdvantageSection from '../components/AdvantageSection/AdvantageSection.js';
import Aboutcompany from '../components/AboutCompany/Aboutcompany';
import VideoSection from '../components/VideoSection/VideoSection.js';


const slides = [
  {
    id: 1,
    image: FirstImage,
    text: (
      <>
        Your imagination is the limit
        let’s build something extraordinary together
      </>
    )
  },
  {
    id: 2,
    image: SecondImage,
    text: (
      <>
        Elevate your space with our premier commercial builds Quality you can trust.
      </>
    )
  },
  {
    id: 3,
    image: ThirdImage,
    text: (
      <>
        Refresh your space with our renovations Watch us turn the old into new.
      </>
    )
  }
];

const IndexPage = () => { 
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <VideoSection/>
        <Secondsection />
        <Aboutcompany />


      </main>

      <CustomCursor />
      <AdvantageSection />


    </div>
  );
};

export default IndexPage;






