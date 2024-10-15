const navbar = document.querySelector('.navbar');
const main = document.querySelector('.main');
const hero = document.querySelector('.hero');
const sectionTitles = document.querySelectorAll('.section__title');

function accountForNavbarHeight() {
  const headerHeightInPx = Number(
    getComputedStyle(navbar).height.split('px')[0]
  );
  const extraSectionTitleOffset = 20;

  // main.style.marginTop = headerHeight;
  hero.style.height = `${window.innerHeight - headerHeightInPx}px`;

  const sectionTitleScrollMarginTopValue = String(
    headerHeightInPx + extraSectionTitleOffset
  );
  const sectionTitleScrollMarginTop = `${sectionTitleScrollMarginTopValue}px`;
  for (const t of sectionTitles) {
    t.style.scrollMarginTop = sectionTitleScrollMarginTop;
  }
}

export { accountForNavbarHeight };
