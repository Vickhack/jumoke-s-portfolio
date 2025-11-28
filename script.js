// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
    
    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
      });
    });
  }
  
  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
  // Contact form validation
  const form = document.getElementById('contact-form');
  const msgElement = document.getElementById('form-msg');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !subject || !message) {
        e.preventDefault();
        msgElement.textContent = 'Please fill in all fields.';
        msgElement.style.color = '#e74c3c';
        return;
      }
      
      msgElement.textContent = 'Sending...';
      msgElement.style.color = '#e8a044';
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
