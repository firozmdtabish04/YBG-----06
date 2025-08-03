// Theme Toggle
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme preference from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark-mode") ? "dark" : "light"
  );
});

// Hamburger Menu
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("active");
});

// Dynamic Active Link
const currentPage = window.location.pathname.split("/").pop() || "Home.html";
const navLinks = document.querySelectorAll(".nav-menu li a");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.parentElement.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

// Login Dropdown Toggle
const loginToggle = document.getElementById("login-toggle");

loginToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent click from bubbling to document
  loginToggle.classList.toggle("active");
});

// Close login dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!loginToggle.contains(e.target) && !e.target.closest(".login-dropdown")) {
    loginToggle.classList.remove("active");
  }
});