import { useState } from "react";
import "../styles/skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import Reveal from "./utils/Reveal";
import TrackVisibility from "react-on-screen";

const skillsData = [
  { name: "HTML", icon: <AiFillHtml5 size={25} />, percent: 90 },
  { name: "CSS", icon: <DiCss3 size={25} />, percent: 85 },
  { name: "JavaScript", icon: <BiLogoJavascript size={25} />, percent: 80 },
  { name: "Bootstrap", icon: <FaBootstrap size={25} />, percent: 80 },
  { name: "React", icon: <BiLogoReact size={25} />, percent: 75 },
  { name: "Next.js", icon: <TbBrandNextjs size={25} />, percent: 55 },
  // { name: "Node.js", icon: <BiLogoNodejs size={25} />, percent: 40 },
];

const additionalSkills = [
  { name: "Responsive Design", percent: 90 },
  { name: "Npm, Axios, Fetch, Json", percent: 85 },
  { name: "Material UI", percent: 80 },
  { name: "Netlify", percent: 75 },
  { name: "jQuery", percent: 70 },
  { name: "Git", percent: 65 },
  { name: "Adobe Photoshop", percent: 65 },
];

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="skills-container">
      <div className="global-title">
        <div>
          <p>Skills</p>
        </div>
        <div>
          <p>Skills</p>
        </div>
      </div>
      <TrackVisibility
        partialVisibility
        onChange={(isVisible) => setIsVisible(isVisible)}
      >
        <div className={isVisible ? "animate__animated animate__flash " : ""}>
          <div className="skills-section">
            <div className="skills-left-side">
              {skillsData.map((skill, index) => (
                <div className="skills-row" key={index}>
                  <Reveal>
                    <div
                      className={`${skill.name.toLowerCase()}-skill skills-center`}
                    >
                      <div>
                        <p>{skill.name}</p>
                        <p>{skill.icon}</p>
                      </div>
                      <div
                        className={`progress-circle over50 p${skill.percent}`}
                      >
                        <span>{skill.percent}%</span>
                        <div className="left-half-clipper">
                          <div className="first50-bar"></div>
                          <div className="value-bar"></div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
            <div className="skills-right-side">
              <div className="progress-bar">
                {additionalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="progress-bar-title">
                      <p>{skill.name}</p>
                      <p>{skill.percent}%</p>
                    </div>
                    <div className={`p-b p-b-${skill.percent}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TrackVisibility>
    </div>
  );
}

export default Skills;
