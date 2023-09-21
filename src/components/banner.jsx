import { useState, useEffect } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import Reveal from "./utils/Reveal";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../styles/banner.css";
import ParticlesBackground from "./Particles";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-end Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <ParticlesBackground />
      <div>
        <div className="aligh-items-center row-banner">
          <div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <Reveal>
                    <span className="tagline">Welcome to my Portfolio</span>
                  </Reveal>
                  <Reveal>
                    <h1>
                      {`Hi! I'm Omar `}{" "}
                      <span
                        className="txt-rotate"
                        data-rotate='[ "Front-end Developer"]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                  </Reveal>
                  <Reveal>
                    <p>
                      Hi, I'm Omar Movlamov, a Front-end Developer with a
                      passion for creating beautiful and interactive web
                      applications. I have a strong background in HTML, CSS, and
                      JavaScript, and I enjoy turning creative ideas into
                      functional and user-friendly websites. Welcome to my
                      portfolio!
                    </p>
                  </Reveal>
                  <div className="contact-btn">
                    <a href="#contact">
                      <button>
                        SAY HELLO <BiSolidContact size={20} />
                      </button>
                    </a>
                  </div>
                  <Reveal>
                    <div className="banner-socials">
                      <a
                        href="https://github.com/omarmovlamov"
                        title="Github"
                        target="blanked"
                      >
                        <AiFillGithub size={24} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/omar-movlamov/"
                        title="LinkedIn"
                        target="blanked"
                      >
                        <AiFillLinkedin size={24} />
                      </a>
                      <a
                        href="https://www.instagram.com/dexsvoa/"
                        title="Instagram"
                        target="blanked"
                      >
                        <AiFillInstagram size={24} />
                      </a>
                    </div>
                  </Reveal>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src="https://i.ibb.co/VmbLPV5/banner-img2.png"
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};
