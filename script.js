// 1. Typewriter Animation for Hero Section
const words = [
  "a Frontend Developer.",
  "a Final Year Computer Science Student.",
  "an AI Solutions Builder.",
];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 100;

function typeEffect() {
  const target = document.getElementById("typewriter");
  if (!target) return;

  let fullWord = words[i];

  if (isDeleting) {
    currentWord = fullWord.substring(0, j - 1);
    j--;
  } else {
    currentWord = fullWord.substring(0, j + 1);
    j++;
  }

  target.innerHTML = currentWord;

  if (!isDeleting && j === fullWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500); // Pause at end
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

// 2. Welcome Toast Message
function initGreeting() {
  const toast = document.getElementById("welcome-toast");
  setTimeout(() => {
    toast.style.bottom = "40px";
  }, 1500);

  setTimeout(() => {
    toast.style.bottom = "-100px";
  }, 6000);
}

// 3. Simple Scroll Reveal
const revealOnScroll = () => {
  const elements = document.querySelectorAll(
    ".project-card, .skill-card, .about-text"
  );
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

// Initial Setup
document.addEventListener("DOMContentLoaded", () => {
  // Set initial styles for reveal
  document
    .querySelectorAll(".project-card, .skill-card, .about-text")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.8s ease-out";
    });

  typeEffect();
  initGreeting();
  window.addEventListener("scroll", revealOnScroll);
});
