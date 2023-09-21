import "../styles/projects.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

function Projects() {
  const projectData = [
    {
      title: "Dexs Fitness Project",
      imgSrc: "https://i.ibb.co/qkmFTQC/dexsfitnessproject.png",
      previewLink: "https://dexsfitness.netlify.app",
      githubLink: "https://github.com/omarmovlamov/dexsfitness",
      description: "Web Development",
    },
    {
      title: "Dexs Fast Project",
      imgSrc: "https://i.ibb.co/DpYxHXY/dexsfastproject.png",
      previewLink: "https://dexsfast.netlify.app",
      githubLink: "https://github.com/omarmovlamov/dexsfast",
      description: "Web Development",
    },
    {
      title: "Dexs Invest Project",
      imgSrc: "https://i.ibb.co/BTsgRHN/dexsinvestproject.png",
      previewLink: "https://dexsinvest.netlify.app",
      githubLink: "https://github.com/omarmovlamov/DexsInvest-Project",
      description: "Web Development",
    },
    {
      title: "Dexs BIKe Project",
      imgSrc: "https://i.ibb.co/0YQPzvN/dexsbikeproject.png",
      previewLink: "https://dexsbike.netlify.app/",
      githubLink: "https://github.com/omarmovlamov/DexsBIKeProject",
      description: "Web Development",
    },
    {
      title: "Hotel Project",
      imgSrc: "https://i.ibb.co/kG8j1Dx/hotelproject.png",
      previewLink: "https://dexsvoahotel.netlify.app/",
      githubLink: "https://github.com/omarmovlamov/Hotel-Project",
      description: "Web Development",
    },
    {
      title: "Dexs News Project",
      imgSrc: "https://i.ibb.co/NZsyQCb/newsproject.png",
      previewLink: "https://dexsnews.netlify.app/",
      githubLink: "https://github.com/omarmovlamov/DexsNews",
      description: "Web Development",
    },
  ];

  return (
    <div className="projects" id="projects">
      <div className="global-title">
        <div>
          <p>Projects</p>
        </div>
        <div>
          <p>Projects</p>
        </div>
      </div>
      <div className="projects-section">
        <div className="projects-row">
          {projectData.map((project, index) => (
            <div className="project-box all-p" key={index}>
              <img src={project.imgSrc} alt={project.title} />
              <div className="project-links">
                <a href={project.previewLink} target="blanked">
                  <p>Preview</p>
                  <BiLinkExternal />
                </a>
                <a href={project.githubLink} target="blanked">
                  <p>Github</p>
                  <AiFillGithub />
                </a>
              </div>
              <div className="project-title">
                <p>{project.title}</p>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
