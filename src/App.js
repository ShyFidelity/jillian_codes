import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

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
import AIBG from "./assets/ai-bg-w-h.png";
import AIss from "./assets/Incorrect.png";
import imagesData from "./assets/images.json";
import drawingData from "./assets/drawings.json";
import BSbg from "./assets/Boltastack-bg.png";
import WiBG from "./assets/wiSSnew.png";
import WiScreen from "./assets/WIchurchtofamily.png";
import WIlogo from "./assets/WonderInk001.svg";
import WIgames from "./assets/wonderinkgames.png";
import AiFigma from "./assets/AIfigma.png";
import AiFigmaBG from "./assets/AIfigmanew.png";
import laptop from "./assets/laptop.png";
import DU from "./assets/u_denver.svg";
import MIAD from "./assets/miadwhite.png";
import UChi from "./assets/UChi.png";
import idea from "./assets/ideajill.png";

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
              Contact
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
      <Element name="section5" className="bg-[#0d001e]">
        <div className="w-full">
          <div className=" columns-2 pt-40">
            <div className="p-20">
              <TypeAnimation
                className="type-anim"
                sequence={[
                  "Hi- I'm Jillian, good to meet you",
                  500,
                  "Glad you're here",
                  500,
                  "Let me know if I can answer any questions",
                  500,
                  "...",
                  500,
            
                ]}
                style={{ fontSize: "1.1rem", color: "#d2d7fa82" }}
                repeat={Infinity}
                speed={10}
                deletionSpeed={8}
              />
            </div>
            <img className="round-lg" src={laptop} alt="My Example" />{" "}
            <div>
              {/* <p className="pb-10 break-after-right">
                <span className="font-bold"> Hi! I'm Jillian, </span>a dynamic
                artist, UI/UX designer, and front-end developer with over a
                decade of design experience. Always up for challenging the norm, and allowing for design to be both clean and messy. This site was built using React, Illustrator, and
                Figma—along with all the work showcased below.
              </p> */}
            </div>
          </div>

          <div className="h-[4px] w-full bg-[#cd9da0]"></div>
          <div className="h-[1px] w-full bg-[#55242f]"></div>
          <div className="h-[2px] w-full bg-[#cd9da0]"></div>
          <div className="h-[1px] w-full bg-[#55242f]"></div>

          <div className="h-[2px] w-full bg-[#cd9da0]"></div>
          <div className="h-[4px] w-full bg-[#cd9da0]"></div>
          <div className="h-[1px] w-full bg-[#55242f]"></div>
          <div className="h-[8px] w-full bg-[#cd9da0]"></div>
          <div className="h-[3px] w-full bg-[#55242f]"></div>
          <div className="h-[2px] w-full bg-[#cd9da0]"></div>
          <div className="h-[4px] w-full bg-[#cd9da0]"></div>
          <div className="h-[6px] w-full bg-[#55242f]"></div>
          <div className="h-[18px] w-full bg-[#cd9da0]"></div>
          <div className="h-[38px] w-full bg-[#55242f]"></div>

          <div className="h-[18px] w-full bg-[#cd9da0]"></div>

          <div className="h-[120px] p-10 w-full bg-black flex items-center overflow-hidden">
            <div className="scroll-container">
              <div className="scroll-content">
                <img src={DU} alt="DU" />
                <img  src={MIAD} alt="MIAD" />
                <img  src={Mouse} alt="Mouse" />
                <img  src={UChi} alt="UChi" />
                {/* Repeat the same set of images to create the looping effect */}
                <img  src={DU} alt="DU" />
                <img  src={MIAD} alt="MIAD" />
                <img  src={Mouse} alt="Mouse" />
                <img  src={UChi} alt="UChi" />
                <img  src={DU} alt="DU" />
                <img  src={MIAD} alt="MIAD" />
                <img  src={Mouse} alt="Mouse" />
                <img  src={UChi} alt="UChi" />
              </div>
            </div>
          </div>
          <div className="p-20 flex flex-col md:flex-row pt-20 pb-40">
          {/* <ParallaxProvider> */}
              <div>
                {/* <Parallax
                  translateX={[-100, 0]} // Start 100px to the left, slide to 0px
                  opacity={[0, 1]} // Start invisible, fade in
                  easing="easeOutQuad"
                  style={{
                    width: "300px", // Adjust width as needed
                    height: "auto",
                    margin: "0 auto", // Center the image horizontally
                    borderRadius: "10px", // Add some style
                    overflow: "hidden", // Ensures no overflow on rounded corners
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Subtle shadow
                  }}
                > */}
              
                {/* </Parallax> */}
              </div>
            {/* </ParallaxProvider> */}
     
          </div>
        </div>
      </Element>

      <Element name="section1" className="section bg-black p-20">
        <div className="child-section">
          <div className=" columns-2 inner-child-section">
            <div>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: 1,
                  }}
                >
                  {/* Your content goes here */}
                  <img className="h-[450px] w-full" src={Mouse}></img>
                </div>
              </div>

              {/* <p className="pb-10 break-after-right">
                <span className="font-bold"> Hi! I'm Jillian, </span>a dynamic
                artist, UI/UX designer, and front-end developer with over a
                decade of design experience. Always up for challenging the norm, and allowing for design to be both clean and messy. This site was built using React, Illustrator, and
                Figma—along with all the work showcased below.
              </p> */}
            </div>
          </div>

          <div className="icon-section flex flex-wrap sm:flex-col items-center gap-5 p-4">
  <div>
    <a href="https://github.com/ShyFidelity" target="_blank" rel="noreferrer">
      <img className="icons" src={Github} alt="github logo" />
    </a>
  </div>

  <div>
    <a href="https://www.linkedin.com/in/jillianfitzmaurice100/" target="_blank" rel="noreferrer">
      <img className="icons" src={Linkedin} alt="linkedin logo" />
    </a>
  </div>

  <div>
    <a href="mailto:fitzmauricejillian@gmail.com" className="flex items-center">
      <img className="icons mr-2" src={Mail} alt="Email" />
      fitzmauricejillian@gmail.com
    </a>
  </div>

  <div>
    <a
      className="contacta flex items-center"
      href="tel:3039013230"
      onClick={() => {
        window.gtag("event", "click", {
          event_category: "Contact",
          event_label: "Mobile Button",
          value: "Call",
        });
      }}
    >
      <img className="icons mr-2" src={Phone} alt="Phone" />
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

          <div className="weird-cards">
            {/* <div
            className="legacy bg-white w-full flex flex-row justify-end items-end "
            style={{
              background: "rgb(143 141 193)",
              backgroundImage: `url(${LegacyBG})`,
              backgroundSize: "cover",
              height: "840px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col"> </div>
            <div className="legacy-child p-20 flex flex-col h-full justify-between w-[650px] ">
              <img
                style={{ borderRadius: "20px", width: "600px", height: "auto" }}
                src={JillianGif}
              />
              <p className="p-4 pb-6">
                Recent project using Figma to create designs for new project
                features and updating React components.
              </p>

              <a
                href="https://www.figma.com/design/369OzhMUnxL4gwjOdFPaYy/Updated-App-Designs?node-id=225-106834&t=zRooO2IHEXvbEkVG-1"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 drop-shadow-lg text-2xl text-white py-2 px-4 rounded-full ease-in-out duration-300 hover:bg-green-800 inline-block text-center"
              >
                Go to Figma Project
              </a>
            </div>
          </div> */}
            {/* <div
            className="AI w-full flex flex-row p-4 bg-center border-t-2 border-purple-800"
            style={{
              background: "rgb(143 141 193)",
              backgroundImage: `url(${AIBG})`,
              backgroundSize: "cover",
              height: "540px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="py-4 px-24 flex flex-col h-full justify-between">
              <img
                style={{ borderRadius: "10px", height: "350px" }}
                src={AIss}
              />

              <a
                href="https://www.figma.com/design/IFub1w2Bx04gq61DbCnyt5/AI-TUTOR?node-id=37-3088&t=aIfRkgyvpJaP4cUd-1"
                target="_blank"
                className="bg-white text-2xl border-purple-800 drop-shadow-lg text-purple-800 py-2 px-4 mt-8 mb-8 rounded-md ease-in-out duration-300 hover:bg-purple-900 hover:text-white inline-block text-center"
              >
                Go to Figma Project
              </a>
            </div>
            <div className="flex flex-col"> </div>
          </div> */}

            {/* <div className="Boltstack p-12 w-full bg-black p-5 flex flex-row border-t-2 border-t-white">
            <div
              className="w-100 flex flex-row p-20 bg-center"
              style={{
                background: "rgb(143 141 193)",
                backgroundImage: `url(${BSbg})`,
                backgroundColor: "rgba(0, 0, 0, 1)",
                backgroundSize: "contain",
                backgroundPosition: "top left", // Set to top-left
                height: "600px",
                width: "800px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="BS-text w-1/2 h-full p-12 flex text-white flex-col justify-between items-end ml-auto p-3 border-white rounded-lg	">
              <p
                className="pt-2 text-right"
                style={{ fontFamily: "Futura", fontSize: "1.4rem" }}
              >
                Discover Boltstack.com, where I led marketing efforts, UI/UX,
                and front-end development. I created everything on this site
                from graphics to functionality and CSS media queries for a
                mobile-friendly design. Built on internal low-code software.
              </p>

              <div className="m-t-10">
                <a
                  className="bg-[#eb9bd5] text-black rounded-full p-5 underline"
                  style={{ fontFamily: "Futura", fontSize: "1.5rem" }}
                  href="https://boltstack-dev.softwarebbd.com/"
                  target="_blank" rel="noreferrer"
                >
                  Go to Boltstack.com
                </a>
              </div>
            </div>
          </div> */}

            {/* <div className="w-full flex flex-col flex flex-col">
            <div
              className="w-100 p-20  border-b-4 border-b-[#82b068]  bg-center"
              style={{
                background: "rgb(143 141 193)",
                backgroundImage: `url(${WiBG})`,
                backgroundColor: "#fff",
                backgroundSize: "cover",
                backgroundPosition: "top left", // Set to top-left
                height: "500px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div className="WI-one bg-[#F0EFE3] border-b-4 border-b-[#82b068] h-full flex flex-row items-center p-10">
              <img
              className="WI-img"
                style={{
                  borderRadius: "20px",
                  width: "800px",
                  padding: "1rem",
                  height: "auto",
                }}
                src={WiScreen}
              />
              <div className="flex flex-col w-1/2 rounded-lg p-8 items-center">
                <img
                  style={{ borderRadius: "10px", height: "70px" }}
                  src={WIlogo}
                />
                <p
                  className="text-center mt-10"
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  WonderInk is a learning management system for leaders,
                  parents, and students. <br></br>I revamped the front-end
                  interface to align with brand recognition, taking the lead in
                  design decisions. <br></br> Demo Upon request.
                  
                </p>
                <br />
                <a
                  className="bg-[#01344f] text-white text-2xl rounded-xl p-6"
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "2rem",
                  }}
                  href="https://app.wonderink.org/?"
                  target="_blank" rel="noreferrer"
                >
                  Go to Website
                </a>
              </div>
            </div>




            <div className="WI-two w-full flex flex-col flex flex-col">

            <div className="bg-[#cbe2b2] h-full flex flex-row-reverse items-center p-10">
              <img
              className= "WI-img"

                style={{
                  borderRadius: "20px",
                  width: "600px",
                  padding: "1rem",
                  height: "auto",
                }}
                src={WIgames}
              />
              <div className="BS-text flex flex-col w-1/2 rounded-lg p-8 items-center">
          <h3       style={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    textAlign: "left", 
                    width: "100%"
                  }}>Game Designs</h3>
                <p
                  className="text-left mt-10"
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                 Additionally, I developed the
                  parent portal as a vital link between parents, students, and
                  youth leaders, fostering continuous engagement in learning. I
                  created and designed learning games and graphics. <br></br>
                  Demo Upon request.
                </p>
                <br />
                <a
                  className="bg-[#01344f] text-white text-2xl rounded-xl p-6"
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                  href="https://xd.adobe.com/view/e0562c42-e263-49f7-885c-66bc7e76b14e-b505/?fullscreen"
                  target="_blank" rel="noreferrer"
                >
                  View in Adobe XD
                </a>
              </div>
            </div>
            </div>
</div> */}
          </div>

          <Card
            backgroundImg={LegacyBG}
            imgSrc={JillianGif}
            imgAlt="lawyer app"
            title="Legacy Architects"
            info="  Recent project using Figma to create designs for new project
                features and updating React components."
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
          />

          <Card
            backgroundImg={AiFigmaBG}
            title="AI Tutor"
            info="Here are Figma screens and a live link of an AI tutor site, my latest project using chat gpt. I created all the designs, brand aesthetic, and the working front end build. The live link is available in the Figma file. Enjoy!"
            link="https://www.figma.com/design/IFub1w2Bx04gq61DbCnyt5/AI-TUTOR?node-id=37-3088&t=aIfRkgyvpJaP4cUd-1"
            buttonText="Go to Figma project"
          />
          <Card
            imgSrc={BSbg}
            backgroundColor={"#000"}
            titleStyle={{ color: "white" }}
            infoStyle={{ color: "white" }}
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
            info="Edqualis is a SaaS Learning Managment ssytem that engages admins, teachers, and students in one place. I worked as a front-end dev and independent UX researcher on this project. My case study and live site log in are available to see here."
            link="https://www.figma.com/design/LYvcCqLYk36RPN5SPsIYQW/EdQualis-Case-Study?node-id=0-1&t=4QYqBJPuMpC4UyST-1"
            buttonText="Go to Figma"
          />
          <Card
            imgSrc={WonderInk}
            backgroundImg={WiBG}
            insideColor={"#f0f0e9"}
            title="WonderInk Application"
            info="WonderInk is a learning management system for leaders, parents, and students. I revamped the front-end interface to align with brand recognition, taking the lead in design decisions. "
            link="https://app.wonderink.org/?"
            buttonText="Demo Upon Request"
          />
          <Card
            imgSrc={WIgames}
            backgroundColor={"#f0f0e9"}
            insideColor={"#f0f0e9"}
            title="Game Design"
            info="      Additionally, I developed the
                  parent portal as a vital link between parents, students, and
                  youth leaders, fostering continuous engagement in learning. I
                  created and designed learning games and graphics. 
                  Demo Upon request."
            link="https://adobe.ly/3NGSw33?"
            buttonText="Go to Adobe XD"
          />

          <div className="Text p-24">
            <div className="flex justify-center">
              <img className="hat" src={HatStar} alt={"cowboy Hat"} />
            </div>
            <div className="my-32">
              <h3>
                Thank you for visiting! I’m thrilled to have you here exploring
                my work. Each project is crafted with creativity and attention
                to detail, and I hope you enjoy browsing as much as I enjoyed
                building these experiences. Feel free to reach out if anything
                sparks your curiosity or if you'd like to collaborate. Let’s
                create something amazing together!
              </h3>
            </div>
          </div>
        </div>
      </Element>

      <Element name="section3" className="section section3-parent">
        <div className="icon-section gap-20">
          <div>
            <a
              href="https://github.com/ShyFidelity"
              target="_blank"
              rel="noreferrer"
            >
              <img className="icons" src={Github} alt="github logo" />
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/jillianfitzmaurice100/"
              target="_blank "
              rel="noreferrer"
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
      </Element>
    </div>
  );
};

export default App;
