import React from 'react';
import './styles/style.css'

function App() {
  return (
    <div>



      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div id='landing-page'>


        <h1>
          Hello, I'm <span className='name'>Wally</span><br></br>
          I'm a full stack web developer.
        </h1>
        <div id='view-work' className='name'>
          View my work
        </div>
      </div>

      <ul id='nav-bar'>
        <li className='nav-links'>Home</li>
        <li className='nav-links'>About</li>
        <li className='nav-links'>Projects</li>
        <li className='nav-links'>Contact</li>
      </ul>

      <div id='about-page'>
        <h2>About</h2>
      </div>

      <div id='project-page'>
        <h2>Projects</h2>
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
