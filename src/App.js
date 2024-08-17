import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import './App.css';
import me from './assets/profpic1small.png'


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
        <div className='child-section'>
        <div>
        <h2>Section 1</h2>
        <p>Hi! I'm Jillian, a dynamic artist, UI/UX developer, and front-end builder who thrives on pushing creative boundaries. I'm passionate about crafting unique and engaging digital experiences that stand out from the status quo. Let's create something amazing together!</p>
        </div>
        <img className='profile-pic' src={me} alt="My Example" /> 
        </div>
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
