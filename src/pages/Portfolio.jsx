import ProjectCard from "../components/ProjectCard";
import absaCover from "../assets/images/covers/Absa_NextGen.svg";
import lnaCover from "../assets/images/covers/LNA_Web.svg";
import northstarCover from "../assets/images/covers/northstar_shop.svg";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const projectData = [
    {
      id: "absa-nextgen-wealth-studio",
      img: absaCover,
      title: "Absa Next-Gen Wealth Studio",
      description:
        "Designing and developing a responsive financial planning web application prototype that enables young South African professionals to better understand and manage their finances through interactive simulations, personalised strategy tracks, and real-time insights, while integrating educational content to support informed decision-making.",
      info: "Website",
      liveLink: "https://m7undo.github.io/absa-nextgen-wealth/",
      githubLink: "https://github.com/M7UNDO/absa-nextgen-wealth",
      tools: ["React JS", "JavaScript", "GSAP", "HTML & CSS"],
    },
    {
      id: "ngengebule-attorneys",
      img: lnaCover,
      title: "Ngengebule Attorneys",
      description:
        "Designing and developing a responsive, SEO-optimised website for Ngengebule Attorneys Inc that enhances the firm's digital presence, communicates its legal services effectively, and improves client engagement through intuitive navigation, brand-aligned design, and a professional, user-friendly experience.",
      info: "Website",
      liveLink: "https://ngengebule.co.za/",
      githubLink: "https://github.com/M7UNDO/LNA",
      tools: ["React JS", "JavaScript", "GSAP", "HTML & CSS"],
    },
    {
      id: "northstar-shop",
      img: northstarCover,
      title: "Fake Store API Integration",
      description:
        "This project is an e-commerce website that integrates the Fake Store REST API along with my own custom products. It includes dynamic product loading, cart logic, and a complete front-end interface representing my brand.",
      info: "Website",
      liveLink: "https://m7undo.github.io/Shop-Northstar-Studios/",
      githubLink: "https://github.com/M7UNDO/Shop-Northstar-Studios",
      tools: ["React JS", "JavaScript", "GSAP", "HTML & CSS"],
    },
  ];

  return (
    <main className="portfolio-page">

      <div className="portfolio-grid">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            src={project.img}
            title={project.title}
            category={project.info}
            description={project.description}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            tools={project.tools}
          />
        ))}
      </div>
    </main>
  );
}