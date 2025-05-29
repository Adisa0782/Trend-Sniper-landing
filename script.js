// Full JavaScript for TrendSniper landing page

// Toggle navigation menu for mobile
function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('show');
}

// Optional: Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: Example of dynamic button functionality
document.querySelector('.hero button').addEventListener('click', () => {
  alert('🚀 Start your free trial today with TrendSniper!');
});
