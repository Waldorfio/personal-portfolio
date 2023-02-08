import React, { useState, useRef } from 'react';
import './styles/style.css';
import NavBar from './components/NavBar';
import TechStack from './components/TechStack';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  // Declaring Refs for DOM Manipulation
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Perform the DOM Manipulations
  const scrollHome = () => {
    if (homeRef.current?.scrollIntoView()) {homeRef.current.scrollIntoView()} // Check if homeRef.current is null before scrolling into view
  }
  const scrollAbout = () => {
    if (aboutRef.current?.scrollIntoView()) {aboutRef.current.scrollIntoView()} // Check if aboutRef.current is null before scrolling into view
  }
  const scrollProject = () => {
    if (projectRef.current?.scrollIntoView()) {projectRef.current.scrollIntoView()} // Check if projectRef.current is null before scrolling into view
  }
  const scrollContact = () => {
    if (contactRef.current?.scrollIntoView()) {contactRef.current.scrollIntoView()} // Check if contactRef.current is null before scrolling into view
  }

  // State Declarations & Hanlders
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (event: any) => {
    if (event.target.checked) {
      console.log('Light Mode Enabled');
      document.documentElement.style.setProperty('--text', 'black');
      document.documentElement.style.setProperty('--bgColor1', '#ffffff');
      document.documentElement.style.setProperty('--bgColor2', '#acacac');
      document.documentElement.style.setProperty('--navBar', '#cccccc');
    } else {
      console.log('Dark Mode Enabled');
      document.documentElement.style.setProperty('--text', 'white');
      document.documentElement.style.setProperty('--bgColor1', '#1a1a1a');
      document.documentElement.style.setProperty('--bgColor2', '#282828');
      document.documentElement.style.setProperty('--navBar', '#262626');
    }
    setIsChecked(current => !current);
  };

  const [projects, setProject] = useState(
    [
      {
        title: 'RESTful Blog API',
        img: 'animation2.gif',
        para1: 'A full-stack RESTful blog API that allows users to create, read, update, and delete blog posts', 
        para2: 'It includes two React front-end applications, one for the CMS (Content Management System) and one for the client-facing side.',
        para3: 'Built using the MERN stack (React, Express, Node.js, MongoDB)',
        liveLink: 'https://blog-client-8agn.vercel.app/',
        gitLink: 'https://github.com/Waldorfio/blog-client#readme',
      },
      {
        title: 'Battleship Game',
        img: 'animation.gif',
        para1: 'A recreation of the classic game, built using JavaScript! Take turns to guess and attack your opponents board.', 
        para2: 'Built to practice working with TDD concepts in mind, whilst recreating a classic game with a responsive UI.',
        para3: 'Built using JavaScript, CSS, HTML and TDD with Jest',
        liveLink: 'https://waldorfio.github.io/battleship-project/',
        gitLink: 'https://github.com/Waldorfio/battleship-project#readme',
      },
      {
        title: 'E-Commerce SPA',
        img: 'animation3.gif',
        para1: 'A fully responsive, stateful e-commerce game key shop, built using React, TypeScript and CSS.', 
        para2: 'Built to test my understanding of statement and outlet management in React, as well as typing with TypeScript.',
        para3: 'Built using React, TypeScript and CSS',
        liveLink: 'https://shopping-cart-1yg.pages.dev/',
        gitLink: 'https://github.com/Waldorfio/shopping-cart#readme',
      },
      {
        title: 'CV Builder',
        img: 'animation4.gif',
        para1: 'A stateful resume builder built using React.', 
        para2: 'Built to test my understanding of state management as well as functional components and hooks.',
        para3: 'Built using React and pure CSS',
        liveLink: 'https://waldorfio.github.io/cv-application/',
        gitLink: 'https://github.com/Waldorfio/cv-application#readme',
      },
    ]
  );

  // Render
  return (
    <div>

        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>

        <div id='landing-page' ref={homeRef}>
  
  
          <h1>
            <span id='intro-line1'>Hello, I'm <span className='name'>Wally</span></span>
            <br></br><span id='intro-line2'>I'm a full stack web developer.</span>
          </h1>
          <div id='view-work' className='name' onClick={scrollAbout}>
            View my work
          </div>
        </div>

        <div id='page-break'></div>
  
        < NavBar
          scrollHome = {scrollHome}
          scrollAbout = {scrollAbout}
          scrollProject = {scrollProject}
          scrollContact = {scrollContact}
          isChecked = {isChecked}
          handleCheck = {handleCheck}
        />

        <div id='about-page' ref={aboutRef}>
            <h2>About</h2>
            <div id="about-info">
                <span id="intro1">
                  I'm an entry-level developer looking to land my first 
                  development job. Being a former mechanical engineer 
                  with experience in a consulting environment, I have 
                  many transferable skills.
                  
                  Coming into tech I was immediately enthralled by the 
                  satisfaction of creating new products and experiences 
                  in a satisfyingly tangible manner.
                  
                  My main tech stack is the MERN stack, and I am committed 
                  to the idea of life-long learning and furthering my knowledge.
                </span>
            </div>
            < TechStack />
        </div>
  
        <h2>Projects</h2>
        <div id='project-page' ref={projectRef}>

          { projects.map((elem, idx) => (
            < Project
              title = {elem.title}
              img = {elem.img}
              para1 = {elem.para1}
              para2 = {elem.para2}
              para3 = {elem.para3}
              liveLink = {elem.liveLink}
              gitLink = {elem.gitLink}
              key = {idx}
            />
          ))}

        </div>

        <div id='contact-page' ref={contactRef}>
          <h2>Let's Get in Touch!</h2>
          <div id='logos'>
            <a href="https://www.github.com/waldorfio"><i className="devicon-github-plain"></i><span>GitHub</span></a>
            <a href="https://www.linkedin.com/in/wally-h/"><i className="devicon-linkedin-plain colored"></i><span>LinkedIn</span></a>
            <a href="mailto:walid.hanifi707@gmail.com"><i className="devicon-google-plain"></i><span>Email</span></a>
          </div>
        </div>
  
        < Footer />

      </div>
  );
}

export default App;
