// src/data/portfolioData.js

import absaCover from "../assets/images/absa/cover.png";
import moneySnapshot from "../assets/images/absa/moneysnapshot.jpg";
import strategyTracks from "../assets/images/absa/strategytracks.jpg";
import simulationStudio from "../assets/images/absa/simulationlabs.jpg";


const portfolioData = [
  {
    id: "absa-nextgen-wealth-studio",
    title: "ABSA NextGen Wealth Studio - First Five Years",
    category: "Web Application",
    coverImage: absaCover,

    meta: {
      client: "ABSA Bank / Digital Arts Department",
      role: "UI/UX Designer & Front-End Developer",
      year: "2025",
      tools: ["React", "Vite", "React Router", "CSS", "Recharts"],
    },

    sections: [
      {
        title: "Project Overview",
        content: [
          "ABSA NextGen Wealth Studio is a financial planning web application prototype designed for high-earning young South African professionals navigating the first five years of their careers.",
          "The platform helps users understand their financial position, choose a guided financial strategy, and simulate major life decisions such as vehicle finance, property affordability, and saving versus spending.",
        ],
      },
      {
        title: "The Problem",
        content: [
          "Young professionals often earn well but feel overwhelmed by major financial decisions. Questions such as whether to buy a car, rent or buy property, save or invest, and how to plan their financial future can feel confusing and high-risk.",
          "Existing financial tools are often transactional rather than educational, leaving users without the guidance needed to make informed decisions.",
        ],
      },
      {
        title: "Target Users",
        content: [
          "The product is designed for South African young professionals aged 23–35 earning approximately R30,000–R70,000 per month.",
          "These users are typically based in major metropolitan areas and work in industries such as technology, finance, consulting, law, medicine, and engineering.",
        ],
      },
      {
        title: "The Brief",
        content: [
          "The assignment required defining and building a working MVP prototype of a digital financial companion web application.",
          "The solution needed to demonstrate a Money Snapshot, Strategy Tracks, a Simulation Studio, and embedded educational content within a fully functional React application.",
        ],
      },
      {
        title: "My Solution",
        content: [
          "I designed and developed a React-based web application that combines financial dashboards, guided strategy paths, interactive simulations, and educational content.",
          "The goal was to position ABSA as a financial guide rather than just a bank by helping users make sense of their money and plan their first five years with confidence.",
        ],
      },
      {
        title: "Key Features",
        list: [
          "Money Snapshot - A dashboard showing income, deductions, and cash flow",
          "Strategy Tracks - Guided financial paths tailored to different user goals",
          "Simulation Studio - Interactive tools for decision-making scenarios",
          "Educational Content - Embedded explainers for financial concepts",
          "South African Context - ZAR, PAYE, SARS, and local financial systems",
        ],
      },
      {
        title: "Design & Development Process",
        content: [
          "The project began with defining the product vision, target users, and key financial challenges.",
          "Wireframes were created to establish layout and flow across the dashboard, strategy tracks, and simulations.",
          "The MVP was then developed using React, focusing on modular components, routing, and interactive UI elements.",
        ],
      },
      {
        title: "Outcome",
        content: [
          "The final MVP successfully demonstrated a financial dashboard, a complete strategy track, interactive simulations, and integrated educational content.",
          "The prototype proved that the concept is both feasible and valuable for the target audience.",
        ],
      },
      {
        title: "Reflection",
        content: [
          "This project strengthened my ability to translate a complex product brief into a structured and functional digital experience.",
          "It required balancing UX thinking, financial communication, and front-end development to create a cohesive solution.",
        ],
      },
    ],

    gallery: [moneySnapshot, strategyTracks, simulationStudio],

    links: {
      live: "",
      github: "",
    },
  },
];

export default portfolioData;