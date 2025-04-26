/**
 * Utils.js - Utility functions for the portfolio website
 * @module utils
 * @author DavidDevGt
 */

/**
 * Transforms badge elements with data-url attributes into clickable links
 * Opens links in a new tab with security best practices
 * 
 * @param {string} [selector=".badge[data-url]"] - CSS selector for badge elements
 * @param {string} [linkClass="badge-link"] - Class to apply to the generated anchor elements
 * @returns {number} - Number of badges converted to links
 */
function convertBadgesToLinks(selector = ".badge[data-url]", linkClass = "badge-link") {
  try {
    const badges = document.querySelectorAll(selector);
    
    if (!badges || badges.length === 0) {
      console.info("No badge elements found with the selector:", selector);
      return 0;
    }
    
    let conversionCount = 0;
    
    badges.forEach(badge => {
      const url = badge.dataset.url;
      
      if (!url) return;
      
      const link = document.createElement("a");
      
      Object.assign(link, {
        href: url,
        className: linkClass,
        target: "_blank",
        rel: "noopener noreferrer" // Prevents potential security issues with target="_blank"
      });
      
      const badgeClone = badge.cloneNode(true);
      link.appendChild(badgeClone);
      
      badge.replaceWith(link);
      conversionCount++;
    });
    
    return conversionCount;
  } catch (error) {
    console.error("Error converting badges to links:", error);
    return 0;
  }
}

/**
 * Sets up smooth scrolling for navigation links
 * 
 * @param {string} [selector=".nav-link"] - CSS selector for navigation links
 * @param {number} [offset=70] - Offset in pixels to account for fixed headers
 * @param {string} [navbarSelector=".navbar-collapse"] - Selector for mobile navbar that needs to be closed after click
 */
function setupSmoothScroll(selector = ".nav-link", offset = 70, navbarSelector = ".navbar-collapse") {
  const links = document.querySelectorAll(selector);
  const navbar = document.querySelector(navbarSelector);
  
  if (!links || links.length === 0) return;
  
  links.forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");
      
      if (!targetId || targetId.charAt(0) !== "#") return;
      
      const targetElement = document.querySelector(targetId);
      
      if (!targetElement) return;
      
      event.preventDefault();
      
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
      
      // Close mobile navbar if open
      if (navbar && navbar.classList.contains("show")) {
        navbar.classList.remove("show");
      }
    });
  });
}

/**
 * Adds lazy loading to images to improve page performance
 * 
 * @param {string} [selector="img"] - CSS selector for images to apply lazy loading
 */
function setupLazyLoading(selector = "img") {
  const images = document.querySelectorAll(selector);
  
  if (!images || images.length === 0) return;
  
  // Use Intersection Observer API for better performance
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
          }
          observer.unobserve(image);
        }
      });
    });
    
    images.forEach(image => {
      if (image.dataset.src) {
        imageObserver.observe(image);
      }
    });
  } else {
    images.forEach(image => {
      if (image.dataset.src) {
        image.src = image.dataset.src;
        image.removeAttribute('data-src');
      }
    });
  }
}

/**
 * Debounce function to limit how often a function can be called
 * Useful for scroll, resize, and input events
 * 
 * @param {Function} func - Function to debounce
 * @param {number} wait - Debounce wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait = 300) {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Enable dark/light mode toggle with data-theme attribute and icon update
 * @param {string} [toggleSelector=".dark-mode-toggle"] - CSS selector for the toggle button
 * @param {string} [darkModeClass="dark-mode"] - (Unused, legacy)
 */
function setupDarkModeToggle(toggleSelector = ".dark-mode-toggle", darkModeClass = "dark-mode") {
  const toggle = document.querySelector(toggleSelector);
  if (!toggle) return;

  // Aplica el tema instantáneamente sin repintados lentos
  function applyTheme(theme) {
    // Elimina cualquier transición temporalmente para cambio instantáneo
    document.body.style.transition = 'none';
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    // Cambia el icono
    const icon = toggle.querySelector("i");
    if (icon) {
      icon.className = theme === "dark"
        ? "bi bi-moon-stars-fill"
        : "bi bi-brightness-high-fill";
    }
    toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    // Forzar reflow y restaurar transición después de un frame
    requestAnimationFrame(() => {
      document.body.style.transition = '';
    });
  }

  // Preferencia guardada o sistema
  let theme = localStorage.getItem("theme");
  if (!theme) {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(theme);

  toggle.addEventListener("click", () => {
    theme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(theme);
  });
}

export {
  convertBadgesToLinks,
  setupSmoothScroll,
  setupLazyLoading,
  debounce,
  setupDarkModeToggle
};