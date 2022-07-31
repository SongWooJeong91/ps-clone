const footerSkmenu = document.querySelector('.footer__skmenu');
const footerSkmenuSub = document.querySelector('.footer__skmenu-sub');
const footerIcon = document.querySelector('.footer__icon');

function toggleHandler() {
  footerSkmenu.classList.toggle('checked');
}

footerSkmenu.addEventListener('click', () => {
  toggleHandler();
  if (footerSkmenu.classList.contains('checked')) {
    footerSkmenuSub.style.bottom = '45px';
    footerIcon.style.transform = 'rotate(135deg)';
    footerIcon.style.bottom = '19px';
  } else {
    footerSkmenuSub.style.bottom = '-225px';
    footerIcon.style.transform = 'rotate(-45deg)';
    footerIcon.style.bottom = '16px';
  }
});
