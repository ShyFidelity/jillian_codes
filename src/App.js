import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import "./App.css";
import me from "./assets/profpic1small.png";
import legacy from "./assets/docsecurity.svg";
import { Card } from "./components/Card";
import AItutor from "./assets/aitutor.png";
import Github from "./assets/githubcolor.png";
import Boltstack from "./assets/boltstack.png";
import Edqualis from "./assets/edqualis.png";
import Phone from "./assets/iphonenew.png";
import Resume from "./assets/resume.png";
import Mail from "./assets/mailme.png";
import Bg from "./assets/bg.png";
import Linkedin from "./assets/linkedin.png";
import Hat from "./assets/hatwhitenewnew.png";
import Work from "./assets/worknew.png";
import Mouse from "./assets/cutemouse.png";
import Arrow from "./assets/arrowblue.png";
import WonderInk from "./assets/wonderink.png";
import ResumeJill from "./assets/JillianFitzMaurice_Resume.pdf"
import Games5 from "./assets/0badges/5_GAMES.svg"
import Games10 from "./assets/0badges/10_GAMES.svg"
import Games30 from './assets/0badges/30_GAMES.svg'
import imagesData from "./assets/images.json"

const images = require.context('./assets/', false, /\.(png|jpe?g|svg)$/);


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
            <img className="h-8" src={Hat} alt="Cowboy hat icon" />{" "}
            <Link to="section1" smooth={true} duration={500}>
              Howdy
            </Link>
          </li>
          <li>
            <img className="h-8" src={Work} alt="girl on laptop" />{" "}
            <Link to="section2" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <img className="h-8" src={Mouse} alt="cute mouse" />{" "}
            <Link to="section3" smooth={true} duration={500}>
              Graphics
            </Link>
          </li>
          <li>
            <div className="button-top" onClick={scrollToTop}>Back to Top</div>
          </li>
        </ul>
      </nav>

      {/* Page Sections */}
      <Element name="section1" className="section section1-bg section1">
        <div className="child-section">
          <div className="container columns-2 inner-child-section">
            <div>
              <h2>Howdy</h2>

              <p className="pb-10 break-after-right">
                Hi! I'm Jillian, a dynamic artist, UI/UX developer, and
                front-end builder who thrives on pushing creative boundaries.
                I've built this site using React, Illustrator and Figma as well
                as all the work you see below. Let's create something amazing
                together!
              </p>
            </div>
            <img className="profile-pic" src={me} alt="My Example" />{" "}
          </div>

          <div className="icon-section">
            <div>
              <a href="https://github.com/ShyFidelity" target="_blank">
                <img className="icons" src={Github} />
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/jillianfitzmaurice100/"
                target="_blank"
              >
                <img className="icons" src={Linkedin} alt="linkedin logo" />
              </a>
            </div>
            <div>
              <a
                href="mailto:fitzmauricejillian@gmail.com"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  className="icons"
                  src={Mail}
                  alt="Email"
                  style={{ marginRight: "8px" }}
                />
                fitzmauricejillian@gmail.com
              </a>
            </div>

              <div>
  <a
    className="contacta"
    style={{ display: "flex", alignItems: "center" }}
    href="tel:3039013230"
    onClick={() => {
      window.gtag('event', 'click', {
        event_category: 'Contact',
        event_label: 'Mobile Button',
        value: 'Call'
      });
    }}
  >
    <img className="icons" src={Phone} alt="Phone" style={{ marginRight: '8px' }} />
    303.901.3230
  </a>
</div>

<div>
  <a href={ResumeJill} download>
    <img className="icons" src={Resume} alt="Resume" />
  </a>
</div>


          </div>
        </div>
      </Element>

      <Element name="section2" className="section2-parent">
        <div className="section section2">
          <div class="w-full section-header">
            {" "}
            <h2>Work</h2>
          </div>
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
          <Card
            imgSrc={Boltstack}
            imgAlt="a screenshot of a Boltstack website talking about AI"
            title="Boltstack"
            info="Discover Boltstack.com, where I led marketing efforts and front-end development. I created everything on this site from graphics to functionality and CSS media queries for a mobile-friendly design. Built on internal low-code software."
            link="https://boltstack-dev.softwarebbd.com/"
            buttonText="Go to site"
          />

          <Card
            imgSrc={Edqualis}
            imgAlt="a screenshot of a Boltstack website talking about AI"
            title="Edqualis"
            info="Edqualis is an expansive education platform that engages admins, teachers, and students in one place. With the ability to generate content, forms, custom Dashboards, classes, lessons, rubrics, and custom branded UI.
       Reskinned the entire application to give a more modern look."
            link="https://esp-dev.softwarebbd.com/?rr_dev=true&"
            buttonText="Log in available upon request"
          />
          <Card
            imgSrc={WonderInk}
            title="WonderInk Application"
            info="WonderInk is a learning management system for leaders, parents, and students. I revamped the front-end interface to align with brand recognition, taking the lead in design decisions. Additionally, I developed the parent portal as a vital link between parents, students, and youth leaders, fostering continuous engagement in learning."
            link="https://app.wonderink.org/?"
            buttonText="Log in available upon request"
          />
        </div>
      </Element>

      <Element name="section3" className="section section3-parent">
      <div className="section3">
  <div className="w-full flex flex-row">     
        <h2>Graphics</h2>
        </div> 
        <div className="flex flex-row w-full grid grid-cols-6 gap-x-3	justify-between">
      <h2>Coming soon......</h2>
        </div>



        <div>
      {imagesData.map((image, index) => (
        <img key={index} src={images(`./${image.src}`)} alt={image.alt} />
      ))}
    </div>




        </div>

      </Element>
    </div>
  );
};

export default App;
