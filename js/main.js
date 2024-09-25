const footerYearElement = document.querySelector('.footer__year');

const displayYear = () => {
  const year = new Date();
  footerYearElement.textContent = year.getFullYear().toString();
  footerYearElement.style.display = 'inline';
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', displayDate);
} else {
  doSomething();
}
