(function () {

// ------------ main navigation menu------------------------

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--opened');
  if (navMain.classList.contains('main-nav--opened')) {
    pageBody.style.overflow = 'hidden';
  } else {
    pageBody.style.overflow = 'auto';
  }
});

// ------------faq menu---------------

const itemFirst = document.querySelector('.faq__item--first');
if (itemFirst) {
  const questionFirst = document.querySelector('.faq__question-block--first');
  const itemSecond = document.querySelector('.faq__item--second');
  const questionSecond = document.querySelector('.faq__question-block--second');
  const itemThird = document.querySelector('.faq__item--third');
  const questionThird = document.querySelector('.faq__question-block--third');
  const itemFourth = document.querySelector('.faq__item--fourth');
  const questionFourth = document.querySelector('.faq__question-block--fourth');


  itemFirst.classList.remove('faq__item--opened');
  itemFirst.classList.remove('faq__item--nojs');
  itemSecond.classList.remove('faq__item--opened');
  itemSecond.classList.remove('faq__item--nojs');
  itemThird.classList.remove('faq__item--opened');
  itemThird.classList.remove('faq__item--nojs');
  itemFourth.classList.remove('faq__item--opened');
  itemFourth.classList.remove('faq__item--nojs');

  questionFirst.addEventListener('click', function() {
    itemFirst.classList.toggle('faq__item--opened');
    itemFirst.classList.toggle('faq__item--nojs');
  });

  questionSecond.addEventListener('click', function() {
    itemSecond.classList.toggle('faq__item--opened');
    itemSecond.classList.toggle('faq__item--nojs');
  });

  questionThird.addEventListener('click', function() {
    itemThird.classList.toggle('faq__item--opened');
    itemThird.classList.toggle('faq__item--nojs');
  });

  questionFourth.addEventListener('click', function() {
    itemFourth.classList.toggle('faq__item--opened');
    itemFourth.classList.toggle('faq__item--nojs');
  });
}


// ---------------modal login  & modal filter-----------------------

const login = document.querySelector('.main-nav__login');
const loginMobile = document.querySelector('.main-nav__log');
const  modalLogin = document.querySelector('.modal-login');
const overlay = document.querySelector('.page-body__overlay');
const pageBody = document.querySelector('.page-body');
const modalLoginClose = document.querySelector('.modal__close');
const emailInput = document.getElementById('your_email');

const filter = document.querySelector('.catalog__filter-button');
const  modalFilter = document.querySelector('.modal-filter');
const modalFilterClose = document.querySelector('.modal-filter-close');

if (filter) {
  filter.addEventListener('click', function() {
    overlay.classList.add('page-body__overlay--view');
    modalFilter.classList.add('modal-filter--opened');
    if (modalFilter.classList.contains('modal-filter--opened')) {
      pageBody.style.overflow = 'hidden';
    } else {
      pageBody.style.overflow = 'auto';
    }
  });
}


var isStorageSupport = true;

try {
  storage = localStorage.getItem('your_email');
} catch (err) {
  isStorageSupport = false;
}

const modalOpenHandler = (evt) => {
  evt.preventDefault();
  overlay.classList.add('page-body__overlay--view');
  modalLogin.classList.add('modal-login--opened');
  emailInput.focus();
  if (modalLogin.classList.contains('modal-login--opened')) {
    pageBody.style.overflow = 'hidden';
  } else {
    pageBody.style.overflow = 'auto';
  }
}

login.addEventListener('click', modalOpenHandler);
loginMobile.addEventListener('click', modalOpenHandler);

const modalLoginCloseHandler = (evt) => {
  evt.preventDefault();
  overlay.classList.remove('page-body__overlay--view');
  modalLogin.classList.remove('modal-login--opened');
  pageBody.style.overflow = 'auto';
}

if (modalFilter) {
  const modalFilterCloseHandler = (evt) => {
    evt.preventDefault();
    overlay.classList.remove('page-body__overlay--view');
    modalFilter.classList.remove('modal-filter--opened');
    pageBody.style.overflow = 'auto';
  }
  modalFilterClose.addEventListener('click', modalFilterCloseHandler);
  overlay.addEventListener('click', modalFilterCloseHandler);
}


modalLoginClose.addEventListener('click', modalLoginCloseHandler);
overlay.addEventListener('click', modalLoginCloseHandler);

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalLogin.classList.contains('modal-login--opened')) {
      evt.preventDefault();
      modalLogin.classList.remove('modal-login--opened');
      overlay.classList.remove('page-body__overlay--view');
      pageBody.style.overflow = 'auto';
    }
  }
});

if (modalFilter) {
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modalFilter.classList.contains('modal-filter--opened')) {
        evt.preventDefault();
        modalFilter.classList.remove('modal-filter--opened');
        overlay.classList.remove('page-body__overlay--view');
        pageBody.style.overflow = 'auto';
      }
    }
  });
}

// -------------------Swiper-----------------------

const swiperClass = document.querySelector('.swiper');
if (swiperClass) {
  const swiper = new Swiper('.swiper', {

    breakpoints: {
          320: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
          1024: {
            slidesPerView: 4,
          }
        },

    navigation: {
      nextEl: '.new__button--left',
      prevEl: '.new__button--right',
    },
  });
}


//-------------------Catalog form--------------

const itemProduct = document.querySelector('.catalog__form-item--product');
const productSection = document.querySelector('.catalog__section--product');
const itemMaterial = document.querySelector('.catalog__form-item--material');
const materialSection = document.querySelector('.catalog__section--material');
const itemCollection = document.querySelector('.catalog__form-item--collection');
const collectionSection = document.querySelector('.catalog__section--collection');
const itemPrice = document.querySelector('.catalog__form-item--price');
const priceSection = document.querySelector('.catalog__section--price');

if (itemProduct) {
  itemProduct.classList.remove('catalog__form-item--opened');
  itemProduct.classList.remove('catalog__form-item--nojs');
  itemMaterial.classList.remove('catalog__form-item--opened');
  itemMaterial.classList.remove('catalog__form-item--nojs');
  itemCollection.classList.remove('catalog__form-item--opened');
  itemCollection.classList.remove('catalog__form-item--nojs');
  itemPrice.classList.remove('catalog__form-item--opened');
  itemPrice.classList.remove('catalog__form-item--nojs');

  productSection.addEventListener('click', function() {
    itemProduct.classList.toggle('catalog__form-item--opened');
    itemProduct.classList.toggle('catalog__form-item--nojs');
  });

  materialSection.addEventListener('click', function() {
    itemMaterial.classList.toggle('catalog__form-item--opened');
    itemMaterial.classList.toggle('catalog__form-item--nojs');
  });

  collectionSection.addEventListener('click', function() {
    itemCollection.classList.toggle('catalog__form-item--opened');
    itemCollection.classList.toggle('catalog__form-item--nojs');
  });

  priceSection.addEventListener('click', function() {
    itemPrice.classList.toggle('catalog__form-item--opened');
    itemPrice.classList.toggle('catalog__form-item--nojs');
  });
}
})();
