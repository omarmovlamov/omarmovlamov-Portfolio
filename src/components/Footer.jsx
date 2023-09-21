import "../styles/Footer.css"; // CSS dosyasını projenizin dizinine eklemeyi unutmayın

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com/omarmovlamov">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/omar-movlamov/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/dexsvoa/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#certificates">Cerfiticates</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p> &copy; Omar Movlamov All rigths reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
