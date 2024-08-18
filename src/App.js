import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import "./App.css";
import me from "./assets/profpic1small.png";
import legacy from "./assets/docsecurity.svg";
import { Card } from "./components/Card";
import AItutor from "./assets/aitutor.png";
import Github from "./assets/github-color.svg";
import Boltstack from "./assets/boltstack.png";
import Edqualis from "./assets/edqualis.png"

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
              Howdy
            </Link>
          </li>
          <li>
            <Link to="section2" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="section3" smooth={true} duration={500}>
              Graphics
            </Link>
          </li>
          <li>
            <button onClick={scrollToTop}>Back to Top</button>
          </li>
        </ul>
      </nav>

      {/* Page Sections */}
      <Element name="section1" className="section section1">
        <h2>howdy</h2>
        <div className="child-section">
          <div className="inner-child-section">
            <p>
              Hi! I'm Jillian, a dynamic artist, UI/UX developer, and front-end
              builder who thrives on pushing creative boundaries. I'm passionate
              about crafting unique and engaging digital experiences that stand
              out from the status quo. Let's create something amazing together!
            </p>
            <img className="profile-pic" src={me} alt="My Example" />{" "}
          </div>

          <div className="icon-section">
            <img className="icons" src={Github} />
            <img className="icons" src={Github} />
            <img className="icons" src={Github} />
            <img className="icons" src={Github} />
          </div>
        </div>
      </Element>

      <Element name="section2" className="section section2">
        <h2>Section 2</h2>

        <Card
          imgSrc={legacy}
          imgAlt="lawyer app"
          title="Legacy Architects"
          info="Recent collaborative Figma project for estate planning lawyers. Password is shyfidelity."
          link="https://www.figma.com/design/ZulEUpRGw8VCuAIIwSchlI/Lawyer-side-of-Legacy-Architects?node-id=2-282&t=m3vfyViyT4aNMUUV-1"
          buttonText="Go to Figma project"
        />

        <Card
          imgSrc={AItutor}
          imgAlt="a cute pictuer of a computer talking about AI"
          title="AI Tutor"
          info="Here are Figma screens and a live link of an AI tutor site, my latest project using chat gpt. I created all the designs, brand aesthetic, and the working front end build. The live link is available in the Figma file. Enjoy!"
          link="https://www.figma.com/design/IFub1w2Bx04gq61DbCnyt5/AI-TUTOR?node-id=37-3088&t=aIfRkgyvpJaP4cUd-1"
          buttonText="Go to Figma project"
        />
              <Card imgSrc={Boltstack}
      imgAlt="a screenshot of a Boltstack website talking about AI"
       title="Boltstack"
       info="Discover Boltstack.com, where I led marketing efforts and front-end development. I created everything on this site from graphics to functionality and CSS media queries for a mobile-friendly design. Built on internal low-code software."
    
       link= "https://boltstack-dev.softwarebbd.com/"
       buttonText="Go to site"
       />

<Card imgSrc={Edqualis}
      imgAlt="a screenshot of a Boltstack website talking about AI"
       title="Edqualis"
       info="Edqualis is an expansive education platform that engages admins, teachers, and students in one place. With the ability to generate content, forms, custom Dashboards, classes, lessons, rubrics, and custom branded UI.
       Reskinned the entire application to give a more modern look."
      link= "https://esp-dev.softwarebbd.com/?rr_dev=true&"
       buttonText="Log in available upon request"
       />


      </Element>

      <Element name="section3" className="section section3">
        <h2>Section 3</h2>
      </Element>
    </div>
  );
};

export default App;
