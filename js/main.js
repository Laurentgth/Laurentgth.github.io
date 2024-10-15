import './setHero.js';
import { accountForNavbarHeight } from './setMainLayout.js';
import displayYear from './setDisplayYear.js';

document.addEventListener('DOMContentLoaded', () => {
  displayYear();
  accountForNavbarHeight();
  setTopTags();
});

const setTopTags = () => {
  const hash = window.location.hash ?? '#home';
  const topTagList = document.querySelectorAll('.navbar li:nth-of-type(n+2)');
  topTagList.forEach((li) => {
    const anchor = li.querySelector('a');
    if (anchor.getAttribute('href') == hash)
      anchor.setAttribute('aria-current', 'page');
    else anchor.removeAttribute('aria-current');
  });
};
window.addEventListener('hashchange', setTopTags);
