// Show Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// Remove menu when clicked
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll to section
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageXOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionBottom = sectionTop + sectionHeight;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionBottom) {
      document
        .querySelector(`.nav__menu a[href*="${sectionId}"]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*="${sectionId}"]`)
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// chnage background header

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY > 200) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

// Show scroll top button

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY > 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollTop);

// Animation

gsap.from(".home__img", { opacity: 0, x: 60, duration: 2, delay: 0.5 });
gsap.from(".home__data", { opacity: 0, y: 25, duration: 2, delay: 0.8 });
gsap.from(".home__greeting, .home__name, .home__profession, .home__button", {
  opacity: 0,
  y: 25,
  duration: 2,
  delay: 1,
  ease: "expo.out",
  stagger: 0.2,
});

gsap.from(".nav__logo, .nav__toggle", {
    opacity: 0,
    y: 25,
    duration: 2,
    delay: 1.5,
    ease: "expo.out",
    stagger: 0.2,
});

gsap.from(".nav__item", {
    opacity: 0,
    y: 25,
    duration: 2,
    delay: 1.8,
    ease: "expo.out",
    stagger: 0.2,
});

gsap.from(".home__social-icon", {
    opacity: 0,
    y: 25,
    duration: 2.3,
    delay: 1.8,
    ease: "expo.out",
    stagger: 0.2,
});