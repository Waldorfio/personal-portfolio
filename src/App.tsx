import React from 'react';
import './styles/style.css'

function App() {
  return (
    <div>

        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
  
        <ul id='nav-bar'>
            <label className="switch"><input type="checkbox" /><div></div></label>
            <li className='nav-links'>Home</li>
            <li className='nav-links'>About</li>
            <li className='nav-links'>Projects</li>
            <li className='nav-links'>Contact</li>
        </ul>

        <div id='landing-page'>
  
  
          <h1>
            Hello, I'm <span className='name'>Wally</span><br></br>
            I'm a full stack web developer.
          </h1>
          <div id='view-work' className='name'>
            View my work
          </div>
        </div>
  
        <div id='about-page'>
            <h2>About</h2>
            <div id="about-info">
                <span id="intro1">
                    Hi there! 👋 I'm Wally, a software dev.
                </span>
                <span id="intro2">
                    Coming from a background of mechanical engineering, I
                    I was immediately enthralled by the satisfaction in creating new
                    products and experiences in a satisfyingly tangible manner.
                </span>
                <span id="intro3">
                    I am committed to the idea of life-long learning, I am a full stack developer with a
                    passion for TypeScript, React, and Node/Express.
                </span>
            </div>
            <div id="tech-stack">
                <div><i className="devicon-html5-plain colored"></i><span>HTML</span></div>
                <div><i className="devicon-css3-plain colored"></i><span>CSS</span></div>
                <div><i className="devicon-javascript-plain colored"></i><span>JavaScript</span></div>
                <div><i className="devicon-typescript-plain colored"></i><span>TypeScript</span></div>
                <div><i className="devicon-react-plain colored"></i><span>React</span></div>
                <div><i className="devicon-mongodb-plain colored"></i><span>MongoDB</span></div>
                <div><i className="devicon-express-original"></i><span>Express</span></div>
                <div><i className="devicon-nodejs-plain colored"></i><span>NodeJS</span></div>
                <div><i className="devicon-python-plain colored"></i><span>Python</span></div>
                <div><i className="devicon-jest-plain colored"></i><span>Jest</span></div>
                <div><i className="devicon-git-plain colored"></i><span>Git</span></div>
                <div><i className="devicon-webpack-plain colored"></i><span>Webpack</span></div>
                <div><i className="devicon-npm-original-wordmark colored"></i><span>HTML</span></div>
            </div>
        </div>
  
        <div id='project-page'>
          <h2>Projects</h2>
          <div className="projects">
            <div className="project-imgs"></div>
            <div className="project-desc">
                <p className="para1">
                    Para1
                </p>
                <p className="para2">
                    Para2
                </p>
                <p className="para3">
                    Built using React, Typescript and CSS
                </p>
                <div className="project-btn">Live App</div>
                <div className="project-btn">GitHub Repo</div>
            </div>
          </div>
          <div className="projects">
            <div className="project-imgs"></div>
            <div className="project-desc">
                <p className="para1">
                    Para1
                </p>
                <p className="para2">
                    Para2
                </p>
                <p className="para3">
                    Built using React, Typescript and CSS
                </p>
                <div className="project-btn">Live App</div>
                <div className="project-btn">GitHub Repo</div>
            </div>
          </div>
          <div className="projects">
            <div className="project-imgs"></div>
            <div className="project-desc">
                <p className="para1">
                    Para1
                </p>
                <p className="para2">
                    Para2
                </p>
                <p className="para3">
                    Built using React, Typescript and CSS
                </p>
                <div className="project-btn">Live App</div>
                <div className="project-btn">GitHub Repo</div>
            </div>
          </div>
          <div className="projects">
            <div className="project-imgs"></div>
            <div className="project-desc">
                <p className="para1">
                    Para1
                </p>
                <p className="para2">
                    Para2
                </p>
                <p className="para3">
                    Built using React, Typescript and CSS
                </p>
                <div className="project-btn">Live App</div>
                <div className="project-btn">GitHub Repo</div>
            </div>
          </div>
        </div>
  
        <div id="footer">
            <span id='footer-title'>Copyright © 2022 Waldorfio&nbsp;&nbsp;&nbsp;
              <a href="https://www.github.com/waldorfio" id='github-logo' className="fa fa-github"></a>
              <a href="https://www.linkedin.com/in/wally-h/" id='linked-logo' className="fa fa-linkedin"></a>
            </span>
        </div>
  
      </div>
  );
}

export default App;
