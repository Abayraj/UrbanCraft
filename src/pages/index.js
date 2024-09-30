import React from 'react';
import Nav from '../components/Navbar/nav';
// import SecondSection from '../components/SectionSecond/Secondsection'
import Secondsection from '../components/SectionCards/SectionCards';
import CustomCursor from '../components/CustomCursor/CustomCursor';
import AdvantageSection from '../components/AdvantageSection/AdvantageSection.js';
import Aboutcompany from '../components/AboutCompany/Aboutcompany';
import OurService from "../components/OurService/OurService.js"
import VideoSection from '../components/VideoSection/VideoSection.js';


const IndexPage = () => { 
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <VideoSection/>
        <Secondsection />
        <AdvantageSection/>
        <Aboutcompany />
        <OurService/>
      </main>

      <CustomCursor />
    


    </div>
  );
};

export default IndexPage;






