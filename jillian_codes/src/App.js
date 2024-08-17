import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import './App.css';

const App = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <Link to="section1" smooth={true} duration={500}>
              Section 1
            </Link>
          </li>
          <li>
            <Link to="section2" smooth={true} duration={500}>
              Section 2
            </Link>
          </li>
          <li>
            <Link to="section3" smooth={true} duration={500}>
              Section 3
            </Link>
          </li>
          <li>
            <button onClick={scrollToTop}>Back to Top</button>
          </li>
        </ul>
      </nav>

      {/* Page Sections */}
      <Element name="section1" className="section section1">
        <h2>Section 1</h2>
      </Element>

      <Element name="section2" className="section section2">
        <h2>Section 2</h2>
      </Element>

      <Element name="section3" className="section section3">
        <h2>Section 3</h2>
      </Element>
    </div>
  );
};

export default App;
