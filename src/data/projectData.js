import absaCover from "../assets/images/covers/Absa_NextGen.svg";
import lnaCover from "../assets/images/covers/LNA_Web.svg";
import northstarCover from "../assets/images/covers/northstar_shop.svg";
import pavillionCover from "../assets/images/covers/fakeStore.png";

const projectData = [
  {
    id: "absa-nextgen-wealth-studio",
    img: absaCover,
    title: "Absa Next-Gen Wealth Studio",
    description:
      "Designing and developing a responsive financial planning web application prototype that enables young South African professionals to better understand and manage their finances through interactive simulations, personalised strategy tracks, and real-time insights, while integrating educational content to support informed decision-making.",
    info: "Website",
    liveLink: "https://m7undo.github.io/absa-nextgen-wealth/#/strategy-tracks",
    githubLink: "https://github.com/M7UNDO/absa-nextgen-wealth",
    tools: [
      "React JS",
      "JavaScript",
      "GSAP",
      "HTML",
      "CSS",
      "Supabase Auth",
    ],
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
    tools: ["React JS", "JavaScript", "GSAP", "HTML", "CSS"],
  },
  {
    id: "northstar-shop",
    img: northstarCover,
    title: "Fake Store API Integration",
    description:
      "This project is an e-commerce website that integrates the Fake Store REST API along with custom products. It includes dynamic product loading, cart logic, and a complete front-end interface.",
    info: "Website",
    liveLink: "https://m7undo.github.io/Shop-Northstar-Studios/",
    githubLink: "https://github.com/M7UNDO/Shop-Northstar-Studios",
    tools: [
      "Plain JavaScript",
      "GSAP",
      "HTML",
      "CSS",
      "RESTsful API",
    ],
  },
  {
    id: "the-pavillion",
    img: pavillionCover,
    title: "React FakeStore API Integration",
    description:
      "Reimagined an earlier API integration project by rebuilding it from scratch with React and Supabase, focusing on scalable component architecture, authentication, responsive UI/UX, and dynamic e-commerce functionality powered by the Fake Store API.",
    info: "Website",
    liveLink: "https://m7undo.github.io/fake-store-api/",
    githubLink: "https://github.com/M7UNDO/fake-store-api",
    tools: [
      "React JS",
      "GSAP",
      "HTML",
      "CSS",
      "RESTsful API",
      "Supabase Auth",
    ],
    hasCaseStudy: false,
  },
];

export default projectData;