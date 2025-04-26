function convertBadgesToLinks() {
  const badges = document.querySelectorAll(".badge[data-url]");
  badges.forEach(function (badge) {
    const url = badge.getAttribute("data-url");
    if (url) {
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("class", "badge-link");
      link.setAttribute("target", "_blank");
      const badgeClone = badge.cloneNode(true);
      link.appendChild(badgeClone);
      badge.replaceWith(link);
    }
  });
}

export { convertBadgesToLinks };
