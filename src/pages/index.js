import React from 'react';
import { Link } from 'gatsby';
// import './index.css'; // Optional: Import a CSS file for styling

const IndexPage = () => (
  <div>
    <header>
      <h1>Welcome to My Gatsby Site!</h1>
      <p>This is a simple static site built with Gatsby.</p>
    </header>
    <main>
      <section>
        <h2>About</h2>
        <p>Gatsby is a powerful static site generator built on React.</p>
        <Link to="/about">Learn more about us</Link>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Get in touch with us for more information.</p>
        <Link to="/contact">Contact Us</Link>
      </section>
    </main>
    <footer>
      <p>&copy; 2024 My Gatsby Site. All rights reserved.</p>
    </footer>
  </div>
);

export default IndexPage;

