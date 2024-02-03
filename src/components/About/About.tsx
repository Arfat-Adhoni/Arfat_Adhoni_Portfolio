import { Container } from "./styles";
import ArfatPhoto from "../../assets/ArfatPhoto.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";



export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        < div  >
          <h2>About Me</h2>
        </ div>
        < div >
        <p>
        Arfat Adhoni, a Senior Software Engineer at Mercedes-Benz R&D India, brings over 3 years of experience as a Full-Stack Developer. With an M.Tech degree and expertise in HTML, CSS, JavaScript, React.JS, Java, SpringBoot, and more, he excels in diverse technologies. Proficient in SDLC, cloud platforms, and project management tools, Arfat is adept at handling complex software projects. His passion for innovation and excellence drives him to leverage cutting-edge technologies. Whether you need a new website or a revamp, let's bring your dreams to reality together!
         </p>
        </ div>

        < div >
          <h3>Here are my main skills:</h3>
        </ div>
        <div className="hard-skills">

          
          <div className="hability">
            < div>
              <img src={reactIcon} alt="React" />
            </ div>
          </div>
          <div className="hability">
            < div>
              <img src={typescriptIcon} alt="Typescript" />
            </ div>
          </div>
          
          <div className="hability">
            < div >
              <img src={nodeIcon} alt="Node" />
            </ div>
          </div>
          <div className="hability">
            < div >
              <img src={htmlIcon} alt="Html" />
            </ div>
          </div>

          <div className="hability">
            < div >
              <img src={cssIcon} alt="Css" />
            </ div>
          </div>

          <div className="hability">
            < div>
              <img src={boostrapIcon} alt="bootstrap" />
            </ div>
          </div>
          <div className="hability">
            < div>
              <img src={jsIcon} alt="JavaScript" />
            </ div>
          </div>
        </div>
      </div>
      <div className="about-image">
        < div style={{marginTop : "41px"}}>
          <img src={ArfatPhoto} style={{height: "320px"}} alt="Arfat" />
        </ div>
      </div>
    </Container>
  )
}
