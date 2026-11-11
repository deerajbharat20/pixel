const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

const filterButtons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.destination-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    cards.forEach(card => {
      card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category);
    });
  });
});

document.getElementById('newsletter-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  document.querySelector('.form-message').textContent =
    `Thanks! ${email} has been added to this demo's signup list.`;
  event.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
