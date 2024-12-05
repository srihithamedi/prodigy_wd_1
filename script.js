
document.addEventListener('scroll', () => {
  const navMenu = document.querySelector('.nav-menu');
  if (window.scrollY > 50) {
    navMenu.classList.add('scrolled');
  } else {
    navMenu.classList.remove('scrolled');
  }
});
