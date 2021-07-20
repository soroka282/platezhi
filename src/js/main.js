const checkItem = document.querySelectorAll('.check__item');
const offersList = document.querySelectorAll('.offers__item');

const newsItem = document.querySelectorAll('.news__item');
const newsList = document.querySelector('.news__list');
const buttonLeft = document.querySelector('.news__left-button');
const buttonRight = document.querySelector('.news__right-button');
const checkFormSelect = document.querySelector('.check__form-select');
const checkFormArrow = document.querySelector('.check__form--arrow');
const articleDots = document.querySelector('.article__dots');

const rotateArrow = () => {
  checkFormSelect.addEventListener('focus', () => {
    checkFormArrow.style.transform = 'rotate(180deg)';
  });

  checkFormSelect.addEventListener('blur', () => {
    checkFormArrow.style.transform = 'rotate(0deg)';
  });
};

rotateArrow();

const createDots = () => {
  offersList.forEach(() => {
    const dot = document.createElement('li');
    dot.classList.add('article__dot');
    articleDots.prepend(dot);
  });
};

createDots();

const launchCarousel = () => {
  let current = 0;
  let currentDot = 1;
  const width = 377;
  let position = 195;

  articleDots.children[currentDot].classList.add('article__dot--active');

  buttonLeft.addEventListener('click', () => {

    if (current < 0)  {
      return buttonLeft.disabled = true;
    }

    current--;
    articleDots.children[currentDot].classList.remove('article__dot--active');
    currentDot--;
    articleDots.children[currentDot].classList.add('article__dot--active');
    buttonRight.disabled = false;
    position += width;
    newsList.style.transform = 'translateX(' + position + 'px)';
  });

  buttonRight.addEventListener('click', () => {

    if(current > (newsItem.length - 3)) {
      return buttonRight.disabled = true;
    }
    buttonLeft.disabled = false;
    current++;
    articleDots.children[currentDot].classList.remove('article__dot--active');
    currentDot++;
    articleDots.children[currentDot].classList.add('article__dot--active');
    position -= width;
    newsList.style.transform = 'translateX(' + position + 'px)';
  });
};

launchCarousel();

const showForm = (checkItem) => {
  checkItem.forEach((item) => {

    const typesOfCheck = {
      physical: 'physical',
      legal: 'legal',
      ip: 'ip',
      id: 'id',
    };

    const toggleClassForm = (item) => {
      item.parentNode.classList.toggle('check__item--active');
      item.childNodes[1].classList.toggle('check__title--active-mobile');
      item.childNodes[1].childNodes[3].classList.toggle('check__title--active');
      item.childNodes[3].classList.toggle('check__form--active');
    };

    item.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (evt.target.tagName === 'DIV' || evt.target.tagName === 'A' || evt.target.tagName === 'svg') {
        switch(item.dataset.type) {
          case typesOfCheck.physical:
            toggleClassForm(item);
            break;
          case typesOfCheck.legal:
            toggleClassForm(item);
            break;
          case typesOfCheck.ip:
            toggleClassForm(item);
            break;
          case typesOfCheck.id:
            toggleClassForm(item);
            break;
        }
      }

    });
  });
};

showForm(checkItem);

const showOffersInfo = (offersList) => {
  offersList.forEach((item) => {
    item.addEventListener('click', (evt) => {

      if(evt.target.tagName === 'LI' || evt.target.tagName === 'H3' || evt.target.tagName === 'P'|| evt.target.tagName === 'use' || evt.target.tagName === 'svg' || evt.target.tagName === 'DIV')
        item.classList.toggle('offers__item--active');
    });
  });
};

showOffersInfo(offersList);
