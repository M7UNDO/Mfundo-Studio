import {Link} from "react-router-dom";
import "../styles/CaseStudy.css";

import coverImage from "../assets/images/covers/LNA_Web.svg";

export default function LnaCaseStudy() {
  return (
    <section className="case-study-page">
      <section className="case-hero">
        <Link to="/portfolio" className="back-link">
          <i className="fa-solid fa-angles-left"></i> Back to Portfolio
        </Link>

        <p className="case-label">Website Design · Brand Presence · Front-End Development</p>

        <h1>Ngengebule Attorneys Inc Website</h1>

        <p className="hero-summary">
          A responsive legal website designed to establish Ngengebule Attorneys Inc online, communicate its services
          clearly, and position the firm as accessible, professional, and community-focused.
        </p>

        <div className="case-meta-grid">
          <div>
            <span>Client</span>
            <strong>Ngengebule Attorneys Inc</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>Web Designer & Front-End Developer</strong>
          </div>

          <div>
            <span>Project Type</span>
            <strong>Business Website / Legal Services</strong>
          </div>

          <div>
            <span>Tools</span>
            <strong>React JS, Javascript, HTML, CSS GSAP</strong>
          </div>
        </div>
      </section>

      <section className="case-cover">
        <img src={coverImage} alt="Ngengebule Attorneys website cover" />
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">01 / Overview</p>
          <h2>Project Overview</h2>
        </div>

        <div className="section-content">
          <p>
            Ngengebule Attorneys Inc, commonly referred to as LNA, is a South African law firm built around justice,
            integrity, excellence, and client-focused legal service.
          </p>

          <p>
            The goal was to design and develop a website that establishes the firm's online presence, makes its services
            easier to understand, and presents the firm as accessible to the community it serves.
          </p>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">02 / Challenge</p>
          <h2>The Design Challenge</h2>
        </div>

        <div className="section-content">
          <blockquote>
            How can a legal website feel professional and trustworthy without becoming cold, intimidating, or difficult
            to navigate?
          </blockquote>

          <p>
            The website needed to balance legal credibility with approachability. LNA wanted to appeal to a wide
            audience, including local community members, individuals, families, and small to medium-sized businesses.
          </p>

          <p>
            The key challenge was turning a formal business profile into a clear digital experience that communicates
            trust, explains services simply, and guides users toward making contact.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">03 / Users</p>
        <h2>Target User Personas</h2>

        <p className="section-intro">
          Since the website had to serve both community-based clients and professional clients, the personas were built
          around different levels of legal confidence and different reasons for seeking legal support.
        </p>

        <div className="persona-grid">
          <article>
            <h3>Local Community Member</h3>
            <p className="persona-role">Individual client · Needs accessible legal guidance</p>

            <strong>Need</strong>
            <p>
              Wants clear legal support for personal matters such as family disputes, estates, property questions, or
              labour issues.
            </p>

            <strong>Concern</strong>
            <p>
              Legal services can feel intimidating, expensive, and difficult to understand.
            </p>

            <strong>Design Response</strong>
            <p>
              Use welcoming language, visible contact details, and clear service explanations that make the firm feel
              approachable.
            </p>
          </article>

          <article>
            <h3>Small Business Owner</h3>
            <p className="persona-role">Business client · Needs practical legal support</p>

            <strong>Need</strong>
            <p>
              Requires help with contracts, collections, compliance, labour matters, commercial disputes, or
              property-related legal work.
            </p>

            <strong>Concern</strong>
            <p>
              Needs a firm that feels reliable, efficient, and capable of handling business matters professionally.
            </p>

            <strong>Design Response</strong>
            <p>
              Highlight LNA's service areas, experience, values, and ability to provide strategic legal solutions.
            </p>
          </article>

          <article>
            <h3>First-Time Legal Client</h3>
            <p className="persona-role">New client · Unsure where to start</p>

            <strong>Need</strong>
            <p>
              Wants to know whether the firm can help before making contact.
            </p>

            <strong>Concern</strong>
            <p>
              May not know which area of law their issue falls under or what the next step should be.
            </p>

            <strong>Design Response</strong>
            <p>
              Organise services into simple categories and guide users toward enquiry or consultation actions.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">04 / Brand Understanding</p>
        <h2>Understanding the Firm</h2>

        <p className="section-intro">
          The business profile became the foundation for the website strategy. It highlighted LNA's values, mission,
          legal service areas, and commitment to accessible, honest, client-focused representation.
        </p>

        <div className="decision-grid">
          <article>
            <h3>Community Accessibility</h3>
            <p>
              The site needed to show that legal services are available to individuals, families, communities, and
              businesses, not only large corporate clients.
            </p>
          </article>

          <article>
            <h3>Professional Credibility</h3>
            <p>
              The design needed to communicate trust, integrity, reliability, confidentiality, and excellence.
            </p>
          </article>

          <article>
            <h3>Clear Client Pathways</h3>
            <p>
              Visitors needed to quickly understand what the firm does and how to take the next step.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">05 / Website Goals</p>
          <h2>What the Website Needed to Achieve</h2>
        </div>

        <div className="feature-list">
          <article>
            <h3>Establish Online Presence</h3>
            <p>
              Create a professional digital home for the firm so potential clients can discover, understand, and contact
              LNA online.
            </p>
          </article>

          <article>
            <h3>Communicate Trust</h3>
            <p>
              Reflect the firm's values of justice, integrity, excellence, professionalism, respect, and client care.
            </p>
          </article>

          <article>
            <h3>Make Legal Services Understandable</h3>
            <p>
              Break down legal practice areas into readable sections so users can identify the type of support they
              need.
            </p>
          </article>

          <article>
            <h3>Appeal to a Broad Audience</h3>
            <p>
              Design a site that feels suitable for private individuals, community members, families, and small to
              medium-sized businesses.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">06 / Content Strategy</p>
          <h2>Turning a Business Profile Into a Website</h2>
        </div>

        <div className="section-content">
          <p>
            The original business profile contained detailed information about the firm, its history, values, services,
            directors, and contact details. For the website, this content needed to be reorganised into a more scannable
            user experience.
          </p>

          <p>
            Instead of presenting the information as a long document, the website structure separated content into clear
            sections: home, about, services, and contact.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">07 / Information Structure</p>
        <h2>Page Structure</h2>

        <div className="track-grid">
          <article>
            <h3>Home</h3>
            <p>
              Introduces the firm, communicates the main value proposition, and guides users toward services or contact.
            </p>
          </article>

          <article>
            <h3>About</h3>
            <p>
              Presents the firm's background, mission, vision, values, and commitment to ethical legal service.
            </p>
          </article>

          <article>
            <h3>Services</h3>
            <p>
              Groups the firm's legal services into clear practice areas so visitors can find relevant support quickly.
            </p>
          </article>
          <article>
            <h3>Contact</h3>
            <p>
              Provides contact details and a direct route for potential clients to make an enquiry.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">08 / Services</p>
        <h2>Legal Services Presented Clearly</h2>

        <p className="section-intro">
          The service structure was designed to help users quickly identify the legal area that matches their need.
        </p>

        <div className="decision-grid">
          <article>
            <h3>Civil Litigation</h3>
            <p>
              Commercial, Magistrates Court, and High Court litigation, including contractual, delictual, and enrichment
              disputes.
            </p>
          </article>

          <article>
            <h3>Labour Law & ADR</h3>
            <p>
              Employment law support, CCMA matters, dispute resolution, retrenchments, contracts, policies, and
              compliance.
            </p>
          </article>

          <article>
            <h3>Family Law</h3>
            <p>
              Mediation-focused support for family disputes, aiming to resolve matters efficiently and safely.
            </p>
          </article>

          <article>
            <h3>Corporate Collections</h3>
            <p>
              Debt collection frameworks, tracing, due diligence, and litigation processes for outstanding debts.
            </p>
          </article>

          <article>
            <h3>Corporate & Commercial Law</h3>
            <p>
              Commercial law, corporate law, insolvency law, property law, trusts, and due diligence investigations.
            </p>
          </article>

          <article>
            <h3>Trusts, Estates & Property</h3>
            <p>
              Estate planning, wills, deceased estates, curatorship applications, property transfers, leases, and
              conveyancing.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">09 / Visual Direction</p>
          <h2>Professional, Accessible, and Modern</h2>
        </div>

        <div className="section-content">
          <p>
            The visual direction needed to feel refined and trustworthy, but not distant. The design approach focused on
            clean spacing, structured layouts, strong typography, and a polished professional tone.
          </p>

          <p>
            The interface avoids unnecessary complexity so users can quickly understand the firm, explore its services,
            and make contact. This supports LNA's wider goal of being accessible to the community it serves.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">10 / UX Decisions</p>
        <h2>Key Design Decisions</h2>

        <div className="decision-grid">
          <article>
            <h3>Clear Calls to Action</h3>
            <p>
              Contact-focused actions were placed throughout the site so users always have a clear next step.
            </p>
          </article>

          <article>
            <h3>Readable Service Cards</h3>
            <p>
              Legal services were separated into card-based sections to make complex service offerings easier to scan.
            </p>
          </article>

          <article>
            <h3>Trust-Building Content</h3>
            <p>
              The firm's values, professional background, services, and legal team information were used to support confidence.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">11 / Development</p>
        <h2>Front-End Implementation</h2>

        <p className="section-intro">
          The website was developed as a responsive React front-end project with reusable components, clear routing, and
          a maintainable page structure.
        </p>

        <div className="feature-list">
          <article>
            <h3>React Component Structure</h3>
            <p>
              Reusable sections were created for navigation, services, content blocks, calls to action, and page layout.
            </p>
          </article>

          <article>
            <h3>Responsive Layout</h3>
            <p>
              The design was structured to work across desktop, tablet, and mobile screens.
            </p>
          </article>

          <article>
            <h3>Contact Flow</h3>
            <p>
              Contact information and enquiry pathways were prioritised to help users move from browsing to reaching
              out.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section final-prototype-section">
        <p className="section-kicker">12 / Final Website</p>
        <h2>Published Legal Website</h2>

        <p>
          The final website gives Ngengebule Attorneys Inc a professional online presence and presents the firm as
          trustworthy, accessible, community-aware, and easy to contact.
        </p>

        <div className="prototype-actions">
          <a href="https://ngengebule.co.za/" target="_blank" rel="noreferrer" className="prototype-link">
            View Live Website
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>

          <a href="https://github.com/M7UNDO/LNA" target="_blank" rel="noreferrer" className="secondary-prototype-link">
            View GitHub Repository
          </a>
        </div>
      </section>
    </section>
  );
}