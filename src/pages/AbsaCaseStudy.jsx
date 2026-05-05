// src/pages/AbsaCaseStudy.jsx

import {Link} from "react-router-dom";
import "../styles/AbsaCaseStudy.css";

import coverImage from "../assets/images/absa/cover.png";
import moneySnapshot from "../assets/images/absa/moneysnapshot.jpg";
import simulationStudio from "../assets/images/absa/simulationlabs.jpg";
import strategyTracks from "../assets/images/absa/strategytracks.jpg";
import bnplStudio from "../assets/images/absa/bnpl.jpg";
import homeLoanStudio from "../assets/images/absa/homeloancalculator.jpg";
import vehicleStudio from "../assets/images/absa/vehiclefinance.jpg";

export default function AbsaCaseStudy() {
  return (
    <main className="absa-case-study">
      <section className="absa-hero">
        <Link to="/portfolio" className="back-link">
          ← Back to Portfolio
        </Link>

        <p className="case-label">UX/UI Design · React MVP · Financial Web App</p>

        <h1>ABSA NextGen Wealth Studio – First Five Years</h1>

        <p className="hero-summary">
          A responsive financial planning web application prototype designed to help young South African professionals
          understand their money, choose a five-year strategy, and simulate major financial decisions with confidence.
        </p>

        <div className="case-meta-grid">
          <div>
            <span>Client</span>
            <strong>ABSA Bank / Digital Arts Department</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>Product Designer & Front-End Developer</strong>
          </div>

          <div>
            <span>Project Type</span>
            <strong>UX Case Study / React MVP</strong>
          </div>

          <div>
            <span>Tools</span>
            <strong>React, Vite, CSS, React Router, Recharts</strong>
          </div>
        </div>
      </section>

      <section className="case-cover">
        <img src={coverImage} alt="ABSA NextGen Wealth Studio cover" />
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">01 / Overview</p>
          <h2>Project Overview</h2>
        </div>

        <div className="section-content">
          <p>
            Absa Next Gen Wealth Studio is a digital companion web app crafted for high-earning South African young
            professionals (ages 23-35, earning R30k-R70k per month) who are overwhelmed by early complex financial
            decisions with long-term consequences. It simplifies financial understanding by making complex information
            more digestible and assists in developing a personalised five-year wealth-building strategy that enables
            users to simulate key decisions. This document outlines the vision, scope, requirements and guidelines for a
            pilot MVP build. Its purpose is to secure approval for the prototype and a subsequent full featured React
            web application.
          </p>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">02 / Problem</p>
          <h2>The Design Challenge</h2>
        </div>

        <div className="section-content">
          <blockquote>
            “I earn well, but I don’t have a good plan. Every financial decision feels like a permanent, scary choice.”
          </blockquote>

          <p>
            The core problem was not simply lack of money. It was lack of clarity. Users needed a tool that could help
            them understand their current financial position, compare trade-offs, and make informed decisions without
            overwhelming them with financial jargon.
          </p>

          <h3>ABSA's Perspective</h3>
          <p>
            We are losing the next generation of high-earning clients to neo-banks (TymeBank, Discovery Bank) and
            fintech platforms (Easy Equities, Stash) by the time they turn 30, and our current digital tools are
            transactional, not transformational. We need to create a product that builds deep, long-term relationships
            by providing genuine financial guidance during the critical period when lifelong banking habbits are formed.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">03 / Research</p>
        <h2>User Personas & Key Insights</h2>

        <p className="section-intro">
          The PRD defined three personas that helped shape the product’s structure, features, and tone.
        </p>

        <div className="persona-grid">
          <article>
            <h3>Vuyo Ndlovu</h3>
            <p className="persona-role">24 · Junior Software Developer · Cape Town</p>
            <p>
              Vuyo earns R32,000 gross per month and is navigating his first real job, student debt, family support, and
              lifestyle pressure.
            </p>
            <strong>Design need:</strong>
            <p>Make tax, deductions, budgeting, and saving feel understandable for first-time professionals.</p>
          </article>

          <article>
            <h3>Kiara Singh</h3>
            <p className="persona-role">31 · Management Consultant · Sandton</p>
            <p>
              Kiara earns R70,000 gross per month and has strong savings, but struggles with analysis paralysis around
              investing, retirement, and offshore options.
            </p>
            <strong>Design need:</strong>
            <p>Help confident users move from passive saving to active planning.</p>
          </article>

          <article>
            <h3>Thabo Motlabi</h3>
            <p className="persona-role">28 · Data Scientist · Johannesburg</p>
            <p>
              Thabo earns R55,000 gross per month but feels trapped by vehicle finance, rent, student loans, and the
              goal of buying property.
            </p>
            <strong>Design need:</strong>
            <p>
              Help users compare big financial trade-offs such as cars, property, retirement, and lifestyle spending.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">04 / Product Strategy</p>
          <h2>Defining the Core Pillars</h2>
        </div>

        <div className="feature-list">
          <article>
            <h3>Money Snapshot</h3>
            <p>
              A dashboard that shows income, PAYE, net income, fixed costs, disposable cash, budgets, savings goals,
              assets, and liabilities.
            </p>
          </article>

          <article>
            <h3>Strategy Tracks</h3>
            <p>
              Guided five-year plans that support different goals such as property ownership, financial flexibility, and
              long-term wealth building.
            </p>
          </article>

          <article>
            <h3>Simulation Studio</h3>
            <p>Interactive calculators that help users explore trade-offs before making major financial decisions.</p>
          </article>

          <article>
            <h3>Explainery Layer</h3>
            <p>
              Tooltips, cards, sidebars, and glossary content that explain concepts like PAYE, TFSA, RA, emergency
              funds, and balloon payments.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">05 / UX Structure</p>
          <h2>Information Architecture</h2>
        </div>

        <div className="section-content">
          <p>
            The user journey was structured around a clear progression: log in, understand the current financial
            picture, choose a strategy, and use simulations to test major decisions.
          </p>

          <p>
            This created a product flow that moved users from awareness to action. The Money Snapshot gave users a
            starting point, Strategy Tracks provided direction, and the Simulation Studio helped users explore
            trade-offs.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">06 / Strategy Design</p>
        <h2>Five-Year Strategy Tracks</h2>

        <p className="section-intro">
          Strategy Tracks were designed to make long-term planning feel guided and personal, instead of abstract.
        </p>

        <div className="track-grid">
          <article>
            <h3>Legacy & Impact Path</h3>
            <p>
              Built for users focused on generational wealth, family responsibilities, insurance, wills, trusts,
              education savings, and long-term impact.
            </p>
          </article>

          <article>
            <h3>Freedom & Flexibility Path</h3>
            <p>
              Built for users who value mobility, career agility, liquid investments, low debt, and the option to travel
              or work internationally.
            </p>
          </article>

          <article>
            <h3>First Property Path</h3>
            <p>
              Built for users who want to work toward home ownership through emergency savings, credit readiness,
              deposit planning, and bond affordability.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">07 / MVP Focus</p>
          <h2>Prioritising the First Property Path</h2>
        </div>

        <div className="section-content">
          <p>
            For the MVP, the First Property Path was selected because buying property is a major financial goal for many
            young professionals and requires clear planning over several years.
          </p>

          <ul>
            <li>Year 1: Build an emergency fund and check credit score.</li>
            <li>Years 2–3: Save aggressively toward a property deposit.</li>
            <li>Year 4: Reach a 10% deposit target.</li>
            <li>Year 5: Build equity through consistent bond payments.</li>
          </ul>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">08 / Interaction Design</p>
          <h2>Simulation Studio Logic</h2>
        </div>

        <div className="section-content">
          <p>
            The Simulation Studio was designed to help users test decisions before acting. Each studio uses inputs,
            outputs, and a written verdict to explain the result in a more human way.
          </p>

          <p>
            This was important because the product needed to educate users while they used it, rather than separating
            learning from action.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">09 / Financial Tools</p>
        <h2>Simulation Studios</h2>

        <div className="decision-grid">
          <article>
            <h3>Vehicle Finance Calculator</h3>
            <p>
              Helps users understand the true cost of a vehicle by considering purchase price, deposit, repayment term,
              interest rate, balloon percentage, monthly repayment, total interest, and final balloon payment.
            </p>
          </article>

          <article>
            <h3>Home Loan Affordability Calculator</h3>
            <p>
              Helps users estimate realistic property affordability using gross income, loan term, and interest rate,
              while reflecting South African bond affordability assumptions.
            </p>
          </article>

          <article>
            <h3>BNPL vs Save First Studio</h3>
            <p>
              Compares buying immediately with saving first by showing total cost, payment time, and impact on monthly
              cash flow.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">10 / Content Design</p>
          <h2>Making Finance Easier to Understand</h2>
        </div>

        <div className="section-content">
          <p>
            The app was designed with an embedded educational layer so users could learn in context. Instead of long
            articles, content appears where it is immediately useful.
          </p>

          <p>
            Tooltips explain complex terms such as PAYE, TFSA, and RA. Educational tiles explain emergency funds,
            compound interest, and tax-free savings. Studio sidebars explain concepts such as balloon payments and BNPL
            fees.
          </p>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">11 / Visual Direction</p>
          <h2>A Calm Financial Experience</h2>
        </div>

        <div className="section-content">
          <p>
            The visual direction was based on a “digital deep-breath” philosophy. Because financial planning can feel
            stressful, the interface needed to feel calm, spacious, modern, and easy to scan.
          </p>

          <p>
            The interface direction used generous spacing, soft cards, clean hierarchy, and an ABSA-inspired palette
            with red for primary actions, orange for nudges and warnings, soft almond accents, and blue for key
            financial information.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">12 / High Fidelity Wireframes</p>
        <h2>Desktop Wireframe System</h2>

        <p className="section-intro">
          These high fidelity desktop wireframes were created to define the product’s information hierarchy, page
          structure, navigation pattern, and interaction flow before development. Because they were designed for
          desktop, each wireframe is presented large to preserve readability and layout detail.
        </p>

        <div className="wireframe-showcase">
          <figure className="wireframe-figure">
            <img src={moneySnapshot} alt="Desktop wireframe of the Money Snapshot page" />
            <figcaption>Figure 1: High fidelity desktop wireframe of the Money Snapshot page.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <img src={simulationStudio} alt="Desktop wireframe of the Simulation Lab page" />
            <figcaption>Figure 2: High fidelity desktop wireframe of the Simulation Lab overview page.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <img src={strategyTracks} alt="Desktop wireframe of the Strategy Tracks page" />
            <figcaption>Figure 3: High fidelity desktop wireframe of the Strategy Tracks page.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <img src={bnplStudio} alt="Desktop wireframe of the BNPL vs Save First studio" />
            <figcaption>Figure 4: High fidelity desktop wireframe of the BNPL vs Save First Studio.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <img src={homeLoanStudio} alt="Desktop wireframe of the Home Loan Affordability Calculator" />
            <figcaption>
              Figure 5: High fidelity desktop wireframe of the Home Loan Affordability Calculator.
            </figcaption>
          </figure>

          <figure className="wireframe-figure">
            <img src={vehicleStudio} alt="Desktop wireframe of the Vehicle Finance Calculator" />
            <figcaption>Figure 6: High fidelity desktop wireframe of the Vehicle Finance Calculator.</figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">13 / Accessibility & Responsiveness</p>
        <h2>Designing for Usability</h2>

        <div className="decision-grid">
          <article>
            <h3>Accessibility</h3>
            <p>
              The interface considered colour contrast, semantic HTML, clear focus states, relative text units, and
              status indicators that do not rely on colour alone.
            </p>
          </article>

          <article>
            <h3>Responsive Thinking</h3>
            <p>
              Although the wireframes shown are desktop layouts, the MVP was planned with responsive behaviour where
              tablet layouts simplify columns and mobile layouts become single-column.
            </p>
          </article>

          <article>
            <h3>User Feedback</h3>
            <p>
              Progress bars, nudges, insight cards, and studio verdicts were used to make the interface more explanatory
              and action-focused.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section final-prototype-section">
        <p className="section-kicker">14 / Final Prototype</p>
        <h2>Working React MVP</h2>

        <p>
          The final prototype translates the product strategy and desktop wireframes into a functional React MVP with
          routing, interactive inputs, calculator outputs, Strategy Track content, and embedded educational explainers.
        </p>

        <div className="prototype-actions">
          <a href="#" target="_blank" rel="noreferrer" className="prototype-link">
            View Final Prototype
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>

          <a href="#" target="_blank" rel="noreferrer" className="secondary-prototype-link">
            View GitHub Repository
          </a>
        </div>
      </section>
    </main>
  );
}
