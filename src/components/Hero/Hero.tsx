import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
// import div from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <div  >
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </div>
        <div    >
          <h1>Arfat Adhoni</h1>
        </div>
        <div>
          <h3>Full Stack Developer</h3>
        </div>
        <div  >
          <p className="small-resume"> 3+ Years of Experience</p>
        </div>


        <div   >
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </div>
        
        <div >
      <div className="social-media"><a
        href="https://www.linkedin.com/in/mohammadarfat-adhoni-0b69921b8"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/Arfat-Adhoni"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B918050703725&text=Hello+Arfat"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/+918050703725"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />

        </a></div>
        </div>

      </div>
     

      <div className="hero-image">
        <div>
          <img src={Illustration} alt="Ilustração" />
        </div>
      </div>
     
    </Container>

  )
}