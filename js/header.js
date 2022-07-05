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
});

navMenu.addEventListener('mouseout', () => {
  subNav.forEach((item) => {
    menuHandler(item, '-239px');
  });
  menuHandler(headerBackColorTop, '-240px');
  menuBackHandler(headerBackColorBottom, 'hidden', 'all 0.4s ease-in-out');
});

// 미디어쿼리
const hambergerBtn = document.querySelector('.hamberger__btn');
const mediaNav = document.querySelector('.media__nav');
const hambergerBtnBar = document.querySelectorAll('.hamberger__btn span');
hambergerBtnBar.forEach((item) =>
  hambergerBtn.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      mediaNav.classList.remove('active');
    } else {
      item.classList.add('active');
      mediaNav.classList.add('active');
      mediaNav.style.transition = 'all 0.8s ease-in-out';
    }
  }),
);

const mediaMenu = document.querySelectorAll('.media__menu-tit');
const mediaSubmenu = document.querySelectorAll('.media__submenu');
mediaMenu.forEach((menu, index) => {
  menu.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      mediaSubmenu[index].classList.remove('active');
    } else {
      menu.classList.add('active');
      mediaSubmenu[index].classList.add('active');
    }
  });
});
