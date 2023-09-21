import { useState, useEffect } from "react";
import "../styles/achievements.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const certificates = [
  {
    img: "https://i.ibb.co/1mzQF9n/Ekran-g-r-nt-s-2023-09-16-192136.png",
    title: "IBM Front-End Developer",
    description:
      " Obtained the IBM Front-End Developer Certification, a milestone that represents a significant personal and professional achievement for me. Thanks to this certificate program, I gained many important skills that I believe have contributed greatly to my career. At the end of this program, I further improved my ability to create web pages. I also honed my skills in managing GitHub repositories and branches, using front-end frameworks like React JS, testing and debugging applications, deploying applications using automated build tools, and creating fully functional user interfaces for dynamic applications that interact with backend services. With this certification, I feel fully prepared to take on the responsibilities of an entry-level front-end developer role.",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/QNSSDUPD66KU",
  },
  {
    img: "https://i.ibb.co/XZQ7YKW/Ekran-g-r-nt-s-2023-09-16-192210.png",
    title: "Meta Front-End Developer",
    description:
      "Obtaining the Meta Front-End Developer Certification represents a great achievement for me, both personally and professionally. Thanks to this certificate program, I gained the basic skills necessary to build a successful career in the business world. When I completed this program, I further improved my ability to create web pages. I also sharpened my skills in managing GitHub repositories and branches, using front-end frameworks like React JS, testing and debugging applications, deploying applications using automated build tools, and creating fully functional user interfaces for dynamic applications that interact with the services behind them.",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/GQEFXD5GVB29",
  },
  {
    img: "https://i.ibb.co/X7MwH2g/Ekran-g-r-nt-s-2023-09-16-195806.png",
    title: "HTML, CSS, and Javascript for Web Developers",
    description:
      "This course is authorized by Johns Hopkins University and offered through Coursera. It represents both a personal and professional achievement and I believe it has contributed greatly to my career. Thanks to this certificate program, I gained important skills that will contribute greatly to my career. By the end of the program, I had further improved my ability to create web pages. Thanks to this certification, I feel fully prepared to take on the responsibilities of a frontend developer role. This course, offered in collaboration with Johns Hopkins University and Coursera, has helped me take a big step forward in improving my knowledge and skills in technology and increased my confidence in future career opportunities.",
    link: "https://www.coursera.org/account/accomplishments/certificate/BYVGB3P4ZNDJ",
  },
];

const Achievements = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => (prevCount + 1) % certificates.length);
  };

  const decrease = () => {
    setCount(
      (prevCount) => (prevCount - 1 + certificates.length) % certificates.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(increase, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const certificate = certificates[count];

  return (
    <div className="achievements" id="certificates">
      <div className="global-title">
        <div>
          <p>Certificates</p>
        </div>
        <div>
          <p>Certificates</p>
        </div>
      </div>
      <div className="achievements-item">
        <button onClick={decrease}>
          <AiOutlineLeft size={35} />
        </button>
        <div className="achievements-items">
          <img src={certificate.img} alt={certificate.title} />
          <div className="achievements-content">
            <h2>{certificate.title}</h2>
            <p>{certificate.description}</p>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal size={25} />
            </a>
          </div>
        </div>
        <button onClick={increase}>
          <AiOutlineRight size={35} />
        </button>
      </div>
    </div>
  );
};

export default Achievements;
