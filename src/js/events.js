/**
 * events.js - Event listeners for the portfolio website
 * @module events
 * @author DavidDevGt
 */

import { generateProjects, generateCertifications, generateSkills } from './dom.js';
import { convertBadgesToLinks, setupDarkModeToggle } from './utils.js';

document.addEventListener("DOMContentLoaded", function () {
  generateProjects();
  generateCertifications();
  generateSkills();

  // Smooth scroll y filtros siguen igual
  const scrollLinks = document.querySelectorAll(".nav-link");
  for (let i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", function (event) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        event.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filterValue = this.getAttribute("data-filter");
      const projectCards = document.querySelectorAll(".project-card");
      projectCards.forEach(function (card) {
        if (filterValue === "all") {
          card.style.display = "block";
        } else {
          card.style.display = card.classList.contains(filterValue) ? "block" : "none";
        }
      });
    });
  });

  setTimeout(convertBadgesToLinks, 100);

  // DARK/LIGHT MODE TOGGLE
  setupDarkModeToggle('.dark-mode-toggle', 'dark-mode');
});
