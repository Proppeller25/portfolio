const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const yearElement = document.getElementById("currentYear");
const navAnchors = document.querySelectorAll(".nav-links a");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    navAnchors.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
    }
  });
});
