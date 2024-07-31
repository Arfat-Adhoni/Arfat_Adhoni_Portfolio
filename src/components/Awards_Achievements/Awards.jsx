import { AwardContainer } from "../Awards_Achievements/style";
import externalLink from "../../assets/external-link.svg";

const AwardsInfo = [
  {
    title: "M.Tech (VTU University 3rd Rank in Design)",
    date: "Sept 2021",
    description: "I was awarded 3rd Rank in M.Tech (Machine Design) from Visveshwarya Technological University Belgaum Karnataka.",
  },
  {
    title: "Volunteers Lead in WEBXPLORE 2022",
    date: "Nov 2022",
    description: "Volunteers Lead in WEBXPLORE 2022 to achieve the Record India Books of Record for successfully developing & hosting websites on real-time servers and contributing to the successful record attempt in completion of MAXIMUM WEBSITES LAUNCHED IN A SINGLE DAY.",
  },
  {
    title: "BE Project Exhibitions Award",
    date: "Feb 2019",
    description: "Secured 3rd Rank in Project Exhibition held in Bangalore Institute of Technology, Bangalore in 2019.",
  },
  {
    title: "Performing Above & Beyond Excellence",
    date: "Jul 2024",
    description: "Recognized for performing above and beyond excellence in Mercedes-Benz R&D India",
  },
  {
    title: "Python - Blue Belt Certification",
    date: "Jul 2024",
    description: "Issued by Immersive Labs. Associated with Mercedes-Benz Research and Development India.",
  },
  {
    title: "Java - White Belt Certificate",
    date: "Oct 2023",
    description: "Issued by Immersive Labs. Associated with Mercedes-Benz Research and Development India.",
  },
  {
    title: "CodeBashing Course React",
    date: "Jun 2024",
    description: "Issued by CodeBashing Labs. Associated with Mercedes-Benz Research and Development India.",
  },
  {
    title: "CodeBashing Course Python Advance",
    date: "May 2024",
    description: "Issued by CodeBashing Labs. Associated with Mercedes-Benz Research and Development India.",
  },
  {
    title: "CodeBashing Course Java",
    date: "Oct 2023",
    description: "Issued by CodeBashing Labs. Associated with Mercedes-Benz Research and Development India.",
  },
];

AwardsInfo.sort((a, b) => new Date(b.date) - new Date(a.date));

export function Awards() {
  return (
    <AwardContainer id="project">
      <h2>My Achievements & Certifications</h2>
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
                <div>
                  <img src={externalLink} style={{ width: "60px" }} alt="Visit site" />
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
