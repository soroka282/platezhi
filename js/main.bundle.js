/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map