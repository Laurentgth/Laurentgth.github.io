const footerYearElement = document.querySelector('.footer__year');

const displayYear = () => {
  const d = new Date();
  const yearValue = d.getFullYear().toString();
  footerYearElement.textContent = yearValue;
  footerYearElement.setAttribute('datetime', yearValue);
  footerYearElement.style.display = 'inline';
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', displayDate);
} else {
  displayYear();
}
