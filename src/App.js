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
import ResumeJill from "./assets/JillianFitzMaurice_Resume.pdf";
import { TypeAnimation } from "react-type-animation";
import JillianGif from "./assets/legacycodevid.gif";
import HatStar from "./assets/hatblue.png";
import LegacyBG from "./assets/legacybg.png";
import AIBG from "./assets/ai-tutor-bg-w.png";
import AIss from "./assets/Incorrect.png"
import imagesData from "./assets/images.json";
import drawingData from "./assets/drawings.json";

const images = require.context("./assets/", false, /\.(png|jpe?g|svg)$/);
const drawings = require.context("./assets/", false, /\.(png|jpe?g|svg)$/);

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
            <div className="button-top" onClick={scrollToTop}>
              Back to Top
            </div>
          </li>
        </ul>
      </nav>

      {/* Page Sections */}
      <Element name="section1" className="section section1-bg section1">
        <div className="child-section">
          <div className="container columns-2 inner-child-section">
            <div>
              <TypeAnimation
                className="type-anim"
                sequence={[
                  "Howdy",
                  500,
                  "Hello",
                  500,
                  "Hey There",
                  500,
                  "¡Hola!",
                  500,
                  "Bonjour",
                  500,
                ]}
                style={{ fontSize: "2.6rem", color: "#10129c" }}
                repeat={Infinity}
                speed={2}
                deletionSpeed={10}
              />

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
                  window.gtag("event", "click", {
                    event_category: "Contact",
                    event_label: "Mobile Button",
                    value: "Call",
                  });
                }}
              >
                <img
                  className="icons"
                  src={Phone}
                  alt="Phone"
                  style={{ marginRight: "8px" }}
                />
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
        <div className="mb-40 section section2">
          <div class="w-full flex-col section-header">
            {" "}
            <h2 className="text-white pl-10">Work</h2>
          </div>
          <div className="bg-white w-full flex flex-row">
            <div className="flex flex-col">
              {" "}
              <img src={LegacyBG} />
            </div>
            <div className="p-20 flex flex-col h-full justify-between">
              <img style={{ borderRadius: "20px" }} src={JillianGif} />
              <p className="p-4 pb-6">Recent project using Figma to create designs for new project features and updating React components.</p>

              <button className="bg-emerald-600 drop-shadow-lg text-white py-2 px-4 rounded-full ease-in-out duration-300 hover:bg-green-800">
                {" "}
                Go to Figma Project
              </button>
            </div>
          </div>
          <div className=" w-full flex flex-row bg-['url(assets/ai-tutor-bg-w.png)'] bg-cover bg-center h-64 w-full" style={{background: "rgb(143 141 193)"}}>
      
            <div className="py-4 px-24 flex flex-col h-full justify-between z-1000">
              <img style={{ borderRadius: "10px" }} src={AIss} />

              <button className="bg-purple-800 drop-shadow-lg text-white py-2 px-4 rounded-md ease-in-out duration-300 hover:bg-purple-900">
                {" "}
                Go to Figma Project
              </button>
            </div>
            <div className="flex flex-col">
              {" "}
              <img src={AIBG} />
            </div>
          </div>
          {/* <Card
            imgSrc={JillianGif}
            imgAlt="lawyer app"
            title="Legacy Architects"
            info="Recent collaborative Figma project for estate planning lawyers."
            link="https://www.figma.com/design/369OzhMUnxL4gwjOdFPaYy/Updated-App-Designs?node-id=225-106834&t=zRooO2IHEXvbEkVG-1"
            buttonText="Go to Figma project"
            style={{
              width: "100%",
              background: "white",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "16px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          /> */}

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
       Reskinned the entire application on live site to give a more modern look. My case study and live site log in are available to see here."
            link="https://www.figma.com/design/LYvcCqLYk36RPN5SPsIYQW/EdQualis-Case-Study?node-id=0-1&t=4QYqBJPuMpC4UyST-1"
            buttonText="Go to Figma"
          />
          <Card
            imgSrc={WonderInk}
            title="WonderInk Application"
            info="WonderInk is a learning management system for leaders, parents, and students. I revamped the front-end interface to align with brand recognition, taking the lead in design decisions. Additionally, I developed the parent portal as a vital link between parents, students, and youth leaders, fostering continuous engagement in learning. Username: jillian@softwarebb.com / Password: Church100!"
            link="https://app.wonderink.org/?"
            buttonText="Go to Website"
          />

          <div className="mt-24">
            <p>
              I acknowledge that some of my projects may appear to have limited
              documentation, and that’s true to some extent. Many of these sites
              were built using a low-code internal design platform, where I
              handled both front-end development and design work. Due to tight
              deadlines, much of the process was done on the go. If I were to
              identify an area for improvement in my workflow, it would be to
              prioritize more thorough documentation. It’s a valuable aspect of
              the development process that ensures long-term maintainability and
              better collaboration.
            </p>
          </div>
        </div>
      </Element>

      <Element name="section3" className="section section3-parent">
        <div className="section3">
          <div className="w-full flex flex-row">
            <h2>Graphics</h2>
          </div>
          {/* <div className="flex flex-row w-full grid grid-cols-6 gap-x-3	justify-between">

        </div> */}
          <div className="child-section mb-8">
            <h3 className="w-full">Badges</h3>

            <div className="badges-section">
              {imagesData.map((image, index) => (
                <img
                  className="badges"
                  key={index}
                  src={images(`./${image.src}`)}
                  alt={image.alt}
                />
              ))}
            </div>
          </div>

          <div className="child-section mb-8">
            <h3 className="w-full">Others</h3>

            <div className="badges-section">
              {drawingData.map((drawing, index) => (
                <img
                  className="drawings"
                  key={index}
                  src={drawings(`./${drawing.src}`)}
                  alt={drawing.alt}
                />
              ))}
            </div>
          </div>
          <div className="my-32 flex justify-center">
            <img className="hat" src={HatStar} alt={"cowboy Hat"} />
          </div>
          <div className="my-32">
            <h3>
              Thank you for visiting! I’m thrilled to have you here exploring my
              work. Each project is crafted with creativity and attention to
              detail, and I hope you enjoy browsing as much as I enjoyed
              building these experiences. Feel free to reach out if anything
              sparks your curiosity or if you'd like to collaborate. Let’s
              create something amazing together!
            </h3>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default App;
