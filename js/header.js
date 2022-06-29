const headerWrap = document.querySelector('.header__wrap');
const navMenu = document.querySelector('.nav__menu');
const subNav = document.querySelectorAll('.sub__nav');
const headerBackColorTop = document.querySelector('.header__backColor-top');
const headerBackColorBottom = document.querySelector(
  '.header__backColor-bottom',
);
const menuTitUnder = document.querySelectorAll('.menu__tit-under');

function menuHandler(ele, boxTop) {
  ele.style.top = boxTop;
  ele.classList.add('animated');
}
function menuBackHandler(ele, visibilityV, transitionV) {
  ele.style.visibility = visibilityV;
  headerBackColorBottom.style.transition = transitionV;
}

navMenu.addEventListener('mouseover', () => {
  subNav.forEach((item) => {
    menuHandler(item, '81px');
  });
  menuHandler(headerBackColorTop, '80px');
  menuBackHandler(headerBackColorBottom, 'visible', 'all 0.8s ease-in-out');
  headerWrap.style.boxShadow = 'none';
});

navMenu.addEventListener('mouseout', () => {
  subNav.forEach((item) => {
    menuHandler(item, '-239px');
  });
  menuHandler(headerBackColorTop, '-240px');
  menuBackHandler(headerBackColorBottom, 'hidden', 'all 0.4s ease-in-out');
  headerWrap.style.boxShadow = '0 5px 5px rgb(0 0 0 / 10%)';
});
