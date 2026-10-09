document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     HEADER
  ========================= */

  const header = document.querySelector(".site-header");

  const updateHeader = () => {

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  };

  window.addEventListener("scroll", updateHeader);

  updateHeader();


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealElements = document.querySelectorAll(
    ".project, .about-layout, .experience-item, .skill-card, .contact-inner"
  );

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach((element, index) => {

    element.classList.add("reveal");

    element.style.transitionDelay =
      `${Math.min(index * 0.05, 0.3)}s`;

    observer.observe(element);

  });


  /* =========================
     SMOOTH NAVIGATION
  ========================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  /* =========================
     PROJECT MOUSE EFFECT
  ========================= */

  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {

    project.addEventListener("mousemove", event => {

      const rect = project.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width - 0.5) * 2;

      const y =
        ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      project.style.setProperty(
        "--mouse-x",
        `${x * 5}px`
      );

      project.style.setProperty(
        "--mouse-y",
        `${y * 5}px`
      );

    });


    project.addEventListener("mouseleave", () => {

      project.style.setProperty("--mouse-x", "0px");
      project.style.setProperty("--mouse-y", "0px");

    });

  });


  /* =========================
     BACK TO TOP
  ========================= */

  const footerTop = document.querySelector("footer span:last-child");

  if (footerTop) {

    footerTop.style.cursor = "pointer";

    footerTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


});
