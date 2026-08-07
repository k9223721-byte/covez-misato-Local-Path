// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => io.observe(el));

  // Active nav
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
});
