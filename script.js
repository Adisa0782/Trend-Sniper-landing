// TrendSniper Landing Page Script

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add a little hover effect to the hero button
const heroButton = document.querySelector('.hero button');
if (heroButton) {
  heroButton.addEventListener('mouseenter', () => {
    heroButton.style.transform = 'scale(1.1)';
  });
  heroButton.addEventListener('mouseleave', () => {
    heroButton.style.transform = 'scale(1)';
  });
}

// Optional: Modal Popup for "Start Free Trial" button (example)
const startTrialButton = document.querySelector('.hero button');
if (startTrialButton) {
  startTrialButton.addEventListener('click', () => {
    alert('🚀 Thank you for choosing TrendSniper! Get ready to discover viral products!');
    // Replace with a real modal or redirect to signup when ready
  });
}

// Console log to confirm the script is loaded
console.log('🔥 TrendSniper landing page script loaded!');
