import {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/CaseStudy.css";

import ImageLightbox from "../components/ImageLightbox";

import lnaPalette from "../assets/images/lna/lna-palette.png";

import coverImage from "../assets/images/covers/LNA_Web.svg";

import lnaSiteMap from "../assets/images/lna/ngengebule-attorneys-sitemap.png";
import lnaUserFlow from "../assets/images/lna/ngengebule attorneys-userflow.png";

import BackToTop from "../components/BackToTop";

export default function LnaCaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);

  function openLightbox(src, alt, caption, variant = "default") {
    setSelectedImage({
      src,
      alt,
      caption,
      variant,
    });
  }

  function closeLightbox() {
    setSelectedImage(null);
  }

  return (
    <main className="case-study-page">
      <section className="case-hero">
        <Link to="/portfolio" className="back-link">
          <i className="fa-solid fa-angles-left"></i> Back to Portfolio
        </Link>

        <p className="case-label">Website Design · Brand Presence · Front-End Development</p>

        <h1>Ngengebule Attorneys Inc Website</h1>

        <p className="hero-summary">
          A responsive legal website designed to establish Ngengebule Attorneys Inc online, communicate its services
          clearly, and position the firm as accessible, professional, trustworthy, and community-focused.
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
            <strong>React JS, JavaScript, HTML, CSS, GSAP</strong>
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

          <p>
            The website needed to communicate professionalism and legal credibility while remaining approachable for
            clients who may feel intimidated or uncertain when seeking legal support.
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
            The website needed to balance legal credibility with accessibility. LNA wanted to appeal to a wide
            audience, including local community members, individuals, families, and small to medium-sized businesses.
          </p>

          <p>
            The challenge was turning a formal business profile into a clear digital experience that communicates trust,
            explains services simply, and guides users toward making contact.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">03 / User Research</p>
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
            and approachable user experience.
          </p>

          <p>
            Instead of presenting the information as a long document, the website structure separated content into clear
            sections: Home, About, Services, and Contact.
          </p>

          <p>
            This allowed users to quickly identify the information most relevant to them while maintaining a clean and
            readable interface structure.
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

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">08 / UX Structure</p>

          <h2>Site Map & User Flow</h2>
        </div>

        <div className="section-content">
          <p>
            The website structure was designed around clarity and accessibility. Users should immediately understand who
            the firm is, what services it offers, and how to contact the firm.
          </p>

          <p>
            The information architecture separates legal content into clear categories while keeping navigation
            lightweight and approachable for first-time legal clients.
          </p>

          <div className="diagram-showcase">
            <figure className="wireframe-figure">
              <button
                type="button"
                className="wireframe-button"
                onClick={() =>
                  openLightbox(
                    lnaSiteMap,
                    "LNA site map",
                    "Figure 1: Site map showing the structure of the LNA website including Home, About, Services, and Contact.",
                  )
                }
              >
                <img src={lnaSiteMap} alt="LNA site map" />
              </button>

              <figcaption>
                Figure 1: Site map showing the structure of the LNA website including Home, About, Services, and
                Contact.
              </figcaption>
            </figure>

            <figure className="wireframe-figure">
              <button
                type="button"
                className="wireframe-button"
                onClick={() =>
                  openLightbox(
                    lnaUserFlow,
                    "LNA user flow",
                    "Figure 2: User flow showing how visitors move from discovering the firm to contacting LNA.",
                  )
                }
              >
                <img src={lnaUserFlow} alt="LNA user flow" />
              </button>

              <figcaption>
                Figure 2: User flow showing how visitors move from discovering the firm to contacting LNA.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">09 / Services</p>

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
          <p className="section-kicker">10 / Visual Identity</p>

          <h2>Colour Palette & Brand Direction</h2>
        </div>

        <div className="section-content">
          <p>
            The visual identity was designed to position LNA as trustworthy, professional, modern, and community-focused.
            The interface combines structured layouts, refined typography, soft contrast, and restrained colour usage to
            balance professionalism with accessibility.
          </p>

          <p>
            The palette avoids overly aggressive legal aesthetics and instead creates a calm, confident, and approachable
            experience for clients who may already feel stressed or uncertain when seeking legal support.
          </p>

          <figure className="wireframe-figure">
            <img src={lnaPalette} alt="LNA colour palette" />

            <figcaption>
              Figure 3: LNA colour palette showing the firm's dark foundation colours, professional blues, and soft
              support tones.
            </figcaption>
          </figure>

          <div className="decision-grid">
            <article>
              <h3>#333D47</h3>

              <p>
                A dark charcoal-blue used to communicate professionalism, authority, trust, confidentiality, and
                stability. This colour anchors the visual identity and is used across navigation and key interface
                elements.
              </p>
            </article>

            <article>
              <h3>#3960AD</h3>

              <p>
                A professional blue used for interactive elements, highlights, links, and calls to action. It reinforces
                reliability and professionalism without feeling overly corporate.
              </p>
            </article>

            <article>
              <h3>#7FA4EE</h3>

              <p>
                A lighter blue accent used to soften the interface and create balance within layouts, cards, and
                secondary UI elements.
              </p>
            </article>

            <article>
              <h3>#99B6F1</h3>

              <p>
                A soft supporting blue-grey tone used to create subtle visual layering, depth, and approachable contrast
                throughout the interface.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">11 / Typography & Accessibility</p>

        <h2>Readable, Accessible, and Professional</h2>

        <div className="decision-grid">
          <article>
            <h3>Professional Typography</h3>

            <p>
              The typography system prioritises clarity and readability. Strong heading hierarchy helps users scan legal
              services quickly while keeping the interface visually structured.
            </p>
          </article>

          <article>
            <h3>Accessible Contrast</h3>

            <p>
              The palette was selected to maintain strong readability between text and backgrounds while keeping the
              interface softer and more approachable than traditional legal websites.
            </p>
          </article>

          <article>
            <h3>Community Accessibility</h3>

            <p>
              The language, layout, and navigation structure were intentionally simplified so users without legal
              knowledge can still understand the website comfortably.
            </p>
          </article>

          <article>
            <h3>Responsive Layouts</h3>

            <p>
              The website was designed responsively so users across phones, tablets, and desktops can access information
              and contact the firm easily.
            </p>
          </article>

          <article>
            <h3>Clear Navigation</h3>

            <p>
              The navigation structure prioritises Home, About, Services, and Contact so users always understand where
              they are and how to take the next step.
            </p>
          </article>

          <article>
            <h3>Trust Through Simplicity</h3>

            <p>
              The interface avoids clutter and excessive animation to maintain credibility and focus attention on
              important legal information.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">13 / Motion & Interaction</p>

        <h2>Subtle Professional Interaction Design</h2>

        <div className="feature-list">
          <article>
            <h3>GSAP Animation</h3>

            <p>
              Subtle GSAP transitions and fade animations help guide attention through the interface without distracting
              from important legal content.
            </p>
          </article>

          <article>
            <h3>Hover States</h3>

            <p>
              Buttons, service cards, and navigation links use restrained hover interactions to improve usability while
              maintaining professionalism.
            </p>
          </article>

          <article>
            <h3>Scroll-Based Transitions</h3>

            <p>
              Content sections animate progressively into view to create a smoother reading experience and reinforce
              visual hierarchy.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">14 / Development</p>

        <h2>Front-End Implementation</h2>

        <p className="section-intro">
          The website was developed as a responsive React front-end project with reusable components, clear routing, and
          a maintainable page structure.
        </p>

        <div className="feature-list">
          <article>
            <h3>React Component Structure</h3>

            <p>
              Reusable sections were created for navigation, services, content blocks, calls to action, and page
              layouts.
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

          <article>
            <h3>SEO & Discoverability</h3>

            <p>
              Metadata, structured content hierarchy, semantic markup, and search-friendly service descriptions help
              improve discoverability online.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section final-prototype-section">
        <p className="section-kicker">15 / Final Website</p>

        <h2>Published Legal Website</h2>

        <p>
          The final website gives Ngengebule Attorneys Inc a professional online presence and presents the firm as
          trustworthy, accessible, community-aware, and easy to contact.
        </p>

        <div className="prototype-actions">
          <a
            href="https://ngengebule.co.za/"
            target="_blank"
            rel="noreferrer"
            className="prototype-link"
          >
            View Live Website
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>

          <a
            href="https://github.com/M7UNDO/LNA"
            target="_blank"
            rel="noreferrer"
            className="secondary-prototype-link"
          >
            View GitHub Repository
          </a>
        </div>
      </section>
      
      <BackToTop/>
      <ImageLightbox isOpen={!!selectedImage} image={selectedImage} onClose={closeLightbox} />
    </main>
  );
}