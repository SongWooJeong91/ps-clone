const navFLi = document.querySelectorAll('.nav__f-li');
const submenuWrap = document.querySelector('.submenu__wrap');
const subNav = document.querySelectorAll('.sub__nav');
const titUnderline = document.querySelectorAll('.tit__underline');
const navTitText = document.querySelectorAll('.nav__tit-text');

for (let z = 0; z < navFLi.length; z++) {
  navFLi[z].addEventListener('mouseover', () => {
    titUnderline[z].style.transform = 'translateY(29px) scaleX(1)';
    navTitText[z].style.color = '#e0002a';
    submenuWrap.style.top = '80px';
    submenuWrap.style.transitionDuration = '0.8s';
    for (let i = 0; i < subNav.length; i++) {
      subNav[i].style.top = '80px';
      subNav[i].style.transitionDuration = '0.6s';
    }
  });
  navFLi[z].addEventListener('mouseout', () => {
    titUnderline[z].style.transform = 'translateY(29px) scaleX(0)';
    navTitText[z].style.color = '#222';
    submenuWrap.style.top = '-240px';
    submenuWrap.style.transitionDuration = '0.5s';
    for (let i = 0; i < subNav.length; i++) {
      subNav[i].style.top = '-240px';
      subNav[i].style.transitionDuration = '0.5s';
    }
  });
}

for (let i = 0; i < subNav.length; i++) {
  subNav[i].addEventListener('mouseover', () => {
    navTitText[i].style.color = '#e0002a';
    titUnderline[i].style.transform = 'translateY(29px) scaleX(1)';
  });
  subNav[i].addEventListener('mouseout', () => {
    navTitText[i].style.color = '#222';
    titUnderline[i].style.transform = 'translateY(29px) scaleX(0)';
  });
}
