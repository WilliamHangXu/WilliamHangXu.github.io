function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.remove('active');
    });
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.remove('active');
    }
  });