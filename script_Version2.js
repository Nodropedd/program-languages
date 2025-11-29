// Small interactions: year, mobile menu toggle, fake contact submit
document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');
if (menuBtn) {
  menuBtn.addEventListener('click', () => navList.classList.toggle('open'));
}

const form = document.getElementById('contact-form');
const result = document.getElementById('contact-result');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real site you'd send this to a server. For now, just show a message.
    const name = form.elements.name.value || 'friend';
    result.textContent = `Thanks, ${name}! This form is a demo — I can show you how to hook it up to an email or backend.`;
    form.reset();
  });
}