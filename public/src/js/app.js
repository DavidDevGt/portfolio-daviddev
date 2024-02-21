document.addEventListener("DOMContentLoaded", function () {
  let scrollLinks = document.querySelectorAll(".nav-link");
  for (let i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", function (event) {
      let target = document.querySelector(this.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  let filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let filterValue = this.getAttribute("data-filter");
      let projectCards = document.querySelectorAll(".project-card");

      projectCards.forEach(function (card) {
        if (filterValue === "all") {
          card.style.display = "block";
        } else {
          if (card.classList.contains(filterValue)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  });

  let badges = document.querySelectorAll(".badge");
  badges.forEach(function (badge) {
    let url = badge.getAttribute("data-url");
    if (url) {
      let link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("class", "badge-link");
      link.setAttribute("target", "_blank");
      
      let badgeClone = badge.cloneNode(true);
      link.appendChild(badgeClone);
      
      badge.replaceWith(link);
    }
  });

  let certificationLinks = document.querySelectorAll("#certifications .card-text a");
  certificationLinks.forEach(function(link) {
    link.setAttribute("target", "_blank");
  });
});
