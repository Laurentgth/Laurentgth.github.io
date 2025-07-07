import './setHero.js';
import './setTopTags.js';
import { accountForNavbarHeight } from './setMainLayout.js';
import displayYear from './setDisplayYear.js';
import './temp.js';

document.addEventListener('DOMContentLoaded', () => {
  displayYear();
  accountForNavbarHeight();
});
