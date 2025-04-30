const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
});

// Accordion functionality
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const open = body.style.display === 'block';
    document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
    if (!open) body.style.display = 'block';
  });
});