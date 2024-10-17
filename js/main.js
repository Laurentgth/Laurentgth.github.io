import './setHero.js';
import './setTopTags.js';
import { accountForNavbarHeight } from './setMainLayout.js';
import displayYear from './setDisplayYear.js';

document.addEventListener('DOMContentLoaded', () => {
  displayYear();
  accountForNavbarHeight();
});
