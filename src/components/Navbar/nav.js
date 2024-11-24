import React, { useState } from "react"
import { Link } from "gatsby"
import "./nav.css"
import Logo from '/src/asset/images/urbancraft_logo_black.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      <Link to="/">
        <img className="logo-img" src={Logo} alt="Urban Craft Logo" />
      </Link>
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="hamburger-menu"
        onClick={toggleMenu}
      >
        <div className={`bar ${isOpen ? "bar1-open" : ""}`}></div>
        <div className={`bar ${isOpen ? "bar2-open" : ""}`}></div>
        <div className={`bar ${isOpen ? "bar3-open" : ""}`}></div>
      </button>

      {/* Navigation links for large screens */}
      <div
        className={`nav-links-container ${isOpen ? "nav-links-container-open" : ""
          }`}
      >
        <Link className="nav-link" to="/AboutUs">
          About us
        </Link>
        <Link className="nav-link" to="#contact-us">
          Contact
        </Link>
        <Link className="nav-link" to="#construction-services">
          Services
        </Link>
      </div>
    </nav>
  )
}

export default Navbar