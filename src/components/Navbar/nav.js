import React, { useState } from "react"
import { Link } from "gatsby"
import "./nav.css"
import Logo from "/src/asset/images/urban-craft-logo-f20c6f55904cc6751a0284b9febda0c1.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      <img className="logo-img" src={Logo} alt="Urban Craft Logo" />

      {/* Show the hamburger menu only on small screens */}
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
        className={`nav-links-container ${
          isOpen ? "nav-links-container-open" : ""
        }`}
      >
        <Link className="nav-link" to="/about">
          About us
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/services">
          Services
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
