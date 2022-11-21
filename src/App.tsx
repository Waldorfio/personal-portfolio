import React from 'react';
import './styles/style.css'

function App() {
  return (
    <div>

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
        About
      </div>

      <div id='project-page'>
        Projects
      </div>

      <div id="footer">
          <span id='footer-title'>Copyright © 2022 Waldorfio&nbsp;&nbsp;&nbsp;
            <a href="https://www.github.com/waldorfio" id='github-logo' className="fa fa-github"></a>
          </span>
      </div>

    </div>
  );
}

export default App;
