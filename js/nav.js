lucide.createIcons();

// Mobile Menu Logic
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");
const links = document.querySelectorAll(".mobile-link");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Close menu when a link is clicked
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

document.getElementById("email-link").addEventListener("click", function (e) {
  e.preventDefault();
  location.href = "mail" + "to:" + this.dataset.u + "@" + this.dataset.d;
});
