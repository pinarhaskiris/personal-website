import BigHeader from './components/BigHeader'
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Button from './components/Button';
import { FaArrowDown } from 'react-icons/fa'

function App() {
  return (
    <div className="container">
      <Navbar />

      <BigHeader />
      <div className="scroll">
        <h6>scroll</h6>
        <h6><FaArrowDown /></h6>
      </div>

      <div id="about" className="bodyText">
        <p>
          My name is Pınar Haskırış.
          I am a 20 year-old pre-final year computer engineering student from Istanbul, Turkey.
        </p>
        <p>
          Outside of academic life and web development, I enjoy making art and learning languages.
        </p>
        <div className="bodyText contact">
          <p>haskirisp@mef.edu.tr</p>
          <Button text='resume' section="contact_btn" 
          onClick={ () => window.open('https://drive.google.com/file/d/13Al8gmNrSIx8m-eV-nNovCUAYXu3SvV0/view?usp=sharing')}/>
          <Button text='github' section="contact_btn" 
          onClick={ () => window.open('https://github.com/pinarhaskiris')}/>
        </div>
      </div>

      <BigHeader id="projects" title="PROJECTS" className="projectsHeader"/>
      <Projects />

      <BigHeader id="artwork" title="ARTWORK" className="artworkHeader" />
      <div className="bodyText">
        I draw as a hobby. Here is a collection of the stuff I have made during the recent years.
      </div>
  
      <center>
        <embed src="https://drive.google.com/file/d/1EDO9VVazz2vOgzmz1QzNl2HBkaaArls1/preview" />
      </center>
      
      <center>
        <Button text='back to top' section="contact_btn" onClick={ () => window.scrollTo(0, 0)} />
      </center>
    </div>
  );
}

export default App;



