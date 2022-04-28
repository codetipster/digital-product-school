import me from '../assets/IMG-20211123-WA0005.jpg'
import {FaTwitter, FaLinkedin, FaGithub, FaArrowUp} from 'react-icons/fa'

function About() {
  return (
    <div className='superholder'>
    <div className="container">
      <h2 id="aboutme">Product and Creator Profile</h2>
      <div class="cardme">
        <img src={me} alt="Samuel Nzekwe" id='imgme'/>
        <h1>Samuel Nzekwe</h1>
        <p class="title">Software Engineering Student</p>
        <p>At:</p>
        <p>CODE University of Applied Sciences</p>
        <div id='prome' >
          <a href="https://www.linkedin.com/feed/"><FaLinkedin /></a> 
          <a href="/"><FaTwitter /></a>  
          <a href="https://github.com/codetipster"><FaGithub /></a>  
           
        </div>
        <p id="btnme"><button>Contact<FaArrowUp /></button></p>
        
    </div>
  </div>
  <div className='container3'>
  <h4>iKontact</h4>
  <hr/>
  <p>This a simple contact application built with React, React-router-dom, scss and css for styling and uses a JSON server as a provisional backend.
    The project makes for a complete side challenge for taking part in the 2021 Digital Product School Batch #13 cohort.<br/>
    <br/><h5>Always finish what you start!</h5> 
  </p>
  </div>
  </div>
  )
}

export default About