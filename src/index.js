const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const yearElement = document.getElementById("currentYear");
const navAnchors = document.querySelectorAll(".nav-links a");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const setMenuState = (isOpen) => {
  if (!menuToggle) {
    return;
  }

  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
};

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    setMenuState(isOpen);
  });
}

navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    navAnchors.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    if (navLinks && navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
      setMenuState(false);
    }
  });
});
