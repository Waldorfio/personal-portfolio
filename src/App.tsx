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
        title: 'E-Commerce SPA built using React',
        img: 'project1.png',
        para1: 'A fully dynamic and responsive e-commerce website built using React.', 
        para2: 'Built with routing, and responsiveness across all devices.',
        para3: 'Built using React, TypeScript and CSS',
        liveLink: 'https://shopping-cart-blush-three.vercel.app/',
        gitLink: 'https://github.com/Waldorfio/shopping-cart#readme',
      },
      {
        title: 'Memory Card',
        img: 'project2.png',
        para1: 'A memory card game with state management, inspired by Overwatch characters.', 
        para2: 'Built to test my understanding of ye olde class-based components.',
        para3: 'Built using React and CSS',
        liveLink: 'https://waldorfio.github.io/memory-card/',
        gitLink: 'https://github.com/Waldorfio/memory-card#readme',
      },
      {
        title: 'Battleship Game',
        img: 'project3.png',
        para1: 'A recreation of the classic battleship game built using JavaScript.', 
        para2: 'Test your skills against the worlds best AI...',
        para3: 'Built using JavaScript, Jest and CSS',
        liveLink: 'https://waldorfio.github.io/battleship-project/',
        gitLink: 'https://github.com/Waldorfio/battleship-project#readme',
      },
      {
        title: 'CV Builder',
        img: 'project4.png',
        para1: 'A resume builder built using React.', 
        para2: 'Built to test my understanding of state management as well as functional components and hooks.',
        para3: 'Built using React and CSS',
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
            Hello, I'm <span className='name'>Wally</span><br></br>
            I'm a full stack web developer.
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

          {/* <div className="projects">
            <div className='project-title'>SPA E-Commerce site built using React</div>
            <div className="project-imgs"></div>
            <div className="project-desc">
                <p className="para1">
                    Shopping cart is a fully responsive, single-page application 
                    built using React, TypeScript, and styled using vanilla CSS.
                    The goal here was to showcase routing in React, whilst further 
                    refining my CSS skills. 
                </p>
                <p className="para2">
                    I struggled with a few things whislt building this app. Firstly, 
                    maintaining strict typing with TypeScript was  something new 
                    to me here, so took some time to get comfortable with.
                    <br></br>
                    Next, another practice that I had struggled with was the passing 
                    of states via Outlet routes in TypeScript. Thankfully, the 
                    problem was solved by maintaining strict typing across the app, 
                    specifically with props that were passed through components.
                    <br></br>
                    The goal was to also advance my CSS skills further, and so I 
                    practiced creating components animated such as the sliding cart 
                    as well as the smooth responsive scaling across devices.
                </p>
                <p className="para3">
                    Built using React, Typescript and CSS
                </p>
                <div className="project-btn">Live App</div>
                <div className="project-btn">GitHub Repo</div>
            </div>
          </div> */}

        </div>

        <div id='contact-page' ref={contactRef}>
          <h2>Let's Get in Touch!</h2>
          <a href="https://www.github.com/waldorfio" id='github-logo' className="fa fa-github-square"></a>
          <a href="https://www.linkedin.com/in/wally-h/" id='linked-logo' className="fa fa-linkedin-square"></a>
          <a href="walid.hanifi707@gmail.com" id='mail-logo' className="fa fa-envelope-o"></a>
        </div>
  
        < Footer />

      </div>
  );
}

export default App;
