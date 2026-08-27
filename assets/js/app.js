const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const header = document.querySelector(".site-header");

menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const onScroll = () => {
  header?.classList.toggle("scrolled", window.scrollY > 30);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent =
    "Prototype enquiry received. Connect this form to Formspree, Netlify Forms, your email API, or your own backend before production.";
  contactForm.reset();
});
