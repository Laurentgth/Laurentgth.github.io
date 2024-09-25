const footerYearElement = document.querySelector('.footer__year');

document.addEventListener('DOMContentLoaded', () => {
  const year = new Date();
  footerYearElement.textContent = year.getFullYear().toString();
  footerYearElement.style.display = 'inline';
});
