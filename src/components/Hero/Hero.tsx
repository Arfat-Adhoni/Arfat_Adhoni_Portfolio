import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
// import div from "react-animate-on-scroll"
import ArfatPhoto from "../../assets/ArfatPhoto.png";
// import Illustration from "../../assets/illustration.svg"
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
          <h3>M.Tech (VTU University Ranker in Design) | Full-Stack Developer | Ethical | Mentor  </h3>
         
          <h2>Working as Senior Software Engineer at Mercedes-Benz R&D India  </h2>
          <h3>Proficency in Html, Css, JavaScript, TypeScript, React.Js, Redux, Cypress.io, Java, SpringBoot, Node.Js, Express.Js, Python, FastApi, MySQL, Vertica, Oracle, MongoDb, CosmosDb, Azure, GitHub, SDLC Expert  </h3>

        </div>
        <div  >
        <p>Founder & Director of IT-CGC </p>
        <br></br>
        <br></br>
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
          <img src={ArfatPhoto} alt="Ilustração" />
        </div>
      </div>
     
    </Container>

  )
}
