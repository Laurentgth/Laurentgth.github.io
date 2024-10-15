const footerYearElement = document.querySelector('.footer__year');

export default () => {
  const d = new Date();
  const yearValue = d.getFullYear().toString();
  footerYearElement.textContent = yearValue;
  footerYearElement.setAttribute('datetime', yearValue);
  footerYearElement.style.display = 'inline';
};
