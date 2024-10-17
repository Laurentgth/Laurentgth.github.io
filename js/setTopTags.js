const topTagList = document.querySelectorAll('.navbar__list li');

const setTopTags = () => {
  const hash = window.location.hash ?? '#home';
  topTagList.forEach((li) => {
    const anchor = li.querySelector('a');
    if (anchor.getAttribute('href') == hash)
      anchor.setAttribute('aria-current', 'page');
    else anchor.removeAttribute('aria-current');
  });
};

window.addEventListener('hashchange', setTopTags);
