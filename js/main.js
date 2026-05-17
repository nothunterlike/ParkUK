(function () {
  "use strict";

  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const nav = document.getElementById("nav");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");
  const contactForm = document.getElementById("contact-form");

  // Mobile navigation
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open);
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Smooth scroll with nav offset
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const id = this.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section[id], header[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");

  function setActiveNav() {
    let current = "";
    sections.forEach(function (section) {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute("id") || "";
      }
    });
    navAnchors.forEach(function (a) {
      a.classList.remove("active");
      if (a.getAttribute("href") === "#" + current) {
        a.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveNav);
  setActiveNav();

  // Gallery lightbox
  document.querySelectorAll(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const src = this.getAttribute("href");
      const title = this.getAttribute("data-title") || "";
      lightboxImg.src = src;
      lightboxImg.alt = title;
      lightboxCaption.textContent = title;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  // Contact form validation
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const fields = [
        { id: "name", message: "Please enter your name." },
        { id: "email", message: "Please enter a valid email." },
        { id: "message", message: "Please enter a message." },
      ];

      fields.forEach(function (field) {
        const input = document.getElementById(field.id);
        const errorEl = document.querySelector('[data-for="' + field.id + '"]');
        let fieldValid = true;

        if (!input.value.trim()) {
          fieldValid = false;
        } else if (field.id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
          fieldValid = false;
        }

        if (!fieldValid) {
          valid = false;
          if (errorEl) errorEl.textContent = field.message;
          input.setAttribute("aria-invalid", "true");
        } else {
          if (errorEl) errorEl.textContent = "";
          input.removeAttribute("aria-invalid");
        }
      });

      if (valid) {
        document.getElementById("form-success").hidden = false;
        contactForm.reset();
        setTimeout(function () {
          document.getElementById("form-success").hidden = true;
        }, 5000);
      }
    });
  }
})();
