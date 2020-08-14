const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.nav-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [97, 89, 85, 87, 80, 77, 57];

window.addEventListener('scroll', () => {
  pageSetup();
});

const pageSetup = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((link) => {
        link.classList.remove('change');
      });
      navbarLinks[i].classList.add('change');
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll('.progress-percent').forEach((el, index) => {
      el.style.width = `${progressBarPercents[index]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[index];
    });
  }
};

pageSetup();

// window.addEventListener('resize', () => {
//   window.location.reload();
// });
