import { lazy } from "react";
import "../styles/services.css";
import { FaConnectdevelop } from "react-icons/fa";
import { BiMobileAlt } from "react-icons/bi";
import { RiSeoLine } from "react-icons/ri";

const Skills = lazy(() => import("./Skills"));

function Services() {
  return (
    <div className="service">
      <div className="services-main" id="services">
        <div className="global-title">
          <div>
            <p>Services</p>
          </div>
          <div>
            <p>Services</p>
          </div>
        </div>
        <div className="services-content">
          <div className="margin">
            <div className="services-dev services-items services-border">
              <div>
                <FaConnectdevelop size={35} />
                <p>Front-End Development</p>
              </div>
            </div>
          </div>
          <div className="margin">
            <div className="services-responsive services-items services-border">
              <div>
                <BiMobileAlt size={35} />
                <p>Responsive Design</p>
              </div>
            </div>
          </div>
          <div className="margin">
            <div className="services-seo services-items services-border">
              <div>
                <RiSeoLine size={35} />
                <p>SEO Optimization</p>
              </div>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default Services;
