import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

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
    title: "Turkset PCRF Product (Policy Control and Rule Functioning)Turkset PCRF Product (Policy Control and Rule Functioning)",
    date: " Aug 2022 - Sep 2023",
    description: "In this dynamic and exciting project, we embark on a journey of software development excellence. We start by crafting WSDL files in Eclipse and generating Java files from SOAP WSDL using MyEclipse. Our SOAP API for PCRF boasts seamless integration with a MySQL database, empowering powerful DB procedures. With our expertise in JSP pages, we create captivating GUIs for product development. But that's not all! We elevate the user experience further by adding a Package Renewal feature and a Service Plan Activation GUI, both powered by Spring Boot and Web services. Get ready to explore the realm of cuttingedge technology and user-centric solutions!.",
    technologies: [""],
  },

  {
    title: "WUSSD Product (Unstructured Supplementary Service Data)WUSSD Product (Unstructured Supplementary Service Data)",
    date: "Jun 2023 - Sep 2023",
    description: "This project involves building a WUSSD (Unstructured Supplementary Service Data) system from scratch, which includes the creation of a Package, Tracker and Reports module using GUI and API with Java and Spring Boot. The system allows users to interact with the WUSSD service, generating and viewing reports through the userfriendly interface while leveraging the Java-based API for smooth functionality for USSD and Wifi Mobile using Node.Js as Backend with Api using ExpressJs ",
    technologies: [""],
  },

  {
    title: "SMSC Product (Short Message Service Center)",
    date: "Apr 2023 - May 2023",
    description: "This project develops a GUI-based reporting system and API using Spring Boot and Java for a Short MessageService Center (SMSC) to generate Mis Usage Reports. It also includes User Client configuration for secure clientside access to the reporting system.",
    technologies: [""],
  },

  {
    title: "Production Management System – Bijapur Offer Product",
    date: "Aug 2021 - Mar 2022",
    description: "Production Management System keeps track of the transaction of all Products, Materials, raw. Shows the information and of the Materials. It deals with monitoring the information and transactions. Provides the administrator facilities to update the list of Materials online",
    technologies: [""],
  },

  {
    title: "E-Commerce WebsiteE-Commerce Website",
    date: "May 2021 - Jul 2021",
    description: "A website was built by me implementing the Templates of Bootstrap, Tailwind and Modifying as per Client Requirement.",
    technologies: [""],
  },
  {
    title: "Student Mangement System - ProductStudent Mangement System - Product",
    date: "Jan 2024 - Present",
    description: "Its tracks, maintains, and manages all of the data created by a school, such as a student's grades, attendance, and  interpersonal activity records, among other things and Reflecting them in UI using ReactJS",
    technologies: [""],
  },
  {
    title: "WhatsApp, Text Utils, Amazon Clone, Spotify Clone, Netflix CloneWhatsApp, Text Utils, Amazon Clone, Spotify Clone, Netflix Clone ",
    date: "  Jan 2021 - Apr 2021",
    description: "A Clone Websites is Build by me using HTML5, Tailwind CSS, JavaScript, React JS as Library and Node.JS as run time Environment Server with Firebase Authentication, Api Fetching using Axios and Some Library of React with Hooks Concepts such as UseState, UseEffect, UseContext",
    technologies: [""],
  },

  // Add more projects as needed
];

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <h4>{project.date}</h4>
                <br></br>
                <p>{project.description}</p>

              </div>
              <footer>
                <ul className="tech-list">
                  <li>{project.technologies.join(", ")}</li>
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
