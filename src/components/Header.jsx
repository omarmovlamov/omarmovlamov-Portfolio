import "../styles/header.css";
import {
  AiFillGithub,
  AiFillHome,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillSafetyCertificate,
  AiOutlineContacts,
} from "react-icons/ai";
import { BsFillPersonFill, BsLightbulb } from "react-icons/bs";
import { RxComponent1 } from "react-icons/rx";

const navItems = [
  { title: "Home", icon: <AiFillHome size={35} />, link: "#home" },
  { title: "About", icon: <BsFillPersonFill size={35} />, link: "#about" },
  {
    title: "Services & Skills",
    icon: <RxComponent1 size={35} />,
    link: "#services",
  },
  { title: "Projects", icon: <BsLightbulb size={35} />, link: "#projects" },
  {
    title: "Certificates",
    icon: <AiFillSafetyCertificate size={35} />,
    link: "#certificates",
  },
  { title: "Contact", icon: <AiOutlineContacts size={35} />, link: "#contact" },
];

const socialLinks = [
  {
    title: "Github",
    icon: <AiFillGithub size={24} />,
    link: "https://github.com/omarmovlamov",
  },
  {
    title: "LinkedIn",
    icon: <AiFillLinkedin size={24} />,
    link: "https://www.linkedin.com/in/omar-movlamov/",
  },
  {
    title: "Instagram",
    icon: <AiFillInstagram size={24} />,
    link: "https://www.instagram.com/dexsvoa/",
  },
];

function Header() {
  return (
    <nav>
      <div>
        <div className="header">
          {navItems.map((item, index) => (
            <a key={index} href={item.link} title={item.title}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="header-socials">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            title={link.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Header;
