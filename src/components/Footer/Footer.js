import React from 'react';
import logo from "/src/asset/images/urbancraft_logo.png"
import facebook from "/src/asset/images/Footer/facebook.svg"
import whatsapp from "/src/asset/images/Footer/whatsapp.svg"
import instagram from "/src/asset/images/Footer/instagram.svg"
import "./footer.css"


const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='left-logo-container'>
        <h2 className='footer-left-text'>Your vision our foundation<br/>UrbanCraft</h2>
      </div>
      <div className='right-side-wrapper'>
      <p className='contact-us'>Contact Us</p>
        <div className='icons-right-container'>
          <div className='icons-cricle'>
            <img src={instagram} alt='instagram' />
          </div>
          <div className='icons-cricle'>
            <img src={facebook} alt='facebook' />
          </div>
          <div className='icons-cricle'>
            <img src={whatsapp} alt='whatsapp' />
          </div>
        </div>
        <div className='copyright-text'>
          <p>&copy; {new Date().getFullYear()} UrbanCraft. All rights reserved.</p>
          <p>Email: info@urbancraft.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer