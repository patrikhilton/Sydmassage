const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

    const menuIsOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

});


/* Close menu after clicking a navigation link */

const navLinks = document.querySelectorAll(".nav-menu > a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});

// Klistra in i slutet av projects/Sydmassage/script.js
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.reviews__slider');
  if (!slider) return;

  const slides = [...slider.querySelectorAll('.review')];
  const dotsWrap = slider.querySelector('.reviews__dots');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const INTERVAL = 7000; // ms mellan byten
  let current = 0;
  let timer = null;

  // Skapa prickar automatiskt – en per recension
  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'reviews__dot';
    dot.setAttribute('aria-label', `Visa omdöme ${i + 1}`);
    dot.addEventListener('click', () => { show(i); restart(); });
    dotsWrap.appendChild(dot);
    return dot;
  });

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => { s.hidden = i !== current; });
    dots.forEach((d, i) => d.setAttribute('aria-current', i === current));
  }

  function start() {
    if (reduceMotion || slides.length < 2) return;
    timer = setInterval(() => show(current + 1), INTERVAL);
  }
  function stop() { clearInterval(timer); }
  function restart() { stop(); start(); }

  slider.querySelectorAll('.reviews__btn').forEach(btn =>
    btn.addEventListener('click', () => { show(current + Number(btn.dataset.dir)); restart(); })
  );

  // Pausa när man hovrar eller tabbar in i karusellen
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);
  slider.addEventListener('focusin', stop);
  slider.addEventListener('focusout', start);

  show(0);
  start();
});