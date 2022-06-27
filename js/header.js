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
function menuBackHandler(ele, visibilityV, topV, transitionV) {
  ele.style.visibility = visibilityV;
  headerBackColorBottom.style.top = topV;
  headerBackColorBottom.style.transition = transitionV;
}

navMenu.addEventListener('mouseover', () => {
  subNav.forEach((item) => {
    menuHandler(item, '81px');
  });
  menuHandler(headerBackColorTop, '80px');
  menuBackHandler(
    headerBackColorBottom,
    'visible',
    '400px',
    'all 0.7s ease-in-out',
  );
  headerWrap.style.boxShadow = 'none';
});

navMenu.addEventListener('mouseout', () => {
  subNav.forEach((item) => {
    menuHandler(item, '-239px');
  });
  menuHandler(headerBackColorTop, '-240px');
  menuBackHandler(
    headerBackColorBottom,
    'hidden',
    '700px',
    'all 0.3s ease-in-out',
  );
  headerWrap.style.boxShadow = '0 5px 5px rgb(0 0 0 / 10%)';
});
