import React, { useState, useEffect } from 'react';
import './VideoSection.css';
import Video from '/src/asset/video/urbancraft.mp4';
import PlayIcon from '/src/asset/video/play_arrow.svg';
import Mute from '/src/asset/video/mute.svg';
import UnMute from '/src/asset/video/unmute.svg';
// import Nav from '../Navbar/nav'



const VideoSection = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [screenWidth, setScreenWidth] = useState(null); 
     useEffect(() => {

    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

    const handleTimeUpdate = (e) => {
        const video = e.target;
        setCurrentTime(video.currentTime);
    };

    const toggleMute = () => {
        const video = document.getElementById('videoElement');
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    const togglePlay = () => {
        const video = document.getElementById('videoElement');
        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoClick = (event) => {
        togglePlay();
        if (event.key === 'Enter' || event.key === ' ') {
            togglePlay();
        }
    };

    const handleVideoEnded = () => {
        const video = document.getElementById('videoElement');
        if (video) {
            video.currentTime = 0; 
            video.play(); 
            setIsPlaying(true);
        }
    };
    const getTextStyle = () => {
        const isMobile = screenWidth < 768;
        const isTablet = screenWidth >= 768 && screenWidth < 1200;
        if (currentTime >= 31) {
            return { display: 'none' };
        }
    
        
        let fontSize;
        let color = 'white';  
    
        if (currentTime >= 0 && currentTime < 4) {
            fontSize = isMobile ? '40px' : isTablet ? '80px' : '100px';
        } else if (currentTime >= 5 && currentTime < 10) {
            fontSize = isMobile ? '24px' : isTablet ? '40px' : '50px';
        } else if (currentTime >= 10 && currentTime < 13) {
            fontSize = isMobile ? '24px' : isTablet ? '45px' : '55px';
        } else if (currentTime >= 13 && currentTime < 19) {
            fontSize = isMobile ? '24px' : isTablet ? '45px' : '55px';
        } else if (currentTime >= 19 && currentTime < 25) {
            fontSize = isMobile ? '23px' : isTablet ? '43px' : '53px';
        } else if (currentTime >= 25 && currentTime < 31) {
            fontSize = isMobile ? '19px' : isTablet ? '40px' : '54px';
        }
    
        return { fontSize, color };
    };
    

    return (
        <div className="video-container">
       
            <video
                id="videoElement"
                className="responsive-video"
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnded} 
                onClick={handleVideoClick} 
            >
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
                
            </video>

            
            {!isPlaying && (
                <button className="play-button" onClick={togglePlay}>
                    <img src={PlayIcon} alt='play'/>
                </button>
            )}

            <div
             className="dynamic-text" style={getTextStyle()}>
                {currentTime < 4 && 'URBANCRAFT'}
                {currentTime >= 5 && currentTime < 13 && 'From Concept to Creation'}
                {currentTime >= 14 && currentTime < 19 && 'Building Dreams Together'} 
                {currentTime >= 19 && currentTime < 25 && 'Crafting Your Dream Space'} 
                {currentTime >= 25 && currentTime < 31 && (
        <>
            Every sunset brings a new beginning.
            <br />
            Let’s start yours—Contact Us!
        </>
    )} 
             
            </div>
            <button className="mute-button" onClick={toggleMute}>
                {isMuted ? <img src={Mute} alt='mute'/> : <img src={UnMute} alt='unmute'/> }
            </button>
        </div>
    );
};

export default VideoSection;


