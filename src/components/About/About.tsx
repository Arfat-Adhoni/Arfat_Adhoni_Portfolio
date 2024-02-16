import { Container } from "./styles";
import ArfatPhoto from "../../assets/ArfatPhoto.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import Illustration from "../../assets/illustration.svg"



export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        < div  >
          <h2>About Me</h2>
        </ div>
        < div >
        <p>
          Working as Senior Software Engineer at Mercedes-Benz R&D India,Bangalore I bring over 3+ years of experience as a Full-Stack Developer. Holding an M.Tech degree with a university ranking in Design, I am well-versed in a wide array of technologies, including HTML, CSS, JavaScript, JSP, TypeScript, React.JS, Next.JS, Cypress, Java, SpringBoot, Node.JS, Express.JS, Python, FastAPI, MySQL, Vertica, Oracle, CosmoDB, MongoDB, Azure, and Jira. My expertise extends to being an SDLC expert, ensuring a holistic approach to software development. I am passionate about leveraging cutting-edge technologies to drive innovation and excellence in every project I undertake.
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
          <img src={Illustration} style={{height: "320px"}} alt="Arfat" />
        </ div>
      </div>
    </Container>
  )
}
