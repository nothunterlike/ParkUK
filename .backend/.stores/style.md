/* ParkUK — plain CSS, no frameworks */

:root {
  --blue-dark: #1b72ff;
  --blue-light: #3facff;
  --blue-gradient: linear-gradient(to right, #1b72ff, #3facff);
  --bg-dark: #121212;
  --bg-mid: #1c1c1c;
  --text-light: #f4f4f4;
  --text-muted: #dbdbdb;
  --contact-gradient: linear-gradient(to right, #6372ff, #5ca9fb);
  --nav-height: 80px;
  --max-width: 1140px;
  --radius: 12px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: #1c1c1c;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: #608dfd;
  text-decoration: none;
}

a:hover {
  color: #3facff;
}

ul {
  list-style: none;
}

.container {
  width: min(100% - 2rem, var(--max-width));
  margin-inline: auto;
}

/* Buttons */
.btn {
  display: inline-block;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
  background: var(--blue-gradient);
  padding: 0.85rem 2rem;
  border-radius: 20px;
  border: 4px solid #181818;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.btn:hover {
  background: #3facff;
  color: #fff;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  border: 2px solid #fff;
}

.btn-outline:hover {
  background: #fff;
  color: #1f386e;
}

/* Navigation */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(to right, #121212, #1a1a1a);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.6);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--nav-height);
}

.nav-logo img {
  height: 70px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 0.25rem;
}

.nav-links a {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #eaeaea;
  padding: 0.5rem 1rem;
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 0;
  height: 3px;
  background: var(--blue-gradient);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  transform: scaleX(1);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-toggle span {
  display: block;
  width: 26px;
  height: 3px;
  background: #3facff;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

.nav-toggle.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.nav-toggle.open span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Hero */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url(../img/blue-bg.jpg) center / cover no-repeat;
  padding-top: var(--nav-height);
}

.hero-overlay {
  width: 100%;
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  align-items: center;
  background: rgba(0, 136, 255, 0.2);
}

.hero-content {
  text-align: center;
  padding: 6rem 0 4rem;
}

.hero h1 {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 0 50px rgba(0, 145, 255, 0.9);
  margin-bottom: 1rem;
}

.hero p {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  font-weight: 700;
  color: #e8eeff;
  max-width: 640px;
  margin: 0 auto 2.5rem;
  text-shadow: 0 0 30px rgba(0, 0, 0, 0.65);
}

/* Sections */
.section {
  padding: 5rem 0;
}

.section-dark {
  background: linear-gradient(to bottom, var(--bg-dark), var(--bg-mid));
  box-shadow: 0 0 75px rgba(0, 0, 0, 0.5);
}

.section-dark h3 {
  color: var(--text-light);
}

.section-dark p {
  color: var(--text-muted);
}

.section-blue {
  background: var(--blue-gradient);
  color: #fff;
}

.section-gallery {
  background: url(../img/pattern_blue.jpg) center / cover no-repeat;
  padding: 5rem 0;
}

.section-light {
  background: #f6f6f6;
}

.section-contact {
  background: var(--contact-gradient);
  color: rgba(255, 255, 255, 0.9);
}

/* Section headings */
.section-heading {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  color: #f6f6f6;
  text-shadow: 0 0 20px rgba(0, 145, 255, 0.7);
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1rem;
}

.section-heading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: var(--blue-gradient);
}

.section-heading-left {
  text-align: left;
}

.section-heading-left::after {
  left: 0;
  transform: none;
}

.section-heading-left-light {
  text-align: left;
  color: #fff;
  text-shadow: none;
}

.section-heading-left-light::after {
  left: 0;
  transform: none;
  background: rgba(255, 255, 255, 0.4);
}

.section-heading-dark {
  color: #333;
  text-shadow: none;
}

.section-heading-dark::after {
  background: var(--blue-gradient);
}

.section-intro {
  text-align: center;
  font-size: 1.1rem;
  max-width: 700px;
  margin: -2rem auto 3rem;
  color: rgba(255, 255, 255, 0.85);
}

.section-intro-dark {
  color: #666;
}

/* Grid */
.grid {
  display: grid;
  gap: 2rem;
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

/* Features */
.feature-card {
  text-align: center;
}

.icon-circle {
  width: 90px;
  height: 90px;
  margin: 0 auto 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 50%;
  background: var(--blue-gradient);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.7);
}

.feature-card h3 {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* About */
#about {
  background: linear-gradient(to right, #181818, var(--bg-mid));
  color: var(--text-light);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-image {
  width: 100%;
  max-width: 520px;
  border: 8px solid #fff;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.about-text h3 {
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem;
}

.about-text > p {
  line-height: 1.8;
  font-weight: 600;
  margin: 1rem 0;
}

.about-lists {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.about-lists li {
  padding: 0.35rem 0 0.35rem 1.5rem;
  position: relative;
  font-weight: 500;
}

.about-lists li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--blue-light);
  font-weight: 700;
}

/* Services */
.service-card {
  text-align: center;
  padding: 1rem;
}

.service-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.service-card p {
  color: rgba(255, 255, 255, 0.8);
}

/* Gallery */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  display: block;
}

.gallery-item img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.4s;
}

.gallery-caption {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(27, 114, 255, 0.85);
  color: #fff;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 1rem;
  text-align: center;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-item:hover .gallery-caption {
  opacity: 1;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox[hidden] {
  display: none;
}

.lightbox img {
  max-height: 80vh;
  max-width: 90vw;
  object-fit: contain;
  border-radius: var(--radius);
}

.lightbox p {
  color: #fff;
  margin-top: 1rem;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: 1.1rem;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
}

/* Testimonials */
.testimonial {
  background: #fff;
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.testimonial-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial p {
  font-style: italic;
  font-size: 0.95rem;
  color: #444;
}

.testimonial cite {
  font-style: normal;
  font-weight: 600;
  color: #666;
}

/* Team */
.team-card {
  text-align: center;
}

.team-card img {
  width: 100%;
  max-width: 240px;
  margin: 0 auto 1rem;
  border-radius: var(--radius);
}

.team-card h4 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.team-card p {
  color: #888;
}

/* Contact */
.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact-lead {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-field {
  margin-bottom: 1rem;
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  border: 1px solid #ddd;
  border-radius: 0;
  background: #fff;
  color: #333;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: 2px solid #111;
  border-color: #111;
}

.form-error {
  display: block;
  color: #ffcccc;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  min-height: 1.2em;
}

.form-success {
  color: #fff;
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact-info h3 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.contact-info p {
  margin-bottom: 1.25rem;
}

.contact-info strong {
  display: block;
  margin-bottom: 0.25rem;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
}

.social-links a {
  color: #fff;
  border: 2px solid #fff;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: background 0.3s, color 0.3s;
}

.social-links a:hover {
  background: #fff;
  color: #608dfd;
}

/* Footer */
.footer {
  background: linear-gradient(to right, #181818, var(--bg-mid));
  padding: 2rem 0;
  text-align: center;
}

.footer p {
  color: #d6d6d6;
  font-size: 0.9rem;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0f172a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(#1b48ff, #3facff);
  border-radius: 5px;
}

/* Responsive */
@media (max-width: 900px) {
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .about-image {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    flex-direction: column;
    background: #1a1a1a;
    padding: 1rem;
    gap: 0;
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s, opacity 0.3s;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-links li {
    border-bottom: 1px solid #333;
  }

  .nav-links a {
    display: block;
    padding: 1rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .about-lists {
    grid-template-columns: 1fr;
  }
}