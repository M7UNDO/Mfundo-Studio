import React, {useRef} from "react";
import ExperienceCard from "../components/ExperienceCard";
import AchievementCard from "../components/AchievementCard";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "../styles/About.css";
import profileImg from "../assets/profile/M7UNDO_Pfp.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
    {
      id: 0,
      achievement: "Golden Key Honour Society",
      institution: "University of the Witwatersrand",
      date: "2024",
    },
    {
      id: 1,
      achievement: "Certificate of First Class - AFRL1003A • Elementary isiZulu Language and Culture IA",
      institution: "University of the Witwatersrand",
      date: "2023",
    },
    {
      id: 2,
      achievement: "Certificate of First Class - AFRL1004A • Elementary isiZulu Language and Culture IB",
      institution: "University of the Witwatersrand",
      date: "2023",
    },
    {
      id: 3,
      achievement: "Certificate of First Class - WSOA1003A • Film, Visual and Performing Arts IB",
      institution: "University of the Witwatersrand",
      date: "2023",
    },
    {
      id: 4,
      achievement: "Certificate of First Class - WSOA2021A • Storytelling Across Media and Cultural Contexts",
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
    {
      id: 8,
      achievement: "Matric Top Design Student",
      institution: "Krugersdorp High School",
      date: "2022",
    },
    {
      id: 9,
      achievement: "Matric Top 20 (6th Place)",
      institution: "Krugersdorp High School",
      date: "2022",
    },
    {
      id: 9,
      achievement: "The Campus Game Jam - Runner Up",
      institution: "University of The Witwatersrand",
      date: "2026",
    },
    {
      id: 9,
      achievement: "The Campus Game Jam - Community Favourite Winner",
      institution: "University of The Witwatersrand",
      date: "2026",
    },
  ];

  const sortedAchievements =  [...achievementData].sort((a,b)=>(b.date.localeCompare(a.date)));

  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.8,
        },
      });


      tl.fromTo(
        ".about-badge",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
      )
        .fromTo(
          ".profile",
          {
            opacity: 0,
            x: 40,
            scale: 0.96,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.25",
        )
        .fromTo(
          ".about-title",
          {
            opacity: 0,
            y: 34,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.35",
        )

        .fromTo(
          ".bio-text p",
          {
            opacity: 0,
            x: -24,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.18,
            duration: 0.8,
          },
          "-=0.45",
        )
        .fromTo(
          ".bio-text blockquote",
          {
            opacity: 0,
            y: 24,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
          },
          "-=0.25",
        )

        // =========================
        // EXPERIENCE SECTION
        // =========================

        .fromTo(
          ".experience-grid .section-label",
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.15",
        )

        .fromTo(
          ".experience-card",
          {
            opacity: 0,
            y: 32,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.14,
            duration: 0.75,
          },
          "-=0.2",
        )


        .fromTo(
          ".skills-column .section-label",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.2",
        )

        .fromTo(
          ".skill-tags span",
          {
            opacity: 0,
            y: 16,
            scale: 0.94,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.06,
            duration: 0.45,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )

        .fromTo(
          ".achievements-column .section-label",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.25",
        )

        .fromTo(
          ".achievement-item",
          {
            opacity: 0,
            x: 24,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 0.65,
          },
          "-=0.45",
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
                I'm a final-year Digital Arts student at the University of the Witwatersrand, majoring in Interactive
                Media and Game Design. Over the past few years, I've discovered that what I enjoy most is building
                digital products that solve real problems while creating experiences people genuinely enjoy using.
              </p>

              <p>
                My journey started with HTML, CSS and JavaScript, where I developed a strong appreciation for clean code
                and thoughtful user interfaces. Since then, I've expanded into React development, UX design and product
                design, working on both commercial client projects and university products from research and planning
                through to implementation.
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
            <img src={profileImg} alt="" className="profile" />
          </div>
        </div>

        <div className="experience-grid">
          <h3 className="section-label">Freelance Projects</h3>

          <div className="experience-list">
            {experienceData.map((experience) => (
              <ExperienceCard
                key={experience.id}
                client={experience.client}
                date={experience.date}
                role={experience.role}
                description={experience.description}
              />
            ))}
          </div>
        </div>

        <div className="bottom-grid">
          <div className="skills-column">
            <h2 className="section-label">Technical Stack</h2>

            <div className="skills-group">
              <h3>Front-End Development</h3>

              <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>React</span>
                <span>GSAP</span>
                <span>RESTful APIs</span>
                <span>SEO Optimisation</span>
                <span>Responsive Design</span>
                <span>Web Accessibility</span>
                <span>Git & GitHub</span>
                <span>Interactive Media</span>
              </div>
            </div>

            <div className="skills-group">
              <h3>UI/UX Design</h3>

              <div className="skill-tags">
                <span>Interaction Design</span>
                <span>User Flows</span>
                <span>User Personas</span>
                <span>Journey Mapping</span>
                <span>Wireframing</span>
                <span>High-Fidelity Prototyping</span>
                <span>Information Architecture</span>
                <span>Usability Testing</span>
                <span>Design Systems</span>
                <span>Typography</span>
                <span>Colour Theory</span>
                <span>Figma</span>
                <span>Illustrator</span>
              </div>
            </div>

            <div className="skills-group">
              <h3>Game Development</h3>

              <div className="skill-tags">
                <span>Game Design</span>
                <span>Unity</span>
                <span>Unreal Engine</span>
                <span>C#</span>
                <span>C++</span>
                <span>3D Modelling</span>
                <span>Level Design</span>
                <span>Sound Design</span>
              </div>
            </div>
          </div>
          <div className="achievements-column">
            <h2 className="section-label">Achievements</h2>
            <div className="achievement-list">
              {sortedAchievements.map((achievement) => (
                <AchievementCard
                  key={achievement.id}
                  achievement={achievement.achievement}
                  date={achievement.date}
                  institution={achievement.institution}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
