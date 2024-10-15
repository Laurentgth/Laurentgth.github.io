const cardContainer = document.querySelector('.hero__card-container');
const cards = document.querySelectorAll('.hero__card');
const controls = document.querySelectorAll('.slider-control__item');
let currentIndex = 0;
let carouselID;

// Listeners on slider controls
for (const c of controls) {
  c.addEventListener('click', (event) => {
    currentIndex = getControlIndex(event.target);
    updateCardPosition();
    clearInterval(carouselID);
  });
}

function getControlIndex(controlItem) {
  return Number(controlItem.id.split('-').slice(-1)[0]) - 1;
}

function updateControlColor(index) {
  for (const c of controls) {
    if (getControlIndex(c) === index)
      c.classList.add('slider-control__item__active');
    else c.classList.remove('slider-control__item__active');
  }
}

function updateCardPosition() {
  const translateXValue = -currentIndex * 100;
  cardContainer.style.transform = `translateX(${translateXValue}vw)`;
  updateControlColor(currentIndex);
}

function forwardCards() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCardPosition();
}

carouselID = window.setInterval(forwardCards, 10000);
updateCardPosition();
