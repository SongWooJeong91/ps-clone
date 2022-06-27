const topBtn = document.querySelector('.top-btn');

topBtn.addEventListener('click', () => {
  console.log('스크롤');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const sliderView = document.querySelector('.slider__view');
const conTran = document.querySelector('.con__tran');
const conCard = document.querySelector('.con__card');
const conCardLi = document.querySelectorAll('.con__card>li');
const conTranProduct = document.querySelector('.con__tran-product');
const conProductUl = document.querySelector('.con__product-ul');
const conProductUlLi = document.querySelectorAll('.con__product-ul>li');
const conTranStore = document.querySelector('.con__tran-store');
const coServiceWrapH3 = document.querySelector('.con__service-wrap h3');
const conServiceUl = document.querySelectorAll('.con__service-ul>li');
const conTranActivity = document.querySelector('.con__tran-activity');
window.addEventListener('scroll', () => {
  let scrY = window.scrollY;
  // console.log('scrY', scrY);
  // console.log(
  //   'conTranStore.getBoundingClientRect().top',
  //   conTranStore.getBoundingClientRect().top,
  // );
  // console.log(
  //   'conTranStore.getBoundingClientRect().height',
  //   conTranStore.getBoundingClientRect().height,
  // );
  if (conTran.getBoundingClientRect().top - scrY < 0) {
    conTran.style.transform = 'translateY(0px)';
    conTran.style.opacity = '1';
    conTran.style.transition = 'all 1.4s ease-out';
  }
  if (conCard.getBoundingClientRect().top - scrY < 0) {
    conCard.style.transform = 'translateY(0px)';
    conCardLi.forEach((card, idx) => {
      card.style.transform = 'translateY(0px)';
      card.style.opacity = '1';
      card.style.transition = `all ${1 + 0.2 * idx}s ease-out`;
    });
  }
  if (conTranProduct.getBoundingClientRect().top - scrY < 0) {
    conTranProduct.style.transform = 'translateY(0px)';
    conTranProduct.style.opacity = '1';
    conTranProduct.style.transition = 'all 1.4s ease-out';
  }
  if (conProductUl.getBoundingClientRect().top - scrY < 0) {
    conProductUl.style.transform = 'translateY(0px)';
    conProductUlLi.forEach((item, idx) => {
      item.style.transform = 'translateY(0px)';
      item.style.opacity = '1';
      item.style.transition = `all ${1 + 0.2 * idx}s ease-out`;
    });
  }
  //   여기서 부터 이상함;;
  if (
    conTranStore.getBoundingClientRect().top <
    conTranStore.getBoundingClientRect().height / 1.5
  ) {
    conTranStore.style.transform = 'translateY(0px)';
    conTranStore.style.opacity = '1';
    conTranStore.style.transition = 'all 1.4s ease-out';
  }
  if (coServiceWrapH3.getBoundingClientRect().top - scrY < 0) {
    coServiceWrapH3.style.transform = 'translateX(0px)';
    coServiceWrapH3.style.opacity = '1';
    coServiceWrapH3.style.transition = 'all 1.4s ease-out';
    conServiceUl.forEach((item, idx) => {
      item.style.transform = 'translateX(0px)';
      item.style.opacity = '1';
      item.style.transition = `all ${1 + 0.2 * idx}s ease-out`;
    });
  }
  if (conTranActivity.getBoundingClientRect().top - scrY < 0) {
    conTranActivity.style.transform = 'translateY(0px)';
    conTranActivity.style.opacity = '1';
    conTranActivity.style.transition = 'all 1.4s ease-out';
  }
});
