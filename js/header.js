const navMenu = document.querySelector('.nav__menu');
const subNav = document.querySelectorAll('.sub__nav');
const headerBackColorTop = document.querySelector('.header__backColor-top');
const headerBackColorBottom = document.querySelector(
  '.header__backColor-bottom',
);
const menuTitUnder = document.querySelectorAll('.menu__tit-under');

function backColorTopHandler(boxTop, topBoxShadow, addClass) {
  headerBackColorTop.style.top = boxTop;
  headerBackColorTop.style.boxShadow = topBoxShadow;
  headerBackColorTop.classList.add(addClass);
}

navMenu.addEventListener('mouseover', () => {
  subNav.forEach((item) => {
    item.style.top = '81px';
    item.classList.add('animated');
  });
  backColorTopHandler('80px', '0 5px 5px rgb(0 0 0 / 10%)', 'animated');
  headerBackColorBottom.style.opacity = '1';
  headerBackColorBottom.style.transition = 'all 1.2s ease-in-out';
});

navMenu.addEventListener('mouseout', () => {
  subNav.forEach((item) => {
    item.style.top = '-239px';
    item.classList.add('animated');
  });
  backColorTopHandler('-240px', 'none', 'animated');
  headerBackColorBottom.style.opacity = '0';
  headerBackColorBottom.style.transition = 'all 0.1s ease-in-out';
});
