// src/pages/NorthstarCaseStudy.jsx

import {Link} from "react-router-dom";
import "../styles/CaseStudy.css";

import northstarCover from "../assets/images/covers/northstar_shop.svg";

export default function NorthstarCaseStudy() {
  return (
    <main className="case-study-page">
      <section className="case-hero">
        <Link to="/portfolio" className="back-link">
          <i className="fa-solid fa-angles-left"></i> Back to Portfolio
        </Link>

        <p className="case-label">E-Commerce Design · API Integration · Front-End Development</p>

        <h1>Northstar Studios Shop</h1>

        <p className="hero-summary">
          A responsive e-commerce website built with HTML, CSS, JavaScript, and GSAP. The project uses dynamic product
          loading, filtering, cart management, favourites, and checkout validation to create a smooth online shopping
          experience.
        </p>

        <div className="case-meta-grid">
          <div>
            <span>Client</span>
            <strong>Northstar Studios</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>UX/UI Designer & Front-End Developer</strong>
          </div>

          <div>
            <span>Project Type</span>
            <strong>E-Commerce Website / JavaScript Project</strong>
          </div>

          <div>
            <span>Tools</span>
            <strong>HTML, CSS, JavaScript, GSAP, Fake Store API</strong>
          </div>
        </div>
      </section>

      <section className="case-cover">
        <img src={northstarCover} alt="Northstar Studios Shop cover" />
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">01 / Overview</p>
          <h2>Project Overview</h2>
        </div>

        <div className="section-content">
          <p>
            Northstar Studios Shop is a responsive e-commerce website designed around convenience, fast browsing, and
            clear product discovery.
          </p>

          <p>
            The project combines vanilla JavaScript functionality with API-driven product rendering, cart persistence,
            favourites, filtering, search, checkout validation, and GSAP animations.
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
            How can an e-commerce site feel visually modern and interactive while still remaining fast, accessible, and
            easy to navigate?
          </blockquote>

          <p>
            The challenge was to balance visual identity and functionality. The interface needed to feel engaging while
            still supporting core shopping actions such as browsing, searching, filtering, adding items to cart, saving
            favourites, and checking out.
          </p>

          <p>
            Since the project was built with HTML, CSS, and JavaScript, the functionality had to be structured carefully
            to keep the code manageable, reusable, and responsive across devices.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">03 / Users</p>
        <h2>User Personas & Research Insights</h2>

        <p className="section-intro">
          The target audience focused on young adults aged 18–35 who are digitally comfortable, shop online, and value
          convenience, speed, product variety, and secure transactions.
        </p>

        <div className="persona-grid">
          <article>
            <h3>Siyamthanda Ndlovu</h3>
            <p className="persona-role">23 · University Student · Mobile-first shopper</p>

            <strong>Goals</strong>
            <p>Shop for trendy, affordable products online with a smooth checkout process.</p>

            <strong>Frustrations</strong>
            <p>Complicated navigation, poor mobile responsiveness, and hidden costs at checkout.</p>

            <strong>Design Response</strong>
            <p>
              Prioritise responsive layouts, simple navigation, clear product browsing, and transparent shopping flows.
            </p>
          </article>

          <article>
            <h3>Montel Scott</h3>
            <p className="persona-role">30 · Business Analyst · Desktop shopper</p>

            <strong>Goals</strong>
            <p>Purchase high-quality items efficiently using search and filtering tools.</p>

            <strong>Frustrations</strong>
            <p>Slow loading times, lack of product details, and unreliable shopping experiences.</p>

            <strong>Design Response</strong>
            <p>
              Use clear product cards, filtering systems, structured layouts, and performance-conscious JavaScript.
            </p>
          </article>

          <article>
            <h3>Amahle Dlamini</h3>
            <p className="persona-role">32 · Scrum Master · Young parent</p>

            <strong>Goals</strong>
            <p>Shop for household and family products quickly, especially on mobile.</p>

            <strong>Frustrations</strong>
            <p>Complicated checkout processes, poor mobile usability, and unclear product information.</p>

            <strong>Design Response</strong>
            <p>
              Support mobile-first browsing, easy cart revisiting, clear checkout feedback, and responsive layouts.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">04 / User Stories</p>
        <h2>Defining Core User Needs</h2>

        <div className="decision-grid">
          <article>
            <h3>Responsive Shopping</h3>
            <p>
              As a mobile user, I want the site to be responsive and easy to navigate so I can shop conveniently
              anywhere.
            </p>
          </article>

          <article>
            <h3>Filtering & Search</h3>
            <p>
              As a shopper, I want to filter products by price, category, and rating so I can quickly find items that
              meet my needs.
            </p>
          </article>

          <article>
            <h3>Checkout Confidence</h3>
            <p>
              As a customer, I want real-time validation at checkout so I can fix mistakes immediately and feel confident
              about my purchase.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">05 / Information Architecture</p>
          <h2>Structuring the Shopping Experience</h2>
        </div>

        <div className="section-content">
          <p>
            The site structure was designed around the main shopping journey: browse products, open a product page, add
            items to cart, proceed to checkout, choose a payment method, and reach order confirmation.
          </p>

          <p>
            Additional pathways such as favourites, categories, clothing, jewellery, electronics, and mobile accessories
            were included to support product discovery and repeated browsing.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">06 / Product Experience</p>
        <h2>Core Shopping Features</h2>

        <div className="feature-list">
          <article>
            <h3>Dynamic Product Loading</h3>
            <p>Products are rendered dynamically from the Fake Store API and custom product data.</p>
          </article>

          <article>
            <h3>Filtering & Search</h3>
            <p>Users can filter and search products to narrow down the catalogue quickly.</p>
          </article>

          <article>
            <h3>Cart & Favourites</h3>
            <p>Cart and favourite items are saved with localStorage so user choices persist after refresh.</p>
          </article>

          <article>
            <h3>Checkout Validation</h3>
            <p>Real-time form validation helps users correct mistakes before submitting checkout details.</p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">07 / Visual Direction</p>
        <h2>Brand Identity & Interface Design</h2>

        <p className="section-intro">
          The visual design used a purple-driven brand palette, clean typography, outlined icons, and structured product
          layouts to create a sleek online store experience.
        </p>

        <div className="decision-grid">
          <article>
            <h3>Primary Palette</h3>
            <p>
              A muted dark purple was used to communicate trust, sophistication, and consistency across the website.
            </p>
          </article>

          <article>
            <h3>Accent Colour</h3>
            <p>
              A vibrant purple accent was used for interactive moments such as buttons, hover states, and calls to
              action.
            </p>
          </article>

          <article>
            <h3>Typography System</h3>
            <p>
              Neue Montreal was used for headings, while Satoshi was used for body text to support readability and a
              modern visual identity.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">08 / Accessibility & Responsiveness</p>
        <h2>Designing for Usability</h2>

        <div className="decision-grid">
          <article>
            <h3>Mobile-First Design</h3>
            <p>
              The site was designed mobile-first so core shopping actions remain usable on smaller screens before
              scaling up to larger layouts.
            </p>
          </article>

          <article>
            <h3>Semantic HTML</h3>
            <p>
              Semantic elements, clear headings, labelled forms, descriptive image text, and accessible buttons were
              considered throughout the build.
            </p>
          </article>

          <article>
            <h3>Responsive Layouts</h3>
            <p>
              Layouts were planned across small phones, larger phones, tablets, and desktop screens using scalable CSS
              units and media queries.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">09 / Motion & Interactivity</p>
        <h2>Using GSAP for Engagement</h2>

        <div className="feature-list">
          <article>
            <h3>Hero Animations</h3>
            <p>
              GSAP timeline animations were used to create polished page entrances and direct attention to key content.
            </p>
          </article>

          <article>
            <h3>Scroll-Based Animation</h3>
            <p>
              Product cards and content blocks could animate into view as users scroll, adding rhythm to the shopping
              experience.
            </p>
          </article>

          <article>
            <h3>Micro-Interactions</h3>
            <p>
              Buttons, icons, dropdowns, and cart interactions use subtle motion to make the interface feel more
              responsive.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">10 / Technical Implementation</p>
          <h2>Front-End Architecture</h2>
        </div>

        <div className="section-content">
          <p>
            The website was built using plain HTML, CSS, and JavaScript, with logic separated into focused areas such as
            product rendering, cart functionality, favourites, form validation, and shared navigation.
          </p>

          <p>
            Template literals were used to dynamically generate product cards, navigation items, and cart contents. This
            reduced repeated markup and made the interface easier to update.
          </p>

          <p>
            localStorage was used to persist cart and favourite items, while event delegation helped manage interactions
            on dynamically generated product elements.
          </p>
        </div>
      </section>

      <section className="case-section final-prototype-section">
        <p className="section-kicker">11 / Final Prototype</p>
        <h2>Interactive Shopping Experience</h2>

        <p>
          The final website combines plain JavaScript API integration, responsive layouts, GSAP animation, cart logic,
          favourites, filtering, and checkout validation into a functional e-commerce experience.
        </p>

        <div className="prototype-actions">
          <a
            href="https://m7undo.github.io/Shop-Northstar-Studios/"
            target="_blank"
            rel="noreferrer"
            className="prototype-link"
          >
            View Live Website
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>

          <a
            href="https://github.com/M7UNDO/Shop-Northstar-Studios"
            target="_blank"
            rel="noreferrer"
            className="secondary-prototype-link"
          >
            View GitHub Repository
          </a>
        </div>
      </section>
    </main>
  );
}