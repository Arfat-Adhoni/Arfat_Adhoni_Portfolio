import { AwardContainer } from "../Awards_Achievements/style";
import externalLink from "../../assets/external-link.svg";
// import ScrollAnimation from "react-animate-on-scroll";

import Arfat_Mtech_RankImg  from "../../assets/AwardsImgs/Arfat_Mtech_RankImg.jpg";


const AwardsInfo = [
    {
        title: "M.Tech (VTU University 3rd Rank in Design) ",
        date: "Sept 2021",
        description: "I was award for 3rd Rank to University in M.Tech (Machine Design) from Visveshwarya Technological University Belgaum Karnataka",
        AwardImage : Arfat_Mtech_RankImg
      },

      {
        title: "Volunteers Lead in WEBXPLORE 2022",
        date: "Nov 2022",
        description: "Volunteers Lead in WEBXPLORE 2022 to achieve the Record India Books of Record for successfully developing & hosting website on real-time severs and contributing to successful record attempt in completion of MAXIMUM WEBSITES LAUNCHED IN A SINGLE DAY",
        AwardImage : ""
      },

      {
        title: "BE Project Exhibitions Award",         
        date: "Feb 2019",
        description: "Secured 3rd Rank in Project Exhibition held in Bangalore Institute of Technology, Bangalore in 2019.",
        AwardImage : ""
      },
    
  

  // Add more Awards as needed
];

export function Awards() {
  return (
    <AwardContainer id="project">
    <h2>My Awards & Achievements</h2>
    <div className="projects">
      {AwardsInfo.map((awardsInfo, index) => (
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
            <h3>{awardsInfo.title}</h3>
            <h4>{awardsInfo.date}</h4>
            <br />
            <p>{awardsInfo.description}</p>
          </div>
         
        </div>
      ))}
    </div>
  </AwardContainer>
  );
}
