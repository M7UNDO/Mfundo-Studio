import React, {useRef, useState} from "react";
import ExperienceCard from "../components/ExperienceCard";
import AchievementCard from "../components/AchievementCard";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "../styles/About.css";
import profileImg from "../assets/profile/M7UNDO_Pfp.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [activeTab, setActiveTab] = useState("Front-End Development");

  const experienceData = [
    {
      id: 0,
      client: "Ngengebule Attorneys Inc",
      role: "Front-end Developer, UI/UX Designer",
      date: "Jan 2026 - Mar 2026",
      description:
        "Built a fully responsive React website from concept to deployment, translating business requirements into an accessible digital experience. Working directly with the firm's directors, I delivered a scalable solution that strengthened its online presence through reusable architecture, responsive design, and SEO-conscious development.",
    },
    {
      id: 1,
      client: "Lesakhi Investments",
      role: "Graphic Designer",
      date: "Jan 2026 - Mar 2026",
      description:
        "Established Lesakhi Investments' visual identity by creating its logo, stationery, and marketing assets. Collaborating directly with stakeholders, I developed a cohesive brand system that reflected the company's values and strengthened its professional presence.",
    },
    {
      id: 2,
      client: "Rahul Solutions",
      role: "Front-end Developer, Graphic Designer, 3D Modeller",
      date: "Jan 2023 - Dec 2025",
      description:
        "Developed custom front-end solutions for WordPress and Elementor projects while producing branding and 3D visualisations for commercial clients. From interactive websites to industrial environments, I combined technical implementation with creative problem-solving to deliver polished digital experiences.",
    },
    {
      id: 3,
      client: "L&D Academy",
      role: "Graphic Designer",
      date: "2023 - 2024",
      description:
        "Created the organisation's visual identity through logo design, stationery, and branded marketing assets, establishing a consistent visual language across digital and print communications.",
    },
  ];

  const achievementData = [
    {id: 0, achievement: "Golden Key Honour Society", institution: "University of the Witwatersrand", date: "2024"},
    {
      id: 1,
      achievement: "Certificate of First Class - AFRL1003A • Elementary isiZulu IA",
      institution: "University of the Witwatersrand",
      date: "2023",
    },
    {
      id: 4,
      achievement: "Certificate of First Class - WSOA2021A • Storytelling Across Media",
      institution: "University of the Witwatersrand",
      date: "2024",
    },
    {
      id: 5,
      achievement: "Certificate of First Class - WSOA2023A • Digital Arts Practice II",
      institution: "University of the Witwatersrand",
      date: "2024",
    },
    {
      id: 6,
      achievement: "Certificate of First Class - WSOA2024A • Game Design IIA",
      institution: "University of the Witwatersrand",
      date: "2024",
    },
    {
      id: 7,
      achievement: "Vega Flair in Design Trophy",
      institution: "Krugersdorp High School, Vega School",
      date: "2022",
    },
    {id: 8, achievement: "Matric Top Design Student", institution: "Krugersdorp High School", date: "2022"},
    {id: 9, achievement: "Matric Top 20 (6th Place)", institution: "Krugersdorp High School", date: "2022"},
  ];

  const skillsData = {
    "Front-End Development": [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Vite",
      "Git/GitHub",
      "GSAP",
      "REST APIs",
      "Responsive Design",
      "Component Architecture",
      "Semantic Markup",
      "Supabase",
    ],
    "UI/UX Design": [
      "Interaction Design",
      "User Flows",
      "Journey Mapping",
      "User Personas",
      "Usability Testing",
      "Figma",
      "Adobe Illustrator",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Typography",
      "Colour Theory",
    ],
    "Game Design": [
      "Game Design",
      "Unity",
      "C#",
      "Multiplayer Netcode",
      "3D Modelling",
      "Level Design",
      "Sound Design",
    ],
    Other: [
      "BPMN Process Modelling",
      "Business Process Analysis",
      "Process Documentation",
      "Signavio",
      "Time Management",
      "Problem Solving",
    ],
  };

  const sortedAchievements = [...achievementData].sort((a, b) => b.date.localeCompare(a.date));
  const container = useRef();
  const skillsContainerRef = useRef();

  // Handle Tab Switch Animation
  const handleTabChange = (tab) => {
    if (tab === activeTab) return;

    gsap.to(".skill-tags span", {
      opacity: 0,
      y: -10,
      duration: 0.2,
      stagger: 0.02,
      onComplete: () => {
        setActiveTab(tab);
        gsap.fromTo(
          ".skill-tags span",
          {opacity: 0, y: 15, scale: 0.95},
          {opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.03, ease: "back.out(1.5)"},
        );
      },
    });
  };

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // Setup viewport-specific animations
      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          let {isMobile} = context.conditions;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
              once: true,
            },
            defaults: {ease: "power3.out", duration: 0.8},
          });

          tl.fromTo(".about-badge", {opacity: 0, y: 20}, {opacity: 1, y: 0})
            .fromTo(".about-title", {opacity: 0, y: 30}, {opacity: 1, y: 0}, "-=0.6")
            .fromTo(
              ".profile",
              {opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 30 : 0, scale: 0.95},
              {opacity: 1, x: 0, y: 0, scale: 1, duration: 1, ease: "power4.out"},
              "-=0.5",
            )
            .fromTo(
              ".bio-text p",
              {opacity: 0, x: isMobile ? 0 : -20, y: isMobile ? 20 : 0},
              {opacity: 1, x: 0, y: 0, stagger: 0.15},
              "-=0.6",
            )
            .fromTo(".experience-grid .section-label", {opacity: 0, y: 20}, {opacity: 1, y: 0}, "-=0.4")
            .fromTo(".experience-card", {opacity: 0, y: 30}, {opacity: 1, y: 0, stagger: 0.15}, "-=0.6")
            .fromTo(".bottom-grid .section-label", {opacity: 0, y: 20}, {opacity: 1, y: 0, stagger: 0.2}, "-=0.4")
            .fromTo(".skills-tabs", {opacity: 0, y: 15}, {opacity: 1, y: 0}, "-=0.5")
            .fromTo(
              ".skill-tags span",
              {opacity: 0, y: 15, scale: 0.9},
              {opacity: 1, y: 0, scale: 1, stagger: 0.04, duration: 0.5, ease: "back.out(1.5)"},
              "-=0.4",
            )
            .fromTo(
              ".achievement-item",
              {opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0},
              {opacity: 1, x: 0, y: 0, stagger: 0.1},
              "-=0.6",
            );
        },
      );
    },
    {scope: container},
  );

  return (
    <section className="about-section" ref={container}>
      <div className="about-content">
        <div className="about-intro">
          <div>
            <span className="about-badge">About me</span>
            <h1 className="about-title">
              Experience & <span>Expertise.</span>
            </h1>
            <div className="bio-text">
              <p>
                I'm a fourth-year Honors Digital Arts student at the University of the Witwatersrand, majoring in
                Interactive Media and Game Design. Over the past few years, I've discovered that what I enjoy most is
                building digital products that solve real problems while creating experiences people genuinely enjoy
                using.
              </p>
              <p>
                My journey started with HTML, CSS, and JavaScript, where I developed a strong appreciation for clean
                code and thoughtful user interfaces. Since then, I've expanded into React development, UX design, and
                product design, working on both commercial client projects and university products from research and
                planning through to implementation.
              </p>
              <p>
                What motivates me isn't just building something that works. I enjoy understanding the people I'm
                designing for, the business challenges behind a product, and how thoughtful design and technology can
                come together to create something meaningful. That's what continues to push me to learn, improve, and
                refine my craft every day.
              </p>
            </div>
          </div>
          <div>
            <img src={profileImg} alt="Profile" className="profile" />
          </div>
        </div>

        <div className="experience-grid">
          <h3 className="section-label">Freelance Projects</h3>
          <div className="experience-list">
            {experienceData.map((experience) => (
              <ExperienceCard key={experience.id} {...experience} />
            ))}
          </div>
        </div>

        <div className="bottom-grid">
          <div className="skills-column">
            <h2 className="section-label">Technical Stack</h2>
            <div className="skills-group">
              <div className="skills-tabs">
                {Object.keys(skillsData).map((tab) => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="skill-tags" ref={skillsContainerRef}>
                {skillsData[activeTab].map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="achievements-column">
          <h2 className="section-label">Achievements</h2>
          <div className="achievement-list">
            {sortedAchievements.map((achievement) => (
              <AchievementCard key={achievement.id} {...achievement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
