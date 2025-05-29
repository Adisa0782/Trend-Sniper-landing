
// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
    // Close menu on mobile after click
    document.querySelector('.nav-links').classList.remove('active');
  });
});
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
      menuIcon.textContent = '✖'; // Change to X
    } else {
      menuIcon.textContent = '☰'; // Revert back
    }
  }
