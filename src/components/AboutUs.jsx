import "../styles/aboutUs.css";
import Reveal from "./utils/Reveal";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import CV from "../assets/img/OmarMovlamovCV.pdf";
function AboutUs() {
  return (
    <div className="about-me" id="about">
      <div className="global-title">
        <div>
          <p>About Me</p>
        </div>
        <div>
          <p>About Me</p>
        </div>
      </div>
      <div className="about-me-flex">
        <div className="container">
          <div className="about-img">
            <div className="img-box">
              <img
                src="https://i.ibb.co/C9tQ8Bd/about-img.png"
                alt="Omar Movlamov"
              />
            </div>
          </div>
        </div>
        <div className="about-text">
          <div>
            <Reveal>
              <p>
                I am Omar Movlamov! I am from Azerbaijan and currently residing
                in the city of Isparta, Turkey. I am a Frontend Developer
                candidate with a strong grasp of HTML, CSS, and JavaScript,
                skilled in crafting responsive web designs. I am not content
                with just that. I am hardworking, collaborative, and possess a
                team spirit. I am quick to learn new information and
                technologies. With my creative thinking and team-oriented
                approach, I am eagerly looking forward to contributing to your
                projects.
              </p>
            </Reveal>
            <Reveal>
              <div>
                <p>
                  <FaLocationArrow size={30} /> <span>Address</span> : Isparta,
                  Turkey
                </p>
                <p>
                  <AiOutlineMail size={30} /> <span>Email</span> :
                  omarmovlamov@gmail.com
                </p>
              </div>
            </Reveal>
            <Reveal>
              <a href={CV} download>
                <button>
                  <span>Download CV</span> <AiOutlineDownload size={30} />
                </button>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
