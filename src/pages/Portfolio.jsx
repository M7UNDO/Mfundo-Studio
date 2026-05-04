import ProjectCard from "../components/ProjectCard";
import website1 from "../assets/images/lna/LNA.png";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const projectData = [
    {
      id: "absa-nextgen-wealth-studio",
      img: website1,
      title: "Absa Next-Gen Wealth Studio",
      description:
        "Designing and developing a responsive financial planning web application prototype that enables young South African professionals to better understand and manage their finances through interactive simulations, personalised strategy tracks, and real-time insights, while integrating educational content to support informed decision-making.",
      info: "Website",
      liveLink: "",
      githubLink: "",
      tools: ["React JS", "JavaScript", "GSAP", "HTML & CSS"],
    },
    {
      id: "ngengebule-attorneys",
      img: website1,
      title: "Ngengebule Attorneys",
      description:
        "Designing and developing a responsive, SEO-optimised website for Ngengebule Attorneys Inc that enhances the firm's digital presence, communicates its legal services effectively, and improves client engagement through intuitive navigation, brand-aligned design, and a professional, user-friendly experience.",
      info: "Website",
      liveLink: "https://ngengebule.co.za/",
      githubLink: "",
      tools: ["React JS", "JavaScript", "GSAP", "HTML & CSS"],
    },
  ];

  return (
    <main className="portfolio-page">
      <h1>Web Development</h1>

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