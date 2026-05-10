import {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/CaseStudy.css";

import ImageLightbox from "../components/ImageLightbox";

import northstarCover from "../assets/images/covers/northstar_shop.svg";
import northstarPalette from "../assets/images/northstar/northstar-palette.png";

import homePage from "../assets/images/northstar/home-page.png";
import productPage from "../assets/images/northstar/product-page.png";
import productDetailPage from "../assets/images/northstar/product-detail-page.png";
import jewelleryPage from "../assets/images/northstar/jewellery-page.png";
import electronicPage from "../assets/images/northstar/electronics-page.png";
import cartPage from "../assets/images/northstar/cart-page.png";
import favouritePage from "../assets/images/northstar/favourites-page.png";
import mobileMenu from "../assets/images/northstar/mobile-menu.png";
import loginPage from "../assets/images/northstar/login-page.png";
import siteMap from "../assets/images/northstar/site-map.png";
import userFlow from "../assets/images/northstar/user-flow.png";

export default function NorthstarCaseStudy() {
  const [selectedImage, setSelectedImage] = useState(null);

  function openLightbox(src, alt, caption, variant = "default") {
    setSelectedImage({src, alt, caption, variant});
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

        <p className="case-label">E-Commerce Design · API Integration · Front-End Development</p>

        <h1>Northstar Studios Shop</h1>

        <p className="hero-summary">
          A responsive e-commerce website designed for a startup brand, focused on product discovery, online shopping,
          cart management, favourites, secure checkout, responsive design, accessibility, and polished motion through
          GSAP.
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
            <strong>HTML, CSS, JavaScript, GSAP, Fake Store API, GitHub Pages</strong>
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
            Northstar Studios Shop is a responsive e-commerce website created to support the goals of a startup:
            selling products, attracting customers, and showcasing the business's brand identity through a clean,
            trustworthy, and modern online shopping experience.
          </p>

          <p>
            The project combines semantic HTML, responsive CSS, vanilla JavaScript, API-driven product rendering,
            cart and favourites persistence, filtering, search, checkout validation, and GSAP animation.
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
            How can an e-commerce site feel visually modern, trustworthy, and interactive while still remaining fast,
            accessible, responsive, and easy to navigate?
          </blockquote>

          <p>
            The challenge was to balance brand personality with functionality. The interface needed to support browsing,
            searching, filtering, adding items to cart, saving favourites, checking out, and receiving clear feedback
            without making the experience feel cluttered or difficult to use.
          </p>

          <p>
            Because the website was built with HTML, CSS, and JavaScript, the structure also needed to remain modular,
            reusable, and maintainable across multiple pages.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">03 / User Research</p>
        <h2>Target Audience & User Groups</h2>

        <p className="section-intro">
          The primary target audience is young adults aged 18-35. This group is digitally savvy, comfortable shopping
          online, and values convenience, speed, variety, and secure transactions.
        </p>

        <div className="decision-grid">
          <article>
            <h3>Primary User</h3>
            <p>
              The startup owner, who needs the website to sell products, attract customers, and communicate the
              business's brand identity clearly.
            </p>
          </article>

          <article>
            <h3>Secondary Users</h3>
            <p>
              Online shoppers who browse products, search and filter items, add products to cart or favourites, and make
              purchases through the site.
            </p>
          </article>

          <article>
            <h3>Tertiary Users</h3>
            <p>
              Lecturers and examiners evaluating the project, as well as future admin staff and courier services who
              depend on accurate order and customer details.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">04 / Personas</p>
        <h2>User Personas & Research Insights</h2>

        <div className="persona-grid">
          <article>
            <h3>Siyamthanda Ndlovu</h3>
            <p className="persona-role">23 · University Student · Mobile-first shopper</p>

            <strong>Goals</strong>
            <p>Shop for trendy, affordable products online with a smooth checkout process.</p>

            <strong>Frustrations</strong>
            <p>Complicated navigation, cluttered interfaces, poor mobile responsiveness, and hidden checkout costs.</p>

            <strong>Key Behaviours</strong>
            <p>
              Browses products during free time, is influenced by visuals and recommendations, and prefers secure
              payment experiences.
            </p>
          </article>

          <article>
            <h3>Montel Scott</h3>
            <p className="persona-role">30 · Business Analyst · Desktop shopper</p>

            <strong>Goals</strong>
            <p>Purchase high-quality items efficiently using search and filter functionality.</p>

            <strong>Frustrations</strong>
            <p>Slow loading times, lack of product details and reviews, and fluctuating cart prices.</p>

            <strong>Key Behaviours</strong>
            <p>
              Shops mostly on desktop after work, compares products across websites, and looks for trusted,
              professional-looking websites.
            </p>
          </article>

          <article>
            <h3>Amahle Dlamini</h3>
            <p className="persona-role">32 · Scrum Master · Young parent</p>

            <strong>Goals</strong>
            <p>Shop for household and family products quickly with clear product details and secure payments.</p>

            <strong>Frustrations</strong>
            <p>Complicated checkout processes, lack of trustworthy reviews, and poor mobile usability.</p>

            <strong>Key Behaviours</strong>
            <p>
              Shops mostly on mobile, adds items to cart to revisit later, values responsive design, and wants easy
              reordering.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">05 / User Stories</p>
        <h2>Defining Core User Needs</h2>

        <div className="decision-grid">
          <article>
            <h3>Responsive Shopping</h3>
            <p>
              As a mobile user, I want the site to be responsive and easy to navigate on my phone so I can shop
              conveniently anywhere.
            </p>
          </article>

          <article>
            <h3>Returning User Support</h3>
            <p>
              As a returning user, I want to search for and view my recently viewed items so I do not have to restart my
              shopping journey.
            </p>
          </article>

          <article>
            <h3>Checkout Confidence</h3>
            <p>
              As a customer, I want real-time validation at checkout so I can fix mistakes immediately and feel confident
              about my purchase.
            </p>
          </article>

          <article>
            <h3>Filtering & Search</h3>
            <p>
              As a shopper, I want to filter products by price, category, and rating so I can quickly find items that
              meet my needs.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">06 / UX Structure</p>
          <h2>Site Map & User Flow</h2>
        </div>

        <div className="section-content">
          <p>
            The site map defines the main structure of the store: Home, Shop, Categories, Clothing, Jewellery,
            Electronics, Favourites, Cart, Checkout, Payment Method, and Order Confirmation.
          </p>

          <p>
            The user flow focuses on the browsing-to-checkout journey, showing how users move from product discovery to
            the product page, cart, checkout, payment page, and order confirmation.
          </p>

          <div className="diagram-showcase">
            <figure className="wireframe-figure">
              <button
                type="button"
                className="wireframe-button"
                onClick={() =>
                  openLightbox(
                    siteMap,
                    "Northstar Studios Shop site map",
                    "Figure 1: Site map showing the page structure from Home, Shop, Categories, Favourites and Cart through to Checkout, Payment Method and Order Confirmation.",
                  )
                }
              >
                <img src={siteMap} alt="Northstar Studios Shop site map" />
              </button>

              <figcaption>
                Figure 1: Site map showing the page structure from Home, Shop, Categories, Favourites and Cart through
                to Checkout, Payment Method and Order Confirmation.
              </figcaption>
            </figure>

            <figure className="wireframe-figure">
              <button
                type="button"
                className="wireframe-button"
                onClick={() =>
                  openLightbox(
                    userFlow,
                    "Northstar Studios Shop user flow",
                    "Figure 2: User flow showing a shopper's journey from browsing products to placing an order.",
                  )
                }
              >
                <img src={userFlow} alt="Northstar Studios Shop user flow" />
              </button>

              <figcaption>
                Figure 2: User flow showing a shopper's journey from browsing products to placing an order.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">07 / Visual Direction</p>
          <h2>Colour Palette & Brand Identity</h2>
        </div>

        <div className="section-content">
          <p>
            The colour palette was designed to balance brand personality, functionality, and accessibility. Each colour
            has a clear role within the visual identity and user interface.
          </p>

          <figure className="wireframe-figure">
            <img src={northstarPalette} alt="Northstar Studios Shop colour palette" />
            <figcaption>
              Figure 3: Northstar Studios Shop colour palette using primary purple, accent purple, off-white background,
              and dark grey typography.
            </figcaption>
          </figure>

          <div className="decision-grid">
            <article>
              <h3>Primary Colour</h3>
              <p>
                #393363 is a muted dark purple chosen to represent trust, sophistication, and brand stability. It anchors
                the website identity and is used for navigation bars and key UI components.
              </p>
            </article>

            <article>
              <h3>Accent Colour</h3>
              <p>
                #5e17eb is a vibrant purple used for CTA buttons, hover states, and interactive highlights such as Add
                to Cart and Checkout actions.
              </p>
            </article>

            <article>
              <h3>Background Colour</h3>
              <p>
                #f6f6f6 is a soft off-white used to keep the interface clean and minimal while allowing product imagery
                and text to remain the main focus.
              </p>
            </article>

            <article>
              <h3>Typography Colour</h3>
              <p>
                #2c2c2c is a dark grey chosen instead of pure black to reduce eye strain and create a softer reading
                experience.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">08 / Accessibility Contrast</p>
        <h2>Readable & Inclusive Colour Use</h2>

        <div className="decision-grid">
          <article>
            <h3>Text on Background</h3>
            <p>
              The typography colour #2c2c2c against the background colour #f6f6f6 achieves a contrast ratio of 12.92:1,
              exceeding WCAG 2.1 AAA requirements.
            </p>
          </article>

          <article>
            <h3>Inverted Text</h3>
            <p>
              The background colour #f6f6f6 used as text on the primary colour #393363 achieves a contrast ratio of
              10.63:1, also exceeding WCAG 2.1 AAA requirements.
            </p>
          </article>

          <article>
            <h3>Accessibility Role</h3>
            <p>
              The palette strengthens the brand identity while ensuring that the interface remains legible, inclusive,
              and user-friendly across devices.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">09 / Typography & Iconography</p>
        <h2>Interface Style System</h2>

        <div className="decision-grid">
          <article>
            <h3>Neue Montreal</h3>
            <p>
              Neue Montreal was used for headings and titles because of its bold presence and geometric precision. It
              creates hierarchy for product names, section titles, and calls to action.
            </p>
          </article>

          <article>
            <h3>Satoshi</h3>
            <p>
              Satoshi was selected for body text because of its clean letterforms and readability at smaller sizes,
              making product descriptions, reviews, and checkout instructions easier to read.
            </p>
          </article>

          <article>
            <h3>Outlined Icons</h3>
            <p>
              The website uses clean outlined icons to communicate clarity, refinement, and consistency while supporting
              an elegant premium e-commerce feel.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">10 / Responsive Design</p>
        <h2>Mobile-First Layout Strategy</h2>

        <div className="decision-grid">
          <article>
            <h3>Mobile-First Approach</h3>
            <p>
              The website was designed for smaller devices first, then progressively enhanced for tablets and desktops
              because many e-commerce users browse and shop from mobile devices.
            </p>
          </article>

          <article>
            <h3>Scalable Units</h3>
            <p>
              The HTML base font size was planned at 62.5%, making 1rem equal to 10px. This supports consistent scaling
              for spacing, typography, and components.
            </p>
          </article>

          <article>
            <h3>Breakpoints</h3>
            <p>
              Media queries were planned at 400px, 600px, 768px, and 992px to support small phones, larger phones,
              tablets, and desktop layouts.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">11 / Semantic Markup</p>
        <h2>Accessible HTML Structure</h2>

        <div className="feature-list">
          <article>
            <h3>Content Structure</h3>
            <p>
              The website uses semantic elements such as main, section, article, header, footer, and nav to divide
              content into meaningful blocks.
            </p>
          </article>

          <article>
            <h3>Headings & Text</h3>
            <p>
              Headings are used in a logical hierarchy, with paragraphs used for product descriptions, instructions, and
              supporting content.
            </p>
          </article>

          <article>
            <h3>Images & Alt Text</h3>
            <p>
              Images include descriptive alt attributes where needed, while decorative images can use empty alt text to
              avoid unnecessary screen reader noise.
            </p>
          </article>

          <article>
            <h3>Forms & Buttons</h3>
            <p>
              Forms use labels, inputs, and buttons correctly. Required fields, validation feedback, and accessible
              button actions support keyboard and screen reader users.
            </p>
          </article>

          <article>
            <h3>Navigation & Landmarks</h3>
            <p>
              Navigation elements and landmark roles help users move through the site efficiently, especially when using
              assistive technologies.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">12 / Motion Design</p>
        <h2>GSAP Animation Strategy</h2>

        <div className="feature-list">
          <article>
            <h3>Timeline Animations</h3>
            <p>
              Home page hero elements such as the logo, headline, and Shop Now button animate sequentially on load. The
              checkout confirmation can use a timeline where the cart icon becomes a checkmark.
            </p>
          </article>

          <article>
            <h3>ScrollTrigger Animations</h3>
            <p>
              Product cards fade and rise into view on shop and category pages, while about-page icons and text blocks
              animate as users scroll.
            </p>
          </article>

          <article>
            <h3>SVG & MotionPath</h3>
            <p>
              Add-to-cart interactions can use MotionPath animation so a product thumbnail or cart icon appears to fly
              into the cart icon in the header.
            </p>
          </article>

          <article>
            <h3>Micro-Interactions</h3>
            <p>
              Buttons, navigation links, dropdown menus, and modal pop-ups use smooth easing, scaling, pulsing, and
              open-close transitions to create tactile feedback.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">13 / Product Experience</p>
        <h2>Core Shopping Features</h2>

        <div className="feature-list">
          <article>
            <h3>Dynamic Product Loading</h3>
            <p>Products are fetched from the Fake Store API and rendered dynamically into reusable product cards.</p>
          </article>

          <article>
            <h3>Filtering & Search</h3>
            <p>
              Users can filter products by price, category, and rating, while live search supports faster product
              discovery.
            </p>
          </article>

          <article>
            <h3>Cart & Favourites</h3>
            <p>
              Cart and favourite items are stored in localStorage so user choices remain after refreshing or returning
              to the website.
            </p>
          </article>

          <article>
            <h3>Checkout Validation</h3>
            <p>
              Real-time form validation gives users immediate feedback for fields such as name, email, address, and
              password.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">14 / High Fidelity Wireframes</p>
        <h2>Desktop & Mobile Wireframe System</h2>

        <p className="section-intro">
          The wireframes define the shopping experience before development, including the home page, shop page, product
          details, favourites, cart, category pages, login, and mobile navigation.
        </p>

        <div className="wireframe-showcase">
          <figure className="wireframe-figure">
            <button type="button" className="wireframe-button" onClick={() => openLightbox(homePage, "Home page wireframe", "Figure 4: Home page wireframe introducing users to the store with a hero banner, categories, search, and featured product sections.")}>
              <img src={homePage} alt="Home page wireframe" />
            </button>
            <figcaption>Figure 4: Home page wireframe with hero banner, categories, search, and featured products.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button type="button" className="wireframe-button" onClick={() => openLightbox(productPage, "Shop page wireframe", "Figure 5: Shop page wireframe showing filters, product grid layout, sorting, and catalogue browsing.")}>
              <img src={productPage} alt="Shop page wireframe" />
            </button>
            <figcaption>Figure 5: Shop page wireframe showing filters, sorting, and product grid browsing.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button type="button" className="wireframe-button" onClick={() => openLightbox(productDetailPage, "Product detail page wireframe", "Figure 6: Product detail page wireframe showing product images, size options, description, quantity controls, and Add to Cart action.")}>
              <img src={productDetailPage} alt="Product detail page wireframe" />
            </button>
            <figcaption>Figure 6: Product detail page wireframe focused on clarity, persuasion, and Add to Cart interaction.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button type="button" className="wireframe-button" onClick={() => openLightbox(favouritePage, "Favourites page wireframe", "Figure 7: Favourites page wireframe showing saved items users can revisit, remove, or move into cart.")}>
              <img src={favouritePage} alt="Favourites page wireframe" />
            </button>
            <figcaption>Figure 7: Favourites page wireframe showing saved products for later decision-making.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button type="button" className="wireframe-button" onClick={() => openLightbox(cartPage, "Cart page wireframe", "Figure 8: Cart page wireframe showing selected items, thumbnails, quantities, pricing, subtotal, delivery, and checkout button.")}>
              <img src={cartPage} alt="Cart page wireframe" />
            </button>
            <figcaption>Figure 8: Cart page wireframe with order summary, quantity controls, and checkout CTA.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button type="button" className="wireframe-button" onClick={() => openLightbox(loginPage, "Login page wireframe", "Figure 9: Login page wireframe showing a mobile-friendly login form.")}>
              <img src={loginPage} alt="Login page wireframe" />
            </button>
            <figcaption>Figure 9: Login page wireframe showing a simple mobile-friendly form layout.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button type="button" className="wireframe-button" onClick={() => openLightbox(jewelleryPage, "Jewellery page wireframe", "Figure 10: Jewellery category page wireframe showing product browsing for jewellery items.")}>
              <img src={jewelleryPage} alt="Jewellery page wireframe" />
            </button>
            <figcaption>Figure 10: Jewellery category page wireframe.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button type="button" className="wireframe-button" onClick={() => openLightbox(electronicPage, "Electronics page wireframe", "Figure 11: Electronics category page wireframe showing filterable product browsing.")}>
              <img src={electronicPage} alt="Electronics page wireframe" />
            </button>
            <figcaption>Figure 11: Electronics category page wireframe.</figcaption>
          </figure>

          <figure className="wireframe-figure">
            <button type="button" className="wireframe-button" onClick={() => openLightbox(mobileMenu, "Mobile navigation menu wireframe", "Figure 12: Mobile navigation menu wireframe showing the hamburger menu opened with links to Home, Store, Clothing, Jewellery, Electronics, and Favourites.")}>
              <img src={mobileMenu} alt="Mobile navigation menu wireframe" />
            </button>
            <figcaption>Figure 12: Mobile navigation menu wireframe showing collapsed navigation links.</figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">15 / Technical Implementation</p>
          <h2>Architecture Choices</h2>
        </div>

        <div className="section-content">
          <p>
            The project uses a modular JavaScript structure, separating logic into focused files such as products.js,
            cart.js, formValidation.js, and main.js.
          </p>

          <p>
            Template literals dynamically generate product cards, navigation items, and cart contents, reducing repeated
            HTML and making the interface easier to update.
          </p>

          <p>
            Navigation is injected with JavaScript across pages to keep structure consistent. Progressive enhancement
            ensures basic browsing can still work while advanced features such as animation and live filtering enhance
            the experience in capable browsers.
          </p>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">16 / State Management</p>
        <h2>Data, Events & Caching</h2>

        <div className="decision-grid">
          <article>
            <h3>Cart State</h3>
            <p>Cart data is stored in localStorage so selected items persist across sessions.</p>
          </article>

          <article>
            <h3>Favourites State</h3>
            <p>Favourite products are also saved in localStorage so users can return to saved items later.</p>
          </article>

          <article>
            <h3>Filters & Search State</h3>
            <p>
              Filter and search state is managed in memory and updates dynamically without requiring the page to reload.
            </p>
          </article>

          <article>
            <h3>Event Delegation</h3>
            <p>
              Events are handled on parent containers such as the product grid, making interactions efficient for
              dynamically generated product elements.
            </p>
          </article>

          <article>
            <h3>API Caching</h3>
            <p>
              API results are cached in memory after the first fetch to reduce repeated requests and improve
              performance.
            </p>
          </article>

          <article>
            <h3>Graceful Fallback</h3>
            <p>
              If API calls fail, cached data can be displayed where available with a user-friendly error message.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">17 / Accessibility & Testing</p>
        <h2>Quality Assurance</h2>

        <div className="decision-grid">
          <article>
            <h3>ARIA & Validation</h3>
            <p>
              ARIA roles support navigation, buttons, and form validation messages where extra context is required.
            </p>
          </article>

          <article>
            <h3>Reduced Motion</h3>
            <p>
              GSAP animations are planned to respect the prefers-reduced-motion media query so motion-sensitive users
              are not forced into animated experiences.
            </p>
          </article>

          <article>
            <h3>Performance</h3>
            <p>
              Lazy loading product images, caching API results, and using lightweight animations help optimise page
              speed.
            </p>
          </article>

          <article>
            <h3>Browser Testing</h3>
            <p>
              Manual testing was planned across Chrome, Firefox, Edge, and mobile browsers, with HTML/CSS validation
              through W3C tools.
            </p>
          </article>

          <article>
            <h3>Accessibility Testing</h3>
            <p>
              Chrome Lighthouse, keyboard-only navigation, alt text checks, colour contrast, and validation feedback are
              used to test usability.
            </p>
          </article>

          <article>
            <h3>Error Handling</h3>
            <p>
              Clear feedback is provided for failed API calls and invalid form submissions to avoid leaving users
              confused.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section">
        <p className="section-kicker">18 / Project Timeline</p>
        <h2>Milestones & Development Plan</h2>

        <div className="feature-list">
          <article>
            <h3>23-29 Sept · Folder Structure & GitHub Deployment</h3>
            <p>
              Create semantic HTML skeletons for Home, Shop, Clothing, Jewellery, Electronics, Favourites, and Checkout.
              Add placeholders for dynamic content and GSAP hooks, then deploy through GitHub Pages.
            </p>
          </article>

          <article>
            <h3>30 Sept-6 Oct · API Integration</h3>
            <p>
              Connect the Fake Store API, fetch and display products dynamically, add loading states, error handling, and
              begin caching with memory and localStorage.
            </p>
          </article>

          <article>
            <h3>7-13 Oct · JavaScript Functionalities</h3>
            <p>
              Build JavaScript-generated navigation, live search, filtering, cart state, favourites state, localStorage,
              and event delegation.
            </p>
          </article>

          <article>
            <h3>14-20 Oct · Form Validation</h3>
            <p>
              Implement real-time checkout validation for name, email, address, and password with ARIA roles and inline
              error or success states.
            </p>
          </article>

          <article>
            <h3>21-27 Oct · GSAP Animation</h3>
            <p>
              Add timeline animations, ScrollTrigger effects, MotionPath add-to-cart interaction, and SVG animations.
            </p>
          </article>

          <article>
            <h3>4-8 Nov · Responsive Styling</h3>
            <p>
              Apply mobile-first styling with breakpoints at 400px, 600px, 768px, and 992px. Test layout consistency
              across devices.
            </p>
          </article>

          <article>
            <h3>9 Nov-Due Date · Testing & Refinement</h3>
            <p>
              Complete accessibility testing, cross-browser checks, performance optimisation, lazy loading, caching, and
              final bug fixes.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section two-column">
        <div>
          <p className="section-kicker">19 / Navigation Consistency</p>
          <h2>Across Pages & Breakpoints</h2>
        </div>

        <div className="section-content">
          <p>
            The navigation bar is dynamically rendered with JavaScript and inserted into every page, keeping the
            structure consistent across the website.
          </p>

          <p>
            On mobile, the navigation collapses into a hamburger toggle menu. Across 400px, 600px, 768px, and 992px
            breakpoints, the layout adapts while maintaining usability, hierarchy, and access to key shopping areas.
          </p>
        </div>
      </section>

      <section className="case-section final-prototype-section">
        <p className="section-kicker">20 / Final Prototype</p>
        <h2>Interactive Shopping Experience</h2>

        <p>
          The final website combines responsive layouts, semantic markup, API integration, GSAP animation, cart logic,
          favourites, search, filtering, checkout validation, localStorage persistence, accessibility considerations,
          and performance-conscious front-end architecture.
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

      <ImageLightbox isOpen={!!selectedImage} image={selectedImage} onClose={closeLightbox} />
    </main>
  );
}