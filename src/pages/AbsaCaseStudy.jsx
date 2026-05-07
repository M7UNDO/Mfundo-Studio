// src/pages/AbsaCaseStudy.jsx

import {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/AbsaCaseStudy.css";

import ImageLightbox from "../components/ImageLightbox";
import coverImage from "../assets/images/absa/cover.png";
import informationArchitecture from "../assets/images/absa/ABSA-sitemap.png";
import absaPallete from "../assets/images/absa/absa-palette.png";
import moneySnapshot from "../assets/images/absa/moneysnapshot.jpg";
import loginPage from "../assets/images/absa/login.png";
import signUpPage from "../assets/images/absa/signup.png";
import simulationStudio from "../assets/images/absa/simulationlabs.jpg";
import strategyTracks from "../assets/images/absa/strategytracks.jpg";
import bnplStudio from "../assets/images/absa/bnpl.jpg";
import homeLoanStudio from "../assets/images/absa/homeloancalculator.jpg";
import vehicleStudio from "../assets/images/absa/vehiclefinance.jpg";

export default function AbsaCaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);

  function openLightbox(src, alt, caption) {
    setSelectedImage({
      src,
      alt,
      caption,
    });
  }

  function closeLightbox() {
    setSelectedImage(null);
  }
  return (
    <section className="absa-case-study">
      <section className="absa-hero">
        <Link to="/portfolio" className="back-link">
          <i class="fa-solid fa-angles-left"></i> Back to Portfolio
        </Link>

        <p className="case-label">UX/UI Design · React MVP · Financial Web App</p>

        <h1>ABSA NextGen Wealth Studio - First Five Years</h1>

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
            <strong>React JS, Javascript, HTML, CSS, GSAP, Recharts, Supabase Auth</strong>
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
            professionals between the ages of 23 and 35, earning between R30,000 and R70,000 per month, who are
            overwhelmed by early complex financial decisions with long-term consequences.
          </p>

          <p>
            The product simplifies financial understanding by making complex information more digestible and assists
            users in developing a personalised five-year wealth-building strategy. It allows users to simulate key
            financial decisions before committing to them.
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
            “I earn well, but I don't have a good plan. Every financial decision feels like a permanent, scary choice.”
          </blockquote>

          <p>
            The core problem was not simply lack of money. It was lack of clarity. Users needed a tool that could help
            them understand their current financial position, compare trade-offs, and make informed decisions without
            overwhelming them with financial jargon.
          </p>

          <h3>ABSA's Perspective</h3>
          <p>
            Absa is losing the next generation of high-earning clients to neo-banks and fintech platforms. The challenge
            was to move beyond transactional banking and create a product that builds long-term trust through genuine
            financial guidance during the years when lifelong banking habits are formed.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">03 / Research</p>
        <h2>User Personas & Key Insights</h2>

        <p className="section-intro">
          The PRD defined three target personas. Each persona represents a different relationship with money: the new
          earner, the cautious high saver, and the ambitious professional balancing debt, lifestyle, and property goals.
        </p>

        <div className="persona-grid">
          <article>
            <h3>Vuyo Ndlovu</h3>
            <p className="persona-role">24 · Junior Software Developer · Cape Town CBD · R32,000 gross p/m</p>

            <strong>Financial Snapshot</strong>
            <p>
              NSFAS debt, a small credit card balance, limited savings, and monthly expenses that include rent,
              transport, lifestyle spending, and supporting family.
            </p>

            <strong>Lifestyle & Aspirations</strong>
            <p>
              Proud of landing his first real job and wants to enjoy the lifestyle that comes with it, while hoping to
              travel overseas within the next few years.
            </p>

            <strong>Financial Mistakes</strong>
            <p>
              Overspent early salaries on lifestyle purchases and struggles to understand taxes, PAYE deductions, and
              budgeting.
            </p>
          </article>

          <article>
            <h3>Kiara Singh</h3>
            <p className="persona-role">31 · Management Consultant · Midrand / Sandton · R70,000 gross p/m</p>

            <strong>Financial Snapshot</strong>
            <p>
              Debt-free with strong monthly savings and a large cash reserve, but no formal investments despite earning
              well.
            </p>

            <strong>Lifestyle & Aspirations</strong>
            <p>
              Wants financial independence, potential international mobility, and exposure to global investments while
              maintaining flexibility in her lifestyle and career.
            </p>

            <strong>Financial Mistakes</strong>
            <p>
              Experiences analysis paralysis and keeps most of her wealth in cash due to fear of making the wrong
              investment decision.
            </p>
          </article>

          <article>
            <h3>Thabo Motlabi</h3>
            <p className="persona-role">28 · Data Scientist · Sandton, Johannesburg · R55,000 gross p/m</p>

            <strong>Financial Snapshot</strong>
            <p>
              Balances vehicle finance, student loans, rent, and lifestyle expenses while trying to build savings and
              long-term investments.
            </p>

            <strong>Lifestyle & Aspirations</strong>
            <p>
              Wants to buy property within the next few years and begin offshore investing, but feels pressure to
              maintain an expensive lifestyle.
            </p>

            <strong>Financial Mistakes</strong>
            <p>
              Feels trapped by a long-term vehicle finance deal and is overwhelmed by balancing retirement planning,
              property goals, and debt reduction.
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
              assets, liabilities, and milestone progress.
            </p>
          </article>

          <article>
            <h3>Strategy Tracks</h3>
            <p>
              Guided five-year plans that support goals such as property ownership, financial flexibility, long-term
              wealth building, and legacy planning.
            </p>
          </article>

          <article>
            <h3>Simulation Studio</h3>
            <p>
              Interactive calculators that help users explore trade-offs before making major decisions around vehicles,
              property, and buying behaviour.
            </p>
          </article>

          <article>
            <h3>Content & Explainery Layer</h3>
            <p>
              Tooltips, educational cards, studio sidebars, and glossary content that explain terms such as PAYE, TFSA,
              RA, emergency funds, balloon payments, and BNPL fees.
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
            The user journey was structured around a clear progression: sign up or log in, understand the current
            financial picture, choose a strategy, and use simulations to test major financial decisions.
          </p>

          <p>
            This created a product flow that moved users from awareness to action. The Money Snapshot acts as the
            post-login landing page, Strategy Tracks provide long-term direction, and the Simulation Studio supports
            decision-making through calculators and verdicts.
          </p>

          <figure className="wireframe-figure">
            <button
              type="button"
              className="wireframe-button"
              onClick={() =>
                openLightbox(
                  informationArchitecture,
                  "Information architecture sitemap for ABSA NextGen Wealth Studio",
                  "Figure 1: Information architecture diagram showing the flow from Login / Sign Up to Money Snapshot, Strategy Tracks, Simulation Labs, individual strategy paths, and calculator studios.",
                )
              }
            >
              <img
                src={informationArchitecture}
                alt="Information architecture sitemap for ABSA NextGen Wealth Studio"
              />
            </button>

            <figcaption>
              Figure 1: Information architecture diagram showing the flow from Login / Sign Up to Money Snapshot,
              Strategy Tracks, Simulation Labs, individual strategy paths, and calculator studios.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">06 / Strategy Design</p>
        <h2>Five-Year Strategy Tracks</h2>

        <p className="section-intro">
          Strategy Tracks were designed to make long-term planning feel guided and personal instead of abstract.
        </p>

        <div className="track-grid">
          <article>
            <h3>Legacy & Impact Path</h3>
            <p>
              Built for users focused on generational wealth, family responsibilities, insurance, wills, trusts,
              education savings, sustainable giving, and long-term impact.
            </p>
          </article>

          <article>
            <h3>Freedom & Flexibility Path</h3>
            <p>
              Built for users who value mobility, career agility, liquid investments, low debt, travel, and the option
              to work internationally.
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
            <li>Year 1: Save an emergency fund and check credit score.</li>
            <li>Years 2-3: Save aggressively toward a property deposit.</li>
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

          <figure className="wireframe-figure">
            <img src={absaPallete} alt="ABSA NextGen Wealth Studio colour palette" />
            <figcaption>
              Figure 2: Visual direction and colour palette using Flag Red, Dark Orange, Almond Silk, and Royal Azure.
            </figcaption>
          </figure>
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
            <button
              type="button"
              className="wireframe-button"
              onClick={() =>
                openLightbox(
                  signUpPage,
                  "High fidelity desktop wireframe of the Sign Up page",
                  "Figure 3: High fidelity desktop wireframe of the Sign Up page.",
                )
              }
            >
              <img src={signUpPage} alt="High fidelity desktop wireframe of the Sign Up page" />
            </button>

            <figcaption>Figure 3: High fidelity desktop wireframe of the Sign Up page.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button
              type="button"
              className="wireframe-button"
              onClick={() =>
                openLightbox(
                  loginPage,
                  "High fidelity desktop wireframe of the Login page",
                  "Figure 4: High fidelity desktop wireframe of the Login page.",
                )
              }
            >
              <img src={loginPage} alt="High fidelity desktop wireframe of the Login page" />
            </button>

            <figcaption>Figure 4: High fidelity desktop wireframe of the Login page.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button
              type="button"
              className="wireframe-button"
              onClick={() =>
                openLightbox(
                  moneySnapshot,
                  "Desktop wireframe of the Money Snapshot page",
                  "Figure 5: High fidelity desktop wireframe of the Money Snapshot page.",
                )
              }
            >
              <img src={moneySnapshot} alt="Desktop wireframe of the Money Snapshot page" />
            </button>

            <figcaption>Figure 5: High fidelity desktop wireframe of the Money Snapshot page.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button
              type="button"
              className="wireframe-button"
              onClick={() =>
                openLightbox(
                  simulationStudio,
                  "Desktop wireframe of the Simulation Lab page",
                  "Figure 6: High fidelity desktop wireframe of the Simulation Lab overview page.",
                )
              }
            >
              <img src={simulationStudio} alt="Desktop wireframe of the Simulation Lab page" />
            </button>

            <figcaption>Figure 6: High fidelity desktop wireframe of the Simulation Lab overview page.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button
              type="button"
              className="wireframe-button"
              onClick={() =>
                openLightbox(
                  strategyTracks,
                  "Desktop wireframe of the Strategy Tracks page",
                  "Figure 7: High fidelity desktop wireframe of the Strategy Tracks page.",
                )
              }
            >
              <img src={strategyTracks} alt="Desktop wireframe of the Strategy Tracks page" />
            </button>

            <figcaption>Figure 7: High fidelity desktop wireframe of the Strategy Tracks page.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button
              type="button"
              className="wireframe-button"
              onClick={() =>
                openLightbox(
                  bnplStudio,
                  "Desktop wireframe of the BNPL vs Save First studio",
                  "Figure 8: High fidelity desktop wireframe of the BNPL vs Save First Studio.",
                )
              }
            >
              <img src={bnplStudio} alt="Desktop wireframe of the BNPL vs Save First studio" />
            </button>

            <figcaption>Figure 8: High fidelity desktop wireframe of the BNPL vs Save First Studio.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button
              type="button"
              className="wireframe-button"
              onClick={() =>
                openLightbox(
                  homeLoanStudio,
                  "Desktop wireframe of the Home Loan Affordability Calculator",
                  "Figure 9: High fidelity desktop wireframe of the Home Loan Affordability Calculator.",
                )
              }
            >
              <img src={homeLoanStudio} alt="Desktop wireframe of the Home Loan Affordability Calculator" />
            </button>

            <figcaption>
              Figure 9: High fidelity desktop wireframe of the Home Loan Affordability Calculator.
            </figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button
              type="button"
              className="wireframe-button"
              onClick={() =>
                openLightbox(
                  vehicleStudio,
                  "Desktop wireframe of the Vehicle Finance Calculator",
                  "Figure 10: High fidelity desktop wireframe of the Vehicle Finance Calculator.",
                )
              }
            >
              <img src={vehicleStudio} alt="Desktop wireframe of the Vehicle Finance Calculator" />
            </button>

            <figcaption>Figure 10: High fidelity desktop wireframe of the Vehicle Finance Calculator.</figcaption>
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
          <a
            href="https://m7undo.github.io/absa-nextgen-wealth/"
            target="_blank"
            rel="noreferrer"
            className="prototype-link"
          >
            View Final Prototype
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>

          <a
            href="https://github.com/M7UNDO/absa-nextgen-wealth"
            target="_blank"
            rel="noreferrer"
            className="secondary-prototype-link"
          >
            View GitHub Repository
          </a>
        </div>
      </section>
      <ImageLightbox isOpen={!!selectedImage} image={selectedImage} onClose={closeLightbox} />
    </section>
  );
}
