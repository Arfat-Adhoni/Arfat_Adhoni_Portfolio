import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
// import ScrollAnimation from "react-animate-on-scroll";

const projects = [
  {
    title: "Unikey - SSH",
    date: "Jan 2024 - Present",
    description: "Developing UI and Validating as per Requirement using React.Js with Typescript, Developing Restful Api using FastApi using Python3.9 with OneApi using Azure Function App for its Web Services using CosmosDb.Integration of Api with FrontEnd using Axios to meet product Requirement.Unit Testing with Cypress for FrontEnd Development. " ,
    technologies: ["TypeScript", "ReactJs", "Python", "FastApi", "Terraform", "Azure", "Gradle", "GitHub CosmosDb"],
  },
  {
    title: "Unikey - Key & Certification",
    date: "Oct 2023 - Present",
    description: "Full Stack Development using TypeScript,ReactJs, Java 17, Terraform, Azure, Gradle, GitHub CosmosDb etc Developing UI and Validating as per Requirement using React.Js with Typescript, Developing Rest Api interacting with OneApi using Azure Function App for its Web Services using Java 17 and CosmosDb. Integration of Api with FrontEnd using Axios to meet product Requirement.",
    technologies: ["TypeScript", "ReactJs", "Java 17", "Terraform", "Azure", "Gradle", "GitHub CosmosDb"],
  },

  {
    title: "Turkset PCRF Product (Policy Control and Rule Functioning)",
    date: " Aug 2022 - Sep 2023",
    description: "In this project, we delve into software development excellence, crafting WSDL files, and generating Java files with MyEclipse. Our SOAP API integrates seamlessly with MySQL, enhancing DB procedures. Using JSP pages, we design compelling GUIs. But that's not all! We enhance the user experience with Package Renewal and Service Plan Activation GUIs powered by Spring Boot and Web services. Explore cutting-edge technology and user-centric solutions!",
    technologies: ["HTML/CSS, Javascript, React.JS, Java, SpringBoot, MySQL, Jira "],
  },

  {
    title: "WUSSD Product (Unstructured Supplementary Service Data)",
    date: "Jun 2023 - Sep 2023",
    description: "Building a WUSSD system from scratch with Java and Spring Boot. Modules include Package, Tracker, and Reports using GUI and API. Users interact through a user-friendly interface, generating and viewing reports. The system supports smooth functionality for USSD and Wifi Mobile using Node.js as the backend with Express.js for the API. ",
    technologies: ["HTML/CSS, Javascript, React.JS, Java, SpringBoot, MySQL, Jira"],
  },

  {
    title: "SMSC Product (Short Message Service Center)",
    date: "Apr 2023 - May 2023",
    description: "This project develops a GUI-based reporting system and API using Spring Boot and Java for a Short MessageService Center (SMSC) to generate Mis Usage Reports. It also includes User Client configuration for secure clientside access to the reporting system.",
    technologies: ["HTML/CSS, Javascript, React.JS, Java, SpringBoot, MySQL, Jira"],
  },

  {
    title: "Bijapur Offer Product",
    date: "Aug 2021 - Mar 2022",
    description: "Production Management System keeps track of the transaction of all Products, Materials, raw. Shows the information and of the Materials. It deals with monitoring the information and transactions. Provides the administrator facilities to update the list of Materials online",
    technologies: ["HTML/CSS, Javascript, React.JS, Java, SpringBoot, MySQL, Jira"],
  },

  {
    title: "E-Commerce WebsiteE-Commerce Website",
    date: "May 2021 - Jul 2021",
    description: "A website was built by me implementing the Templates of Bootstrap, Tailwind and Modifying as per Client Requirement.",
    technologies: ["HTML/CSS, Javascript, React.JS, Java, SpringBoot, MongoDB, Jira"],
  },
  {
    title: "Student Mangement System ",
    date: "Jan 2024 - Present",
    description: "Its tracks, maintains, and manages all of the data created by a school, such as a student's grades, attendance, and  interpersonal activity records, among other things and Reflecting them in UI using ReactJS",
    technologies: ["HTML/CSS, Javascript, React.JS, Java, SpringBoot, Vertica, Jira"],
  },
  {
    title: "WhatsApp, Text Utils, Amazon , Spotify, Netflix Clone",
    date: "  Jan 2021 - Apr 2021",
    description: "A Clone Websites is Build by me using HTML5, Tailwind CSS, JavaScript, React JS as Library and Node.JS as run time Environment Server with Firebase Authentication, Api Fetching using Axios and Some Library of React with Hooks Concepts such as UseState, UseEffect, UseContext",
    technologies: ["HTML/CSS, Javascript, React.JS, Java, SpringBoot, Oracle, Jira"],
  },

  // Add more projects as needed
];

export function Project() {
  return (
    <Container id="project">
    <h2>My Projects</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <header>
            <svg
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#23ce6b"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Folder</title>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="project-links">
              {/* Replace '#' with the actual project URL */}
              <div >
                <img src={externalLink}  style={{width : "60px"}} alt="Visit site" />
              </div>
            </div>
          </header>
          <div className="body">
            <h3>{project.title}</h3>
            <h4>{project.date}</h4>
            <br />
            <p>{project.description}</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>{project.technologies.join(", ")}</li>
            </ul>
          </footer>
        </div>
      ))}
    </div>
  </Container>
  );
}
